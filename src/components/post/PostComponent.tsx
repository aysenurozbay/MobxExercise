import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { radiusConsts, paddingConsts, textSize, marginConsts } from '../../utils/constValues'
import ArrowIcon from '../../assets/icons/ArrowIcon'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerStackParams, PostParams } from '../../navigation/NavigationTypes'
const PostComponent = () => {
  const navigation: StackNavigationProp<PostParams> = useNavigation()

  const seeMoreHandler = () => {
    navigation.navigate('PostDetails')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Post Title</Text>
      <Text style={styles.postText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit repudiandae corporis itaque quis a veniam mollitia non quam nisi ullam eveniet sapiente,
        cum natus illo dolore voluptatibus, atque adipisci voluptatum.
      </Text>
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
