import React from 'react';
import { View } from 'react-native';
import { Avatar } from './index';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Avatar name="John Doe" />
  </View>
);

export const Small = () => (
  <View style={{ padding: 20 }}>
    <Avatar name="John Doe" size="small" />
  </View>
);

export const Medium = () => (
  <View style={{ padding: 20 }}>
    <Avatar name="John Doe" size="medium" />
  </View>
);

export const Large = () => (
  <View style={{ padding: 20 }}>
    <Avatar name="John Doe" size="large" />
  </View>
);