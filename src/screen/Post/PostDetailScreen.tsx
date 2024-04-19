import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { paddingConsts, textSize } from '../../utils/constValues'
import { colors } from '../../utils/colors'
import CommentComponent from '../../components/comment/CommentComponent'

const PostDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Post Title </Text>
      <Text style={styles.post}>
        Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of
        Kerala, Ms. Veena George Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan
        and Health Minister of Kerala, Ms. Veena George Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief
        Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George
      </Text>
      <Text style={styles.commentLabel}>Comments </Text>
      <CommentComponent />
    </ScrollView>
  )
}

export default PostDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
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
