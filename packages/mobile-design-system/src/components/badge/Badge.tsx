import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
}) => {
  const badgeStyles = [
    styles.badge,
    styles[`${variant}Badge`],
    styles[`${size}Badge`],
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    textStyle,
  ];

  return (
    <View style={badgeStyles}>
      <Text style={textStyles}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBadge: {
    backgroundColor: '#007AFF',
  },
  successBadge: {
    backgroundColor: '#34C759',
  },
  warningBadge: {
    backgroundColor: '#FF9500',
  },
  errorBadge: {
    backgroundColor: '#FF3B30',
  },
  smallBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  mediumBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  largeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  successText: {
    color: '#FFFFFF',
  },
  warningText: {
    color: '#FFFFFF',
  },
  errorText: {
    color: '#FFFFFF',
  },
  smallText: {
    fontSize: 10,
  },
  mediumText: {
    fontSize: 12,
  },
  largeText: {
    fontSize: 14,
  },
});