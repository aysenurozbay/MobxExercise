import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Main from './navigation/Main'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
