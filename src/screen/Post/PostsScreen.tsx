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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TextInput placeholder={SearchTitles.POST} onChangeText={handleSearch} value={searchTerm} style={commonStyles.input} />,
    })
  }, [navigation, searchTerm])

  const filterOnPress = async () => {
    const sheetPayload: string = await SheetManager.show(SheetTypes.FilterSheet, {
      payload: {
        type: 'post',
      },
    })

    const filterTypesLookup: Record<string, () => void> = {
      title: () => postStore.filterByUser(Number(sheetPayload)),
      reset: () => postStore.resetFilter(),
    }

    if (!filterTypesLookup[sheetPayload]) {
      return
    }

    filterTypesLookup[sheetPayload]()
  }

  const sortOnPress = async () => {
    const sheetPayload = await SheetManager.show(SheetTypes.SortSheet)
    postStore.sortById(sheetPayload)
  }

  const data = postStore.activeFilter !== 'none' ? postStore.filteredPosts : postStore.posts

  const handleSearch = (text: string) => {
    setSearchTerm(text)
    postStore.setSearchTerm(text)
    postStore.searchByTitle
  }

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
