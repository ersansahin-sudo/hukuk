import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

export default function ReportsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center p-8">
        <View className="w-24 h-24 rounded-full bg-cardLight items-center justify-center mb-6">
          <Ionicons name="documents-outline" size={48} color={theme.colors.primaryLight} />
        </View>
        <Text className="text-text font-bold text-xl mb-2 text-center">
          Geçmiş Raporlar
        </Text>
        <Text className="text-textMuted text-center leading-6">
          Analiz edilen sözleşmelerin detaylı raporları ve PDF çıktıları yakında burada listelenecek.
        </Text>
      </View>
    </SafeAreaView>
  );
}
