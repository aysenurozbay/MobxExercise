import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { marginConsts, paddingConsts, radiusConsts, textSize } from '../../utils/constValues'
import { colors } from '../../utils/colors'
import UserIcon from '../../assets/icons/UserIcon'

const CommentComponent = () => {
  return (
    <View style={styles.container}>
      {/* UserIcon fill={colors.text.primary} size={50} /> */}
      <View>
        <Text style={styles.username}>CommentComponent</Text>
        <Text style={styles.comment} numberOfLines={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique neque velit beatae, labore ducimus aliquid nam eum dolor distinctio
          sint in eveniet maxime quasi earum, recusandae dolore accusamus! Eligendi.
        </Text>
      </View>
    </View>
  )
}

export default CommentComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: marginConsts.xLarge,
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
