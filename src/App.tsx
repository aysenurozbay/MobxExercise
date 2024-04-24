import { LogBox, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './components/sheets/sheets'

import { NavigationContainer } from '@react-navigation/native'

import Main from './navigation/Main'
import { SheetProvider } from 'react-native-actions-sheet'

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <SheetProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaView>
    </SheetProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
