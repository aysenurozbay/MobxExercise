import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import favoriteStore from '../../store/favoriteStore'
import { observer } from 'mobx-react-lite'
import { paddingConsts, textSize } from '../../utils/constValues'
import PostComponent from '../../components/post/PostComponent'
import UserCard from '../../components/user/UserCard'
import { colors } from '../../utils/colors'

const FavoritesScreen = () => {
  // const handleToggleLike = (postId: number) => {
  //   favoriteStore.toggleFavorites(post)
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorilerim</Text>
      <ScrollView>
        {favoriteStore.users.map(item => (
          <UserCard user={item.user} key={item.user.id} />
        ))}
      </ScrollView>
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
  listEmptyText: {
    paddingVertical: paddingConsts.small,
    color: colors.text.tertiary,
    fontSize: textSize.normal,
  },
})
