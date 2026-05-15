import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

interface AnalyzeButtonProps {
  onPress: () => void;
  isLoading: boolean;
  disabled: boolean;
}

export const AnalyzeButton: React.FC<AnalyzeButtonProps> = ({ onPress, isLoading, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      className={`w-full mt-6 rounded-xl overflow-hidden ${
        disabled && !isLoading ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <View className="bg-primaryDark flex-row items-center justify-center py-4 px-6 relative">
        <View className="absolute inset-0 bg-primary opacity-50" />
        {isLoading ? (
          <View className="flex-row items-center">
            <ActivityIndicator color={theme.colors.text} size="small" className="mr-3" />
            <Text className="text-text font-bold text-lg">Analiz Ediliyor...</Text>
          </View>
        ) : (
          <View className="flex-row items-center">
            <Ionicons name="sparkles" size={20} color={theme.colors.text} className="mr-2" />
            <Text className="text-text font-bold text-lg ml-2">Analiz Et</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
