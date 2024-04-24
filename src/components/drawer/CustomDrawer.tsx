import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'

import { paddingConsts } from '../../utils/constValues'
import { metrics } from '../../utils/metrics'

import Header from './Header'

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
