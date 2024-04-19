import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import LoginScreen from '../screen/Login/LoginScreen'

import { AppParams } from './NavigationTypes'

const Stack = createStackNavigator<AppParams>()

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Main' component={Home} />
    </Stack.Navigator>
  )
}

export default Main
