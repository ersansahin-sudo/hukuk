import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

export default function SettingsScreen() {
  const SettingItem = ({ icon, title, value }: { icon: any, title: string, value?: string }) => (
    <TouchableOpacity className="flex-row items-center justify-between bg-card p-4 rounded-xl mb-3 border border-cardLight">
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-cardLight items-center justify-center mr-3">
          <Ionicons name={icon} size={20} color={theme.colors.primaryLight} />
        </View>
        <Text className="text-text font-medium">{title}</Text>
      </View>
      <View className="flex-row items-center">
        {value && <Text className="text-textMuted mr-2">{value}</Text>}
        <Ionicons name="chevron-forward" size={20} color={theme.colors.textMuted} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-6 pt-6 pb-4 bg-background border-b border-cardLight">
        <Text className="text-text font-bold text-xl">Ayarlar</Text>
      </View>
      
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-textMuted font-bold text-sm tracking-wider uppercase mb-3 px-1 mt-2">
          Hesap
        </Text>
        <SettingItem icon="person-outline" title="Profil Bilgileri" value="Av. Ahmet Y." />
        <SettingItem icon="business-outline" title="Firma Bilgileri" value="Hukuk Bürosu" />
        <SettingItem icon="card-outline" title="Abonelik Planı" value="Premium" />
        
        <Text className="text-textMuted font-bold text-sm tracking-wider uppercase mb-3 px-1 mt-6">
          Uygulama
        </Text>
        <SettingItem icon="color-palette-outline" title="Görünüm" value="Koyu Tema" />
        <SettingItem icon="notifications-outline" title="Bildirimler" />
        <SettingItem icon="language-outline" title="Dil" value="Türkçe" />
        
        <Text className="text-textMuted font-bold text-sm tracking-wider uppercase mb-3 px-1 mt-6">
          Destek
        </Text>
        <SettingItem icon="help-circle-outline" title="Yardım Merkezi" />
        <SettingItem icon="document-text-outline" title="Gizlilik Politikası" />
        
        <TouchableOpacity className="mt-8 mb-8 items-center p-4">
          <Text className="text-danger font-bold text-base">Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
