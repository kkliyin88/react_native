import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Basenav  from './components/bastnav';
import MainTab  from './components/mainTab';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
       <MainTab />
    </NavigationContainer>
  );
}

export default App;