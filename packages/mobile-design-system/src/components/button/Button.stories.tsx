import React from 'react';
import { View } from 'react-native';
import { Button } from './index';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const Default = () => (
  <View style={{ padding: 20 }}>
    <Button title="Default Button" onPress={() => {}} />
  </View>
);

export const Primary = () => (
  <View style={{ padding: 20 }}>
    <Button title="Primary Button" variant="primary" onPress={() => {}} />
  </View>
);

export const Secondary = () => (
  <View style={{ padding: 20 }}>
    <Button title="Secondary Button" variant="secondary" onPress={() => {}} />
  </View>
);

export const Outline = () => (
  <View style={{ padding: 20 }}>
    <Button title="Outline Button" variant="outline" onPress={() => {}} />
  </View>
);

export const Small = () => (
  <View style={{ padding: 20 }}>
    <Button title="Small Button" size="small" onPress={() => {}} />
  </View>
);

export const Medium = () => (
  <View style={{ padding: 20 }}>
    <Button title="Medium Button" size="medium" onPress={() => {}} />
  </View>
);

export const Large = () => (
  <View style={{ padding: 20 }}>
    <Button title="Large Button" size="large" onPress={() => {}} />
  </View>
);

export const Disabled = () => (
  <View style={{ padding: 20 }}>
    <Button title="Disabled Button" disabled onPress={() => {}} />
  </View>
);