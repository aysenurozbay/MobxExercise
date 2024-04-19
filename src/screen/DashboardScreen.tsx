import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserCard from '../components/user/UserCard'
import { paddingConsts } from '../utils/constValues'
import PostComponent from '../components/post/PostComponent'
import FilterComponent from '../components/common/FilterComponent'

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <FilterComponent/>
      {/* <UserCard/>     */}
      <PostComponent/>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large
  }
})