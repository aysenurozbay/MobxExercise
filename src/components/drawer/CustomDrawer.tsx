import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'
import Header from './Header'
import { metrics } from '../../utils/metrics'
import { paddingConsts } from '../../utils/constValues'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.drawerContainer}>
        <DrawerItemList {...props} />
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
  },
  drawerContainer: {
    paddingVertical: paddingConsts.huge,
  },
})
