import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import ArrowIcon from '../../assets/icons/BorderedArrowIcon'

import { PostParams } from '../../navigation/NavigationTypes'

import { PostDataType } from '../../utils/Types'
import { colors } from '../../utils/colors'
import { marginConsts, paddingConsts, radiusConsts, textSize } from '../../utils/constValues'

interface IPostComponentProps {
  post: PostDataType
}
const PostComponent = ({ post }: IPostComponentProps) => {
  const navigation: StackNavigationProp<PostParams> = useNavigation()

  const seeMoreHandler = () => {
    navigation.navigate('PostDetails', { post: post })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{post.title}</Text>
      <Text style={styles.postText}>{post.body}</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonContainer} onPress={seeMoreHandler}>
        <Text style={styles.moreButton}>See More</Text>
        <ArrowIcon size={40} fill={colors.border.active} />
      </TouchableOpacity>
    </View>
  )
}

export default PostComponent

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: radiusConsts.medium,
    borderColor: colors.border.primary,
    padding: paddingConsts.small,
    marginVertical: marginConsts.small,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: textSize.medium,
    fontWeight: '600',
    color: colors.text.primary,
  },
  postText: {
    fontSize: textSize.normal,
    color: colors.text.secondary,
    paddingVertical: paddingConsts.small,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  moreButton: {
    fontSize: textSize.normal,
    color: colors.text.primary,
    fontWeight: '600',
    paddingHorizontal: paddingConsts.medium,
  },
})
