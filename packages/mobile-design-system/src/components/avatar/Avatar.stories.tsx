import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Design System/Avatar',
    component: Avatar,
    argTypes: {
        name: {
            control: 'text',
            description: 'The name to display initials for',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the avatar',
        },
        source: {
            control: 'object',
            description: 'Image source for the avatar',
        },
        style: {
            control: 'object',
            description: 'Additional styles for the avatar',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        name: 'Lahiru Dilshan',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Avatar {...args} />
        </View>
    ),
};

export const Small: Story = {
    args: {
        name: 'Lahiru Dilshan',
        size: 'small',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Avatar {...args} />
        </View>
    ),
};

export const Medium: Story = {
    args: {
        name: 'Lahiru Dilshan',
        size: 'medium',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Avatar {...args} />
        </View>
    ),
};

export const Large: Story = {
    args: {
        name: 'Lahiru Dilshan',
        size: 'large',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Avatar {...args} />
        </View>
    ),
};
