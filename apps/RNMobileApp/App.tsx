/**
 * RN Mobile App - Using Shared Packages
 * Demonstrates usage of @monorepo/ui and @monorepo/shared
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Button, Card } from '@monorepo/ui';
import { capitalize, formatDate } from '@monorepo/shared';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    Alert.alert('Button Pressed', `Count: ${count + 1}`);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1F1F1F' : '#F5F5F5',
  };

  return (
    <SafeAreaView style={[styles.safeArea, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000' }]}>
            RN Mobile App
          </Text>
          <Text style={[styles.subtitle, { color: isDarkMode ? '#AAA' : '#666' }]}>
            React 19.1.0 • React Native 0.81.5
          </Text>

          <Card title="Welcome">
            <Text style={[styles.text, { color: isDarkMode ? '#EEE' : '#555' }]}>
              This app demonstrates the use of shared UI components and utilities from the monorepo.
            </Text>
          </Card>

          <Card title="Shared Utilities Demo">
            <Text style={[styles.text, { color: isDarkMode ? '#EEE' : '#555' }]}>
              Capitalized text: {capitalize('hello from shared package')}
            </Text>
            <Text style={[styles.text, { color: isDarkMode ? '#EEE' : '#555', marginTop: 8 }]}>
              Today's date: {formatDate(new Date())}
            </Text>
          </Card>

          <Card title="Button Demo - From @monorepo/ui">
            <View style={styles.buttonContainer}>
              <Button
                title="Tap Me"
                onPress={handlePress}
                variant="primary"
              />
              <Button
                title="Secondary Button"
                onPress={() => Alert.alert('Secondary Action', 'This is a secondary button')}
                variant="secondary"
              />
            </View>
            <Text style={[styles.text, { color: isDarkMode ? '#EEE' : '#555', marginTop: 8 }]}>
              Button pressed {count} times
            </Text>
          </Card>

          <Card title="How This Works">
            <Text style={[styles.codeText, { color: isDarkMode ? '#90EE90' : '#333' }]}>
              import {'{Button, Card}'} from '@monorepo/ui';{'\n'}
              import {'{capitalize, formatDate}'} from '@monorepo/shared';
            </Text>
          </Card>

          <Card title="Getting Started">
            <Text style={[styles.text, { color: isDarkMode ? '#EEE' : '#555' }]}>
              1. Edit App.tsx to modify this app{'\n'}
              2. Import components from @monorepo/ui{'\n'}
              3. Use utilities from @monorepo/shared{'\n'}
              4. Create new components in packages/ui{'\n'}
              5. Add utilities to packages/shared
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingVertical: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 12,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
  },
  codeText: {
    fontSize: 12,
    fontFamily: 'Menlo',
    lineHeight: 16,
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 12,
  },
});

export default App;
