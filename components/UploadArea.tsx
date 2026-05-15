import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

interface UploadAreaProps {
  fileName: string | null;
  onPress: () => void;
}

export const UploadArea: React.FC<UploadAreaProps> = ({ fileName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="w-full mt-8"
    >
      <View 
        className="w-full p-8 border-2 border-dashed rounded-2xl items-center justify-center bg-card/50"
        style={{ borderColor: fileName ? theme.colors.primary : theme.colors.cardLight }}
      >
        <View className="w-16 h-16 rounded-full bg-card items-center justify-center mb-4 border border-cardLight shadow-lg shadow-primary/20">
          <Ionicons 
            name={fileName ? "document-text" : "cloud-upload-outline"} 
            size={32} 
            color={fileName ? theme.colors.primary : theme.colors.primaryLight} 
          />
        </View>
        
        {fileName ? (
          <View className="items-center">
            <Text className="text-text font-bold text-lg mb-1 text-center">
              Dosya Seçildi
            </Text>
            <Text className="text-primaryLight text-sm text-center">
              {fileName}
            </Text>
          </View>
        ) : (
          <View className="items-center">
            <Text className="text-text font-bold text-lg mb-1 text-center">
              PDF Sözleşme Yükle
            </Text>
            <Text className="text-textMuted text-sm text-center">
              Dosyanızı seçin ve analiz başlatın
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
