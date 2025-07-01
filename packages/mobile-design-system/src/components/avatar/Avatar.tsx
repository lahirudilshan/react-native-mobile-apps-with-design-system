import React from 'react';
import { View, Image, Text, StyleSheet, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';

export interface AvatarProps {
  source?: ImageSourcePropType;
  size?: 'small' | 'medium' | 'large';
  name?: string;
  style?: StyleProp<ViewStyle>;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  source, 
  size = 'medium', 
  name,
  style 
}) => {
  const avatarSize = {
    small: 32,
    medium: 48,
    large: 64
  }[size];

  const fontSize = {
    small: 14,
    medium: 18,
    large: 24
  }[size];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <View 
      style={[
        styles.container, 
        { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
        style
      ]}
    >
      {source ? (
        <Image 
          source={source} 
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2
          }} 
        />
      ) : name ? (
        <Text style={[styles.initials, { fontSize }]}>
          {getInitials(name)}
        </Text>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E1E1',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  initials: {
    color: '#555',
    fontWeight: 'bold',
  },
  placeholder: {
    backgroundColor: '#BBBBBB',
    width: '100%',
    height: '100%',
  }
});