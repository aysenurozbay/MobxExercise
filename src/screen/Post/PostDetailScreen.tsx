import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBackButton}>
          <ArrowIcon size={15} fill={colors.border.active} />
        </TouchableOpacity>
        <Text style={styles.title}>{post.title} </Text>
      </View>
      <Text style={styles.post}>{post.body} </Text>
      <Text style={styles.commentLabel}>Comments </Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {comments.map(comment => (
            <CommentComponent key={comment.id} comment={comment} userId={post.userId} />
          ))}
          {/* <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Button title='Previous Page' onPress={handlePrevPage} disabled={page === 1} />
            <Button title='Next Page' onPress={handleNextPage} />
          </View> */}
        </View>
      )}
    </ScrollView>
  )
}

export default PostDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.text.primary,
    fontSize: textSize.medium,
    fontWeight: '600',
    paddingHorizontal: paddingConsts.small,
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
