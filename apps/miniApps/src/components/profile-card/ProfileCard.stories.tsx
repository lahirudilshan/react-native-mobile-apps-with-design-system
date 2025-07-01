import React from 'react';
import { View } from 'react-native';
import { ProfileCard } from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
  title: 'MiniApps/ProfileCard',
  component: ProfileCard,
  argTypes: {
    name: { control: 'text' },
    role: { control: 'text' },
    status: {
      control: 'select',
      options: ['active', 'away', 'offline'],
    },
    onPress: { action: 'pressed' },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Active: Story = {
  args: {
    name: 'Lahiru Dilshan',
    role: 'Software Engineer',
    status: 'active',
    onPress: () => console.log('Profile pressed'),
  },
  render: args => (
    <View style={{ padding: 20 }}>
      <ProfileCard {...args} />
    </View>
  ),
};

export const Away: Story = {
  args: {
    name: 'Jane Smith',
    role: 'Product Designer',
    status: 'away',
    onPress: () => console.log('Profile pressed'),
  },
  render: args => (
    <View style={{ padding: 20 }}>
      <ProfileCard {...args} />
    </View>
  ),
};

export const Offline: Story = {
  args: {
    name: 'Mike Johnson',
    role: 'Project Manager',
    status: 'offline',
    onPress: () => console.log('Profile pressed'),
  },
  render: args => (
    <View style={{ padding: 20 }}>
      <ProfileCard {...args} />
    </View>
  ),
};
