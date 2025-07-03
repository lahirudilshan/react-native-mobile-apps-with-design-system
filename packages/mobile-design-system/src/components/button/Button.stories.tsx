import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Design System/Button',
    component: Button,
    argTypes: {
        title: {
            control: 'text',
            description: 'Text displayed on the button',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
            description: 'Visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        onPress: {
            action: 'pressed',
            description: 'Function called when the button is pressed',
        },
        style: {
            control: 'object',
            description: 'Additional styles for the button container',
        },
        titleStyle: {
            control: 'object',
            description: 'Additional styles for the button text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        title: 'Default Button',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Primary: Story = {
    args: {
        title: 'Primary Button',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Secondary: Story = {
    args: {
        title: 'Secondary Button',
        variant: 'secondary',
        size: 'medium',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Outline: Story = {
    args: {
        title: 'Outline Button',
        variant: 'outline',
        size: 'medium',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Small: Story = {
    args: {
        title: 'Small Button',
        size: 'small',
        variant: 'primary',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Medium: Story = {
    args: {
        title: 'Medium Button',
        size: 'medium',
        variant: 'primary',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Large: Story = {
    args: {
        title: 'Large Button',
        size: 'large',
        variant: 'primary',
        disabled: false,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};

export const Disabled: Story = {
    args: {
        title: 'Disabled Button',
        variant: 'primary',
        size: 'medium',
        disabled: true,
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Button {...args} />
        </View>
    ),
};
