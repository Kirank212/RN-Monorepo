import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from '@monorepo/shared';
import HomeScreen from './screens/HomeScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Users' }}
          />
          <Stack.Screen
            name="UserDetails"
            component={UserDetailsScreen}
            options={{ title: 'User Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
