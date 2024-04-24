import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { StackHeaderProps } from '@react-navigation/stack'

import ArrowIcon from '../../assets/icons/ArrowIcon'
import DotsIcon from '../../assets/icons/DotsIcon'

import { colors } from '../../utils/colors'
import { paddingConsts, radiusConsts, textSize } from '../../utils/constValues'

interface PostScreenHeader extends StackHeaderProps {}

const PostScreenHeader = (props: PostScreenHeader) => {
  const handleGoBack = () => {
    props.navigation.goBack()
  }

  const handleMoreButton = () => {}

  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={handleGoBack} style={styles.headerRight}>
        <ArrowIcon size={20} fill={colors.border.active} />
        <Text style={styles.headerTitle}> Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={handleMoreButton} style={styles.headerRight}>
        <DotsIcon size={20} fill={colors.border.active} />
      </TouchableOpacity>
      {/* <TextInput style={styles.textInput} onChangeText={text => setTextInputValue(text)} value={textInputValue} placeholder='Insert your text!' /> */}
    </TouchableOpacity>
  )
}

export default PostScreenHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: radiusConsts.medium,
    paddingVertical: paddingConsts.small,
    paddingHorizontal: paddingConsts.small,
    borderBottomColor: colors.border.primary,
    borderBottomWidth: 1,
  },
  textInput: {
    borderRadius: radiusConsts.medium,
    paddingVertical: paddingConsts.tiny,
    paddingHorizontal: paddingConsts.small,
    backgroundColor: colors.background.secondary,
    height: 40,
    width: 250,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    paddingHorizontal: paddingConsts.small,
    fontSize: textSize.medium,
    lineHeight: 24,
  },
  headerLeft: {},
})
