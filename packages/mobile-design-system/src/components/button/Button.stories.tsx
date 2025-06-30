import React from 'react';
import { Button } from './index';
import { View } from 'react-native';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Button title="Default Button" onPress={() => {}} />
  </View>
);

export const Primary = () => (
  <View style={{ padding: 20 }}>
    <Button title="Primary Button" onPress={() => {}} />
  </View>
);

export const Secondary = () => (
  <View style={{ padding: 20 }}>
    <Button title="Secondary Button" onPress={() => {}} />
  </View>
);
