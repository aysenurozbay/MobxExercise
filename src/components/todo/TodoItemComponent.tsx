import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox'
import { radiusConsts, textSize } from '../../utils/constValues'
import { colors } from '../../utils/colors'

const TodoItemComponent = () => {
  return (
    <View>
      <BouncyCheckbox
        size={25}
        unFillColor='#FFFFFF'
        text='Custom Checkbox'
        iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.small }}
        fillColor={colors.text.purple}
        innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.small, borderColor: colors.border.active }}
        textStyle={{
          textDecorationLine: 'none',
          fontSize: textSize.normal,
          color: colors.text.primary,
        }}
        onPress={(isChecked: boolean) => {
          console.log(isChecked)
        }}
      />
    </View>
  )
}

export default TodoItemComponent

const styles = StyleSheet.create({})
