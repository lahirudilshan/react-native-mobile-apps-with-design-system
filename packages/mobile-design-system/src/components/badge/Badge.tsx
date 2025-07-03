import { useTheme } from '../../providers/theme-provider';
import React, { useMemo, memo } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Internal component that receives theme props
const Badge: React.FC<BadgeProps> = ({
    label,
    variant = 'primary',
    size = 'medium',
    style,
    textStyle,
}) => {
    // hooks
    const { theme } = useTheme();
    // Memoized dynamic styles that depend on theme
    const dynamicStyles = useMemo(() => {
        const variantColors = {
            primary: theme.color.badge?.primary,
            success: theme.color.badge?.success,
            warning: theme.color.badge?.warning,
            error: theme.color.badge?.error,
        };

        const sizeConfig = {
            small: {
                paddingHorizontal: theme.spacing.xs,
                paddingVertical: theme.spacing.xs / 2,
                fontSize: theme.typography.fontSize?.xs || 12,
            },
            medium: {
                paddingHorizontal: theme.spacing.sm,
                paddingVertical: theme.spacing.xs,
                fontSize: theme.typography.fontSize?.sm || 14,
            },
            large: {
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.sm,
                fontSize: theme.typography.fontSize?.base || 16,
            },
        };

        const currentVariant = variantColors[variant];
        const currentSize = sizeConfig[size];

        return StyleSheet.create({
            badgeContainer: {
                ...staticStyles.badge,
                backgroundColor: currentVariant.background,
                borderRadius: theme.radius?.full || 999,
                paddingHorizontal: currentSize.paddingHorizontal,
                paddingVertical: currentSize.paddingVertical,
            },
            badgeText: {
                ...staticStyles.text,
                color: currentVariant.text,
                fontSize: currentSize.fontSize,
                fontWeight: theme.typography.fontWeight?.semibold || '600',
            },
        });
    }, [theme, variant, size]);

    // Memoized style arrays
    const badgeStyles = useMemo(
        () => [dynamicStyles.badgeContainer, style],
        [dynamicStyles.badgeContainer, style],
    );

    const textStyles = useMemo(
        () => [dynamicStyles.badgeText, textStyle],
        [dynamicStyles.badgeText, textStyle],
    );

    return (
        <View style={badgeStyles}>
            <Text style={textStyles} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
                {label}
            </Text>
        </View>
    );
};

// types
export type BadgeProps = {
    label: string;
    variant?: 'primary' | 'success' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    testID?: string;
    accessibilityLabel?: string;
};

//styles
const staticStyles = StyleSheet.create({
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        includeFontPadding: false,
    },
});

// Export the themed version
export default memo(Badge);
