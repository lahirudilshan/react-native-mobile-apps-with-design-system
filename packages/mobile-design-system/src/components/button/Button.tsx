import React, { useMemo } from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../../providers/theme-provider';

export interface ButtonProps {
    title: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    variant = 'primary',
    size = 'medium',
    onPress,
    disabled = false,
    style,
    titleStyle,
    ...rest
}) => {
    const { theme } = useTheme();

    const styles = useMemo(
        () =>
            StyleSheet.create({
                base: {
                    borderRadius: theme.radius.md,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                primary: {
                    backgroundColor: theme.color.button.solid.primary.background,
                },
                secondary: {
                    backgroundColor: theme.color.button.solid.secondary.background,
                },
                outline: {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: theme.color.button.outline.primary.border,
                },
                small: {
                    paddingVertical: theme.spacing.sm,
                    paddingHorizontal: theme.spacing.sm,
                },
                medium: {
                    paddingVertical: theme.spacing.md,
                    paddingHorizontal: theme.spacing.md,
                },
                large: {
                    paddingVertical: theme.spacing.lg,
                    paddingHorizontal: theme.spacing.xl,
                },
                text: {
                    fontSize: theme.typography.fontSize.base,
                    fontWeight: theme.typography.fontWeight.semibold,
                },
                primaryText: {
                    color: theme.color.button.solid.primary.text,
                },
                secondaryText: {
                    color: theme.color.button.solid.secondary.text,
                },
                outlineText: {
                    color: theme.color.button.outline.primary.text,
                },
                smallText: {
                    fontSize: theme.typography.fontSize.sm,
                },
                mediumText: {
                    fontSize: theme.typography.fontSize.base,
                },
                largeText: {
                    fontSize: theme.typography.fontSize.lg,
                },
                disabled: {
                    opacity: 0.5,
                },
                disabledText: {
                    color: theme.color.text.disabled,
                },
            }),
        [theme],
    );

    const buttonStyles = [
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'outline' && styles.outline,
        size === 'small' && styles.small,
        size === 'medium' && styles.medium,
        size === 'large' && styles.large,
        disabled && styles.disabled,
        style,
    ];

    const textStyles = [
        styles.text,
        variant === 'primary' && styles.primaryText,
        variant === 'secondary' && styles.secondaryText,
        variant === 'outline' && styles.outlineText,
        size === 'small' && styles.smallText,
        size === 'medium' && styles.mediumText,
        size === 'large' && styles.largeText,
        disabled && styles.disabledText,
        titleStyle,
    ];

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress} disabled={disabled} {...rest}>
            <Text style={textStyles}>{title}</Text>
        </TouchableOpacity>
    );
};
