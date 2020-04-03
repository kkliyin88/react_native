
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import HomeDetail from '../pages/homeDetail';
import Mime from '../pages/mine';
const Stack = createStackNavigator();

const homeOPtion = {
  title: 'home标题',
  headerTitleStyle: { color: 'red', headerMode: false, headerBackTitle: '返回' }
}
const homeDetailOption = {
  title: 'homeDetail标题',
  headerTitleStyle: { color: 'green', headerMode: false, headerBackTitleVisible: false }
}
export default class Basenav extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={homeOPtion} />
            <Stack.Screen name="HomeDetail" component={HomeDetail} options={homeDetailOption} />
            <Stack.Screen name="Mime" component={Mime} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}


