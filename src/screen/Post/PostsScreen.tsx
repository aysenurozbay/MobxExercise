import React, { useEffect, useLayoutEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import PostComponent from '../../components/post/PostComponent'
import FilterComponent from '../../components/common/FilterComponent'
import { SearchTitles, paddingConsts } from '../../utils/constValues'
import { SheetManager } from 'react-native-actions-sheet'
import { SheetTypes } from '../../components/sheets/sheets'
import { PostParams } from '../../navigation/NavigationTypes'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { colors } from '../../utils/colors'
import { commonStyles } from '../../assets/commonStyles'
import postStore from '../../store/postStore'
import Loading from '../../components/common/Loading'

interface IPostsScreenProps {}

const PostsScreen = observer(({}: IPostsScreenProps) => {
  const navigation: StackNavigationProp<PostParams> = useNavigation()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    postStore.fetchPosts()
  }, [])

  const filterOnPress = async () => {
    const sheetPayload: { type: string; value?: string | number } = await SheetManager.show(SheetTypes.FilterSheet, {
      payload: {
        type: 'post',
      },
    })

    const { value, type } = sheetPayload

    const filterTypesLookup: Record<string, () => void> = {
      user: () => {
        if (value) {
          postStore.filterByUser(Number(value))
        }
      },
      reset: () => postStore.resetFilter(),
    }

    if (!filterTypesLookup[type]) {
      return
    }

    filterTypesLookup[type]()
  }

  const sortOnPress = async () => {
    const sheetPayload = await SheetManager.show(SheetTypes.SortSheet)
    postStore.sortById(sheetPayload)
  }

  const data = postStore.activeFilter !== 'none' ? postStore.filteredPosts : postStore.posts

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <FilterComponent filterOnPress={filterOnPress} sortOnPress={sortOnPress} />
      {postStore.state === 'pending' && <Loading />}
      {postStore.state === 'done' && (
        <View>
          {data?.map(post => (
            <PostComponent post={post} key={post.id} />
          ))}
        </View>
      )}
      {postStore.state === 'error' && <Text>Error occurred while fetching data</Text>}
    </ScrollView>
  )
})

export default PostsScreen

const styles = StyleSheet.create({
  container: {
    padding: paddingConsts.large,
  },
})
