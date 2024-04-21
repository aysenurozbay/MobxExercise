import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, paddingConsts, textSize } from '../../utils/constValues'
import { colors } from '../../utils/colors'
import CommentComponent from '../../components/comment/CommentComponent'
import { CommentDataType, PostDataType } from '../../utils/Types'
import axios from 'axios'
import { PostParams } from '../../navigation/NavigationTypes'
import { RouteProp, useNavigation } from '@react-navigation/native'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { StackNavigationProp } from '@react-navigation/stack'
import LikeComponent from '../../components/like/LikeComponent'
import { observer } from 'mobx-react-lite'
import favoriteStore from '../../store/store'

interface IPostDetailScreenProps {
  route: RouteProp<PostParams, 'PostDetails'>
}

const PostDetailScreen = ({ route }: IPostDetailScreenProps) => {
  const { post } = route.params
  const navigation: StackNavigationProp<PostParams> = useNavigation()

  const [comments, setComments] = useState<CommentDataType[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchComments = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${API_URL}/posts/${post.id}/comments`, {
        params: {
          limit: 10, // Her istekte alınacak maksimum öğe sayısı
          offset: (page - 1) * 10, // Sayfa başına öğe sayısı * sayfa numarası
        },
      })
      setComments(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchComments()
  }, [page])

  const handleGoBackButton = () => {
    navigation.goBack()
  }

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
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.title} </Text>
        </View>
      </View>
      <Text style={styles.post}>{post.body} </Text>
      <Text style={styles.commentLabel}>Comments </Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentComponent comment={item} userId={post.userId} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </ScrollView>
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
