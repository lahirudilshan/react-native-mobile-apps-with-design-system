import React, { useMemo } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Button } from '../../components/button';
import { Badge } from '../../components/badge';
import { Avatar } from '../../components/avatar';
import { useTheme } from '../../providers/theme-provider';

export interface UserCardProps {
    user: {
        id: string;
        name: string;
        email: string;
        avatar?: string;
        role: string;
        status: 'online' | 'offline' | 'away';
        joinedDate: string;
    };
    onMessage?: () => void;
    onViewProfile?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onMessage, onViewProfile, style }) => {
    const getStatusVariant = (status: string) => {
        switch (status) {
            case 'online':
                return 'success';
            case 'away':
                return 'warning';
            case 'offline':
            default:
                return 'error';
        }
    };

    // hooks
    const { theme } = useTheme();

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    backgroundColor: theme.color.background.primary,
                    borderRadius: theme.radius.lg,
                    padding: theme.spacing.md,
                    borderWidth: 1,
                    borderColor: theme.color.border.primary,
                    shadowColor: theme.color.base.gray900,
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                },
                header: {
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginBottom: theme.spacing.md,
                },
                userInfo: {
                    flex: 1,
                    marginLeft: theme.spacing.md,
                },
                name: {
                    fontSize: theme.typography.fontSize.lg,
                    fontWeight: theme.typography.fontWeight.semibold,
                    color: theme.color.text.primary,
                    marginBottom: theme.spacing.xs,
                },
                email: {
                    fontSize: theme.typography.fontSize.sm,
                    color: theme.color.text.secondary,
                    marginBottom: theme.spacing.sm,
                },
                statusContainer: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: theme.spacing.sm,
                },
                role: {
                    fontSize: theme.typography.fontSize.sm,
                    color: theme.color.text.secondary,
                    fontStyle: 'italic',
                },
                footer: {
                    borderTopWidth: 1,
                    borderTopColor: theme.color.border.primary,
                    paddingTop: theme.spacing.md,
                },
                joinedDate: {
                    fontSize: theme.typography.fontSize.xs,
                    color: theme.color.text.secondary,
                    marginBottom: theme.spacing.md,
                },
                actions: {
                    flexDirection: 'row',
                    gap: theme.spacing.sm,
                },
                actionButton: {
                    flex: 1,
                },
            }),
        [],
    );

    return (
        <View style={[styles.container, style]}>
            <View style={styles.header}>
                <Avatar
                    name={user.name}
                    source={user.avatar ? { uri: user.avatar } : undefined}
                    size="large"
                />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <View style={styles.statusContainer}>
                        <Badge
                            label={user.status}
                            variant={getStatusVariant(user.status)}
                            size="small"
                        />
                        <Text style={styles.role}>{user.role}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.joinedDate}>
                    Joined {new Date(user.joinedDate).toLocaleDateString()}
                </Text>
                <View style={styles.actions}>
                    {onMessage && (
                        <Button
                            title="Message"
                            variant="outline"
                            size="small"
                            onPress={onMessage}
                            style={styles.actionButton}
                        />
                    )}
                    {onViewProfile && (
                        <Button
                            title="View Profile"
                            variant="primary"
                            size="small"
                            onPress={onViewProfile}
                            style={styles.actionButton}
                        />
                    )}
                </View>
            </View>
        </View>
    );
};
