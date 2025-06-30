import { Button } from '@fbn/mobile-design-system';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View>
          <Text>Test</Text>
          <Button title="Hello from design system" onPress={() => {}} />
        </View>
      </View>
    </View>
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
});

export default App;
