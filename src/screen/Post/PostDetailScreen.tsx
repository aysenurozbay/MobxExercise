import { RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { fetchComments } from '../../api/apiCalls'

import CommentComponent from '../../components/comment/CommentComponent'
import { PostParams } from '../../navigation/NavigationTypes'

import { CommentDataType, PostDataType } from '../../utils/Types'
import { colors } from '../../utils/colors'
import { paddingConsts, textSize } from '../../utils/constValues'

interface IPostDetailScreenProps {
  route: RouteProp<PostParams, 'PostDetails'>
}

const headerComponent = (post: PostDataType) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.title} </Text>
        </View>
      </View>
      <Text style={styles.post}>{post.body} </Text>
      <Text style={styles.commentLabel}>Comments </Text>
    </View>
  )
}

const PostDetailScreen = ({ route }: IPostDetailScreenProps) => {
  const { post } = route.params
  const navigation: StackNavigationProp<PostParams> = useNavigation()

  const [comments, setComments] = useState<CommentDataType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchComments(post.id)
      .then(commentsData => setComments(commentsData))
      .catch(error => {})
  }, [post.id])

  useEffect(() => {
    navigation.getParent()?.setOptions({
      headerShown: false,
    })
    return () =>
      navigation.getParent()?.setOptions({
        headerShown: true,
      })
  }, [navigation])

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentComponent comment={item} userId={post.userId} />}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={headerComponent(post)}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default observer(PostDetailScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text.primary,
    fontSize: textSize.medium,
    fontWeight: '600',
  },
  post: {
    paddingVertical: paddingConsts.large,
    fontSize: textSize.normal,
    lineHeight: 20,
  },
  commentLabel: {
    fontSize: textSize.xLarge,
    fontWeight: '500',
  },
})
