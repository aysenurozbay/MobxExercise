import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react-lite'

import UserCard from '../../components/user/UserCard'

import favoriteStore from '../../store/favoriteStore'

import { colors } from '../../utils/colors'
import { paddingConsts, textSize } from '../../utils/constValues'

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
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
