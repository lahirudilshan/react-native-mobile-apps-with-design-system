import React from 'react';
import { View } from 'react-native';
import { Badge } from './index';

export default {
  title: 'Design System/Badge',
  component: Badge,
};

export const Primary = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Primary" />
  </View>
);

export const Success = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Success" variant="success" />
  </View>
);

export const Warning = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Warning" variant="warning" />
  </View>
);

export const Error = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Error" variant="error" />
  </View>
);

export const Small = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Small" size="small" />
  </View>
);

export const Medium = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Medium" size="medium" />
  </View>
);

export const Large = () => (
  <View style={{ padding: 20 }}>
    <Badge label="Large" size="large" />
  </View>
);