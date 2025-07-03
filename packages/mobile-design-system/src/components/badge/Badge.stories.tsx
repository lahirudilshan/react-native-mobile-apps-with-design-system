import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Design System/Badge',
    component: Badge,
    argTypes: {
        label: {
            control: 'text',
            description: 'Text displayed in the badge',
        },
        variant: {
            control: 'select',
            options: ['primary', 'success', 'warning', 'error'],
            description: 'Visual style variant of the badge',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size of the badge',
        },
        style: {
            control: 'object',
            description: 'Additional styles for the badge container',
        },
        textStyle: {
            control: 'object',
            description: 'Additional styles for the badge text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        label: 'Primary',
        variant: 'primary',
        size: 'medium',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};

export const Success: Story = {
    args: {
        label: 'Success',
        variant: 'success',
        size: 'medium',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};

export const Warning: Story = {
    args: {
        label: 'Warning',
        variant: 'warning',
        size: 'medium',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};

export const Error: Story = {
    args: {
        label: 'Error',
        variant: 'error',
        size: 'medium',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};

export const Small: Story = {
    args: {
        label: 'Small',
        size: 'small',
        variant: 'primary',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};

export const Medium: Story = {
    args: {
        label: 'Medium',
        size: 'medium',
        variant: 'primary',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};

export const Large: Story = {
    args: {
        label: 'Large',
        size: 'large',
        variant: 'primary',
    },
    render: args => (
        <View style={{ padding: 20 }}>
            <Badge {...args} />
        </View>
    ),
};
