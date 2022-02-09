/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, OnboardingScreen} from './src/screens';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          initialParams={{tokenUpdate: 'false'}}
          options={{headerShown: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
