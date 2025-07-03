import React, { useMemo } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
} from 'react-native';
import { Button } from '../../../components/button';
import { formatCurrency } from '../../../utils/formatters';
import { Badge } from '../../../components/badge';
import { useTheme } from '../../../providers/theme-provider';

export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    isOnSale?: boolean;
    isFavorite?: boolean;
}

export interface ProductCardProps {
    product: Product;
    onPress?: () => void;
    onAddToCart?: () => void;
    onToggleFavorite?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onPress,
    onAddToCart,
    onToggleFavorite,
    style,
}) => {
    // hooks
    const { theme } = useTheme();

    const discountPercentage = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    backgroundColor: theme.color.background.primary,
                    borderRadius: theme.radius.lg,
                    borderWidth: 1,
                    borderColor: theme.color.border.primary,
                    overflow: 'hidden',
                    shadowColor: theme.color.base.gray900,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                },
                imageContainer: {
                    position: 'relative',
                    height: 200,
                },
                image: {
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                },
                saleBadge: {
                    position: 'absolute',
                    top: theme.spacing.sm,
                    left: theme.spacing.sm,
                },
                favoriteButton: {
                    position: 'absolute',
                    top: theme.spacing.sm,
                    right: theme.spacing.sm,
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: theme.color.background.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: theme.color.base.gray900,
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 2,
                },
                favoriteIcon: {
                    fontSize: 16,
                },
                content: {
                    padding: theme.spacing.md,
                },
                name: {
                    fontSize: theme.typography.fontSize.base,
                    fontWeight: theme.typography.fontWeight.medium,
                    color: theme.color.text.primary,
                    marginBottom: theme.spacing.sm,
                },
                ratingContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: theme.spacing.sm,
                },
                rating: {
                    fontSize: theme.typography.fontSize.sm,
                    color: theme.color.base.yellow900,
                    marginRight: theme.spacing.xs,
                },
                reviewCount: {
                    fontSize: theme.typography.fontSize.sm,
                    color: theme.color.text.secondary,
                },
                priceContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: theme.spacing.md,
                },
                price: {
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.bold,
                    color: theme.color.text.primary,
                    marginRight: theme.spacing.sm,
                },
                originalPrice: {
                    fontSize: theme.typography.fontSize.sm,
                    color: theme.color.text.secondary,
                    textDecorationLine: 'line-through',
                },
                addToCartButton: {
                    marginTop: theme.spacing.sm,
                },
            }),
        [],
    );

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.image }} style={styles.image} />
                {product.isOnSale && (
                    <Badge
                        label={`${discountPercentage}% OFF`}
                        variant="error"
                        size="small"
                        style={styles.saleBadge}
                    />
                )}
                <TouchableOpacity style={styles.favoriteButton} onPress={onToggleFavorite}>
                    <Text
                        style={[
                            styles.favoriteIcon,
                            {
                                color: product.isFavorite
                                    ? theme.color.base.red500
                                    : theme.color.base.gray400,
                            },
                        ]}
                    >
                        ♥
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={2}>
                    {product.name}
                </Text>

                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>★ {product.rating}</Text>
                    <Text style={styles.reviewCount}>({product.reviewCount})</Text>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{formatCurrency(product.price)}</Text>
                    {product.originalPrice && (
                        <Text style={styles.originalPrice}>
                            {formatCurrency(product.originalPrice)}
                        </Text>
                    )}
                </View>

                {onAddToCart && (
                    <Button
                        title="Add to Cart"
                        variant="primary"
                        size="small"
                        onPress={onAddToCart}
                        style={styles.addToCartButton}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};
