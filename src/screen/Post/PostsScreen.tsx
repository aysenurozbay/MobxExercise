import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostComponent from '../../components/post/PostComponent'
import { paddingConsts } from '../../utils/constValues'
import FilterComponent from '../../components/common/FilterComponent'

const PostsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <FilterComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
    </ScrollView>
  )
}

export default PostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
})
