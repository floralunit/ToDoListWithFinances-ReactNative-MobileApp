import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../styles/colors';

export default function AboutScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.Main,
      padding: 20
    }}>
      <Text style={{ color: COLORS.Primary, fontSize: 22 }}>
        floral.dev
      </Text>
    </View>
  );
}
