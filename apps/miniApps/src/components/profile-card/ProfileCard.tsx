import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Badge, Button } from '@fbn/mobile-design-system';

export interface ProfileCardProps {
  name: string;
  role: string;
  status?: 'active' | 'away' | 'offline';
  onPress?: () => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  status = 'active',
  onPress,
}) => {
  const statusVariant = {
    active: 'success',
    away: 'warning',
    offline: 'error',
  }[status] as 'success' | 'warning' | 'error';

  const statusLabel = {
    active: 'Active',
    away: 'Away',
    offline: 'Offline',
  }[status];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Avatar name={name} size="large" />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
          <View style={styles.statusContainer}>
            <Badge label={statusLabel} variant={statusVariant} size="small" />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button 
          title="View Profile" 
          onPress={onPress} 
          variant="primary"
          size="medium"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  info: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
  },
  footer: {
    marginTop: 8,
  },
});