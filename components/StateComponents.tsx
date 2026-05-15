import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

export const EmptyState = () => (
  <View className="flex-1 items-center justify-center p-8 mt-20">
    <View className="w-24 h-24 rounded-full bg-cardLight items-center justify-center mb-6">
      <Ionicons name="document-text-outline" size={48} color={theme.colors.primaryLight} />
    </View>
    <Text className="text-text font-bold text-xl mb-2 text-center">
      Henüz Analiz Yok
    </Text>
    <Text className="text-textMuted text-center leading-6">
      Ana sayfadan bir sözleşme yükleyerek analizi başlatabilirsiniz.
    </Text>
  </View>
);

export const ErrorState = ({ error }: { error: string }) => (
  <View className="flex-1 items-center justify-center p-8 mt-20">
    <View className="w-24 h-24 rounded-full bg-danger/20 items-center justify-center mb-6">
      <Ionicons name="alert-circle-outline" size={48} color={theme.colors.danger} />
    </View>
    <Text className="text-text font-bold text-xl mb-2 text-center">
      Bir Hata Oluştu
    </Text>
    <Text className="text-danger text-center leading-6 mb-6">
      {error}
    </Text>
  </View>
);
