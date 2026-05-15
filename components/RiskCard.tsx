import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AnalysisResult } from '../data/mockData';
import { RiskBadge } from './RiskBadge';
import { theme } from '../constants/theme';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface RiskCardProps {
  item: AnalysisResult;
}

export const RiskCard: React.FC<RiskCardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View className="bg-card rounded-2xl p-5 mb-4 shadow-lg shadow-black/50 border border-cardLight">
      <View className="flex-row justify-between items-start mb-3">
        <RiskBadge level={item.riskSeviyesi} />
        <View className="bg-primary/20 px-3 py-1 rounded-full">
          <Text className="text-primaryLight text-xs font-semibold">{item.hukukAlani}</Text>
        </View>
      </View>
      
      <Text className="text-text font-medium text-base mb-4 leading-6">
        "{item.madde}"
      </Text>
      
      <TouchableOpacity 
        onPress={toggleExpand}
        className="flex-row items-center py-2"
        activeOpacity={0.7}
      >
        <Text className="text-primaryLight font-semibold mr-2">
          {expanded ? 'Detayları Gizle' : 'Detayları Göster'}
        </Text>
        <Ionicons 
          name={expanded ? "chevron-up" : "chevron-down"} 
          size={16} 
          color={theme.colors.primaryLight} 
        />
      </TouchableOpacity>
      
      {expanded && (
        <View className="mt-4 pt-4 border-t border-cardLight">
          <View className="mb-4">
            <View className="flex-row items-center mb-1">
              <Ionicons name="warning" size={16} color={theme.colors.warning} className="mr-2" />
              <Text className="text-warning font-bold ml-1">Sorun</Text>
            </View>
            <Text className="text-textMuted text-sm leading-5 pl-5">
              {item.sorun}
            </Text>
          </View>
          
          <View className="mb-4">
            <View className="flex-row items-center mb-1">
              <Ionicons name="bulb" size={16} color={theme.colors.primary} className="mr-2" />
              <Text className="text-primary font-bold ml-1">Önerilen Düzenleme</Text>
            </View>
            <Text className="text-textMuted text-sm leading-5 pl-5">
              {item.onerilenDuzeltme}
            </Text>
          </View>
          
          <View className="bg-cardLight p-4 rounded-xl mt-2 border border-success/30">
            <View className="flex-row items-center mb-2">
              <Ionicons name="checkmark-circle" size={16} color={theme.colors.success} className="mr-2" />
              <Text className="text-success font-bold text-xs ml-1">ÖRNEK DÜZELTİLMİŞ MADDE</Text>
            </View>
            <Text className="text-text font-medium text-sm leading-5">
              "{item.duzeltilmisMadde}"
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
