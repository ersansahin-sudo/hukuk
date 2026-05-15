import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { AnalysisResult, getSummary, ContractSummary } from '../data/mockData';
import { analyzeContractPdf } from '../services/analyzeService';
import { RiskCard } from '../components/RiskCard';
import { SummaryCard } from '../components/SummaryCard';
import { EmptyState, ErrorState } from '../components/StateComponents';
import { theme } from '../constants/theme';

export default function AnalysisScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult[] | null>(null);
  const [summary, setSummary] = useState<ContractSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [analyzedFileName, setAnalyzedFileName] = useState<string | null>(null);

  useEffect(() => {
    if (params.startAnalysis === 'true' && params.fileName) {
      startAnalysis(params.fileName as string);
    }
  }, [params.startAnalysis]);

  const startAnalysis = async (fileName: string) => {
    setIsAnalyzing(true);
    setError(null);
    setAnalyzedFileName(fileName);
    
    try {
      const data = await analyzeContractPdf({ name: fileName });
      setResults(data);
      setSummary(getSummary(data));
    } catch (err) {
      setError('Analiz sırasında beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
      router.setParams({ startAnalysis: 'false' });
    }
  };

  const clearResults = () => {
    setResults(null);
    setSummary(null);
    setAnalyzedFileName(null);
  };

  if (isAnalyzing) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }}>
        <View className="items-center p-8">
          <View className="w-20 h-20 bg-card rounded-full items-center justify-center mb-6 shadow-lg shadow-primary/20 border border-primary/30">
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </View>
          <Text className="text-text font-bold text-xl mb-2">Belge Analiz Ediliyor</Text>
          <Text className="text-textMuted text-center text-sm">
            "{analyzedFileName}" okunuyor...{'\n'}Yapay zeka yasal riskleri tespit ediyor.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View className="px-6 pt-6 pb-4 bg-background border-b border-cardLight flex-row justify-between items-center z-10">
        <View>
          <Text className="text-text font-bold text-xl">Analiz Sonuçları</Text>
          {analyzedFileName && (
            <Text className="text-primaryLight text-xs mt-1" numberOfLines={1} ellipsizeMode="middle">
              {analyzedFileName}
            </Text>
          )}
        </View>
        
        {results && (
          <TouchableOpacity 
            onPress={clearResults}
            className="bg-cardLight p-2 rounded-full"
          >
            <Ionicons name="trash-outline" size={20} color={theme.colors.textMuted} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {error ? (
          <ErrorState error={error} />
        ) : results && summary ? (
          <>
            <SummaryCard summary={summary} />
            
            <Text className="text-textMuted font-bold text-sm tracking-wider uppercase mb-4 mt-2 px-1">
              Riskli Maddeler ({results.length})
            </Text>
            
            {results.map((item, index) => (
              <RiskCard key={index} item={item} />
            ))}
            
            <TouchableOpacity 
              onPress={() => router.push('/')}
              className="mt-6 border border-primary/30 py-4 rounded-xl items-center bg-card/50"
            >
              <Text className="text-primaryLight font-bold">Yeni Belge Analiz Et</Text>
            </TouchableOpacity>
          </>
        ) : (
          <EmptyState />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
