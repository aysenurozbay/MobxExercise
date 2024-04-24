import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { CommentDataType } from '../../utils/Types'
import { colors } from '../../utils/colors'
import { marginConsts, paddingConsts, radiusConsts, textSize } from '../../utils/constValues'

interface ICommentComponentProps {
  comment: CommentDataType
  userId: number
}

const CommentComponent = ({ comment, userId }: ICommentComponentProps) => {
  return (
    <View style={styles.container}>
      {/* UserIcon fill={colors.text.primary} size={50} /> */}
      <View>
        <Text style={styles.username}>{comment.name}</Text>``
        <Text style={styles.comment} numberOfLines={5}>
          {comment.body}
        </Text>
      </View>
    </View>
  )
}

export default CommentComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: marginConsts.tiny,
    padding: paddingConsts.small,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: radiusConsts.medium,
    flexDirection: 'row',
  },
  username: {
    fontSize: textSize.normal,
    fontWeight: '500',
    color: colors.text.primary,
  },
  comment: {
    paddingVertical: paddingConsts.small,
    fontSize: textSize.normal,
    lineHeight: 20,
    color: colors.text.primary,
  },
})
