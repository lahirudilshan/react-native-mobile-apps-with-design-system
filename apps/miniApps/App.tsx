import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { ThemeProvider } from '@fbn/mobile-design-system';
import { ProfileCard } from './src/components';

function App() {
  const systemColorScheme = useColorScheme();

  return (
    <ThemeProvider initialTheme={systemColorScheme || 'light'}>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View>
          <Text style={styles.heading}>Design System Demo</Text>
          
          <View style={styles.profilesContainer}>
            <Text style={styles.subheading}>Team Members</Text>
            <ProfileCard 
              name="John Doe" 
              role="Software Engineer" 
              status="active" 
              onPress={() => console.log('John\'s profile pressed')}
            />
            <ProfileCard 
              name="Jane Smith" 
              role="Product Designer" 
              status="away" 
              onPress={() => console.log('Jane\'s profile pressed')}
            />
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 20,
  },
  profilesContainer: {
    marginTop: 20,
  },
});

export default App;
