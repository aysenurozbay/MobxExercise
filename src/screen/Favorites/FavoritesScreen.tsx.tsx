import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import favoriteStore from '../../store/store'
import { observer } from 'mobx-react-lite'
import { paddingConsts, textSize } from '../../utils/constValues'
import PostComponent from '../../components/post/PostComponent'

const FavoritesScreen = () => {
  // const handleToggleLike = (postId: number) => {
  //   favoriteStore.toggleFavorites(post)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorilerim</Text>
      {favoriteStore.posts.map(post => (
        <PostComponent post={post.post} key={post.post.id} />
      ))}
    </View>
  )
}

export default observer(FavoritesScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
  title: {
    fontSize: textSize.medium,
    fontWeight: '500',
  },
})
