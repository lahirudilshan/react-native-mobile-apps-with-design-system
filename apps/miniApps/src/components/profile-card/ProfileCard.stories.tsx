import React from 'react';
import { View } from 'react-native';
import { ProfileCard } from './index';

export default {
  title: 'MiniApps/ProfileCard',
  component: ProfileCard,
};

export const Active = () => (
  <View style={{ padding: 20 }}>
    <ProfileCard 
      name="John Doe" 
      role="Software Engineer" 
      status="active" 
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const Away = () => (
  <View style={{ padding: 20 }}>
    <ProfileCard 
      name="Jane Smith" 
      role="Product Designer" 
      status="away" 
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);

export const Offline = () => (
  <View style={{ padding: 20 }}>
    <ProfileCard 
      name="Mike Johnson" 
      role="Project Manager" 
      status="offline" 
      onPress={() => console.log('Profile pressed')}
    />
  </View>
);