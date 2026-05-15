import React, { useState } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { UploadArea } from '../components/UploadArea';
import { AnalyzeButton } from '../components/AnalyzeButton';
import { theme } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [file, setFile] = useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const router = useRouter();

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setFile(result.assets[0]);
      }
    } catch (err) {
      console.log('Belge seçimi iptal edildi veya hata oluştu:', err);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    
    try {
      router.push({
        pathname: '/analysis',
        params: { 
          fileName: file.name,
          startAnalysis: 'true' 
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsAnalyzing(false);
      setFile(null);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      
      <ScrollView 
        style={{ flex: 1 }} 
        contentContainerStyle={{ flexGrow: 1, padding: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mt-8 mb-4">
          <View className="flex-row items-center mb-3">
            <Ionicons name="shield-checkmark" size={28} color={theme.colors.primary} className="mr-2" />
            <Text className="text-text font-bold text-2xl tracking-wide">
              LegalAI
            </Text>
          </View>
          <Text className="text-primaryLight font-medium text-lg mb-1">
            Contract Review
          </Text>
          <Text className="text-textMuted text-sm leading-5">
            Türkiye hukukuna göre AI destekli sözleşme analizi
          </Text>
        </View>

        <UploadArea 
          fileName={file ? file.name : null} 
          onPress={handlePickDocument} 
        />

        <AnalyzeButton 
          onPress={handleAnalyze} 
          isLoading={isAnalyzing} 
          disabled={!file} 
        />

        <View className="mt-12 bg-cardLight/30 p-5 rounded-2xl border border-primary/10">
          <View className="flex-row items-center mb-3">
            <Ionicons name="information-circle" size={20} color={theme.colors.primaryLight} className="mr-2" />
            <Text className="text-text font-bold">Nasıl Çalışır?</Text>
          </View>
          <Text className="text-textMuted text-sm leading-6">
            AI; sözleşmedeki riskli maddeleri, KVKK, İş Kanunu, Türk Borçlar Kanunu ve ticari hükümler açısından ön analiz eder. Risk seviyelerini belirler ve yasalara uygun düzenleme önerileri sunar.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
