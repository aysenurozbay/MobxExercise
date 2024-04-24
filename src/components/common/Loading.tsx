import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontStyles } from '../../assets/fonts'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={FontStyles.filterText}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})
