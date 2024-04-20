import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import favoriteStore from '../../store/store'
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

      <FlatList
        data={favoriteStore.users}
        renderItem={({ item }) => <UserCard user={item.user} />}
        keyExtractor={item => item.user.id.toString()}
        ListEmptyComponent={<Text style={styles.listEmptyText}>Henuz favorilenen bir kullanici yok!</Text>}
      />
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
