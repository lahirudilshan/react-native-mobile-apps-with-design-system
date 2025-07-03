import React from 'react';
import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ProductCard, Product } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
    title: 'Design System/Domain Specific/E-commerce/ProductCard',
    component: ProductCard,
    argTypes: {
        product: {
            control: 'object',
            description: 'Product data object',
        },
        onPress: {
            action: 'pressed',
            description: 'Callback when product card is pressed',
        },
        onAddToCart: {
            action: 'add to cart',
            description: 'Callback when add to cart button is pressed',
        },
        onToggleFavorite: {
            action: 'toggle favorite',
            description: 'Callback when favorite button is pressed',
        },
    },
    decorators: [
        Story => (
            <View style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
                <Story />
            </View>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

// Sample product data
const sampleProduct: Product = {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.5,
    reviewCount: 128,
    isOnSale: true,
    isFavorite: false,
};

const expensiveProduct: Product = {
    id: '2',
    name: 'Professional Camera Lens',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
    rating: 4.8,
    reviewCount: 45,
    isOnSale: false,
    isFavorite: true,
};

const budgetProduct: Product = {
    id: '3',
    name: 'Basic Phone Case',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop',
    rating: 3.9,
    reviewCount: 234,
    isOnSale: false,
    isFavorite: false,
};

export const Default: Story = {
    args: {
        product: sampleProduct,
        onPress: () => console.log('Product pressed'),
        onAddToCart: () => console.log('Added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite'),
    },
};

export const OnSale: Story = {
    args: {
        product: {
            ...sampleProduct,
            isOnSale: true,
            originalPrice: 299.99,
        },
        onPress: () => console.log('Sale product pressed'),
        onAddToCart: () => console.log('Sale item added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite on sale item'),
    },
};

export const Favorited: Story = {
    args: {
        product: {
            ...expensiveProduct,
            isFavorite: true,
        },
        onPress: () => console.log('Favorite product pressed'),
        onAddToCart: () => console.log('Favorite added to cart'),
        onToggleFavorite: () => console.log('Unfavorited'),
    },
};

export const ExpensiveItem: Story = {
    args: {
        product: expensiveProduct,
        onPress: () => console.log('Expensive product pressed'),
        onAddToCart: () => console.log('Expensive item added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite on expensive item'),
    },
};

export const BudgetItem: Story = {
    args: {
        product: budgetProduct,
        onPress: () => console.log('Budget product pressed'),
        onAddToCart: () => console.log('Budget item added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite on budget item'),
    },
};

export const WithoutAddToCart: Story = {
    args: {
        product: sampleProduct,
        onPress: () => console.log('Product pressed'),
        onToggleFavorite: () => console.log('Toggled favorite'),
        onAddToCart: undefined,
    },
};

export const LongProductName: Story = {
    args: {
        product: {
            ...sampleProduct,
            name: 'Ultra Premium Wireless Noise-Cancelling Over-Ear Headphones with Advanced Audio Technology',
        },
        onPress: () => console.log('Long name product pressed'),
        onAddToCart: () => console.log('Long name item added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite on long name item'),
    },
};

export const HighRating: Story = {
    args: {
        product: {
            ...sampleProduct,
            rating: 4.9,
            reviewCount: 1250,
        },
        onPress: () => console.log('High rated product pressed'),
        onAddToCart: () => console.log('High rated item added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite on high rated item'),
    },
};

export const LowRating: Story = {
    args: {
        product: {
            ...budgetProduct,
            rating: 2.1,
            reviewCount: 12,
        },
        onPress: () => console.log('Low rated product pressed'),
        onAddToCart: () => console.log('Low rated item added to cart'),
        onToggleFavorite: () => console.log('Toggled favorite on low rated item'),
    },
};
