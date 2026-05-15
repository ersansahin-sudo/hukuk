import React from 'react';
import { View, Text } from 'react-native';
import { RiskLevel } from '../data/mockData';
import { theme } from '../constants/theme';

interface RiskBadgeProps {
  level: RiskLevel;
}

export const RiskBadge: React.FC<RiskBadgeProps> = ({ level }) => {
  let bgColor = '';
  let textColor = '';

  switch (level) {
    case 'Kritik':
      bgColor = 'bg-danger/20';
      textColor = 'text-danger';
      break;
    case 'Yüksek':
      bgColor = 'bg-warning/20';
      textColor = 'text-warning';
      break;
    case 'Orta':
      bgColor = 'bg-caution/20';
      textColor = 'text-caution';
      break;
    case 'Düşük':
      bgColor = 'bg-success/20';
      textColor = 'text-success';
      break;
    default:
      bgColor = 'bg-cardLight';
      textColor = 'text-text';
  }

  return (
    <View className={`px-3 py-1 rounded-full ${bgColor} self-start`}>
      <Text className={`text-xs font-bold ${textColor}`}>
        {level} Risk
      </Text>
    </View>
  );
};
