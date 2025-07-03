import { useTheme } from '../../providers/theme-provider';
import React, { useMemo, memo } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    ImageSourcePropType,
} from 'react-native';
// Constants outside - these don't depend on theme
const AVATAR_SIZES = {
    small: 32,
    medium: 48,
    large: 64,
} as const;

const FONT_SIZES = {
    small: 14,
    medium: 18,
    large: 24,
} as const;

// Static styles that don't depend on theme - keep outside
const staticStyles = StyleSheet.create({
    imageBase: {
        resizeMode: 'cover',
    },
    textBase: {
        textAlign: 'center',
        includeFontPadding: false,
    },
    placeholderBase: {
        width: '100%',
        height: '100%',
    },
});

/**
 * Returns the initials of a user given their name
 * @param {string} name - The name of the user
 * @returns {void} The initials of the user
 */
const getInitials = (name: string): string => {
    return name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(part => part[0]?.toUpperCase())
        .filter(Boolean)
        .join('');
};

const Avatar: React.FC<AvatarProps> = ({ source, size = 'medium', name, style }) => {
    // hooks
    const { theme } = useTheme();

    const avatarSize = AVATAR_SIZES[size];
    const fontSize = FONT_SIZES[size];

    const initials = useMemo(() => {
        return name ? getInitials(name) : '';
    }, [name]);

    // Dynamic styles that depend on theme - memoized inside
    const dynamicStyles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    backgroundColor: theme.color.background.secondary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                },
                initials: {
                    ...staticStyles.textBase,
                    color: theme.color.text.secondary,
                    fontWeight: theme.typography.fontWeight.bold,
                    fontSize,
                },
                placeholder: {
                    ...staticStyles.placeholderBase,
                    backgroundColor: theme.color.background.tertiary,
                },
                image: {
                    ...staticStyles.imageBase,
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: avatarSize / 2,
                },
            }),
        [theme, avatarSize, fontSize],
    );

    const containerStyle = useMemo(
        () => [dynamicStyles.container, style],
        [dynamicStyles.container, style],
    );

    const renderContent = useMemo(() => {
        if (source) {
            return <Image source={source} style={dynamicStyles.image} />;
        }

        if (initials) {
            return <Text style={dynamicStyles.initials}>{initials}</Text>;
        }

        return <View style={dynamicStyles.placeholder} />;
    }, [source, initials, dynamicStyles]);

    return <View style={containerStyle}>{renderContent}</View>;
};

// types
export type AvatarProps = {
    source?: ImageSourcePropType;
    size?: 'small' | 'medium' | 'large';
    name?: string;
    style?: StyleProp<ViewStyle>;
    testID?: string;
};

export default memo(Avatar);
