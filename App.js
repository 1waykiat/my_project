/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/container/Main';
import SignUp from './src/container/SignUp'
import Login from './src/container/Login';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const screens = [
  { name: "Login", component: Login },
  { name: "SignUp", component: SignUp },
  { name: "Main", component: Main },
];

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName={screens[0].name} headerMode='none'>
        {screens.map(({ name, component }) => <AuthStack.Screen key={name} name={name} component={component} />)}
      </AuthStack.Navigator>
    </NavigationContainer>
  ); 
}





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
