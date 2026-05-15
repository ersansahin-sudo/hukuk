import React from 'react';
import { View, Text } from 'react-native';
import { ContractSummary } from '../data/mockData';

interface SummaryCardProps {
  summary: ContractSummary;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  return (
    <View className="bg-card rounded-2xl p-5 mb-6 shadow-lg shadow-black/50 border border-cardLight">
      <View className="items-center mb-6 border-b border-cardLight pb-4">
        <Text className="text-textMuted text-sm uppercase tracking-wider font-semibold mb-1">
          Tespit Edilen Toplam Risk
        </Text>
        <Text className="text-text text-4xl font-bold">
          {summary.totalRisks}
        </Text>
      </View>
      
      <View className="flex-row justify-between">
        <View className="items-center flex-1">
          <View className="w-10 h-10 rounded-full bg-danger/20 items-center justify-center mb-2">
            <Text className="text-danger font-bold text-lg">{summary.critical}</Text>
          </View>
          <Text className="text-textMuted text-xs">Kritik</Text>
        </View>
        
        <View className="items-center flex-1">
          <View className="w-10 h-10 rounded-full bg-warning/20 items-center justify-center mb-2">
            <Text className="text-warning font-bold text-lg">{summary.high}</Text>
          </View>
          <Text className="text-textMuted text-xs">Yüksek</Text>
        </View>
        
        <View className="items-center flex-1">
          <View className="w-10 h-10 rounded-full bg-caution/20 items-center justify-center mb-2">
            <Text className="text-caution font-bold text-lg">{summary.medium}</Text>
          </View>
          <Text className="text-textMuted text-xs">Orta</Text>
        </View>
        
        <View className="items-center flex-1">
          <View className="w-10 h-10 rounded-full bg-success/20 items-center justify-center mb-2">
            <Text className="text-success font-bold text-lg">{summary.low}</Text>
          </View>
          <Text className="text-textMuted text-xs">Düşük</Text>
        </View>
      </View>
    </View>
  );
};
