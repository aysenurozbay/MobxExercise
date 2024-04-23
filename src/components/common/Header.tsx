import { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { DrawerHeaderProps } from '@react-navigation/drawer'

import DrawerIcon from '../../assets/icons/DrawerIcon'
import UserIcon from '../../assets/icons/UserIcon'

import { paddingConsts, radiusConsts } from '../../utils/constValues'
import { colors } from '../../utils/colors'

interface IHeaderTitle extends DrawerHeaderProps {}

const Header = (props: IHeaderTitle) => {
  const { navigation } = props
  // const [textInputValue, setTextInputValue] = useState('')

  const openDrawer = () => {
    props.navigation.openDrawer()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={openDrawer}>
        <DrawerIcon size={40} fill={colors.border.active} />
      </TouchableOpacity>
      {/* <TextInput style={styles.textInput} onChangeText={text => setTextInputValue(text)} value={textInputValue} placeholder='Insert your text!' /> */}
      <UserIcon size={30} fill={colors.border.active} />
    </View>
  )
}

export default Header

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
})
