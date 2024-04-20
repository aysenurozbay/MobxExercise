import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox'
import { paddingConsts, radiusConsts, textSize } from '../../utils/constValues'
import { colors } from '../../utils/colors'
import { TodoDataType } from '../../utils/Types'

interface ITodoItemComponentProps {
  todo: TodoDataType
}

const TodoItemComponent = ({ todo }: ITodoItemComponentProps) => {
  const [checkboxState, setCheckboxState] = React.useState(todo.completed)

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        unFillColor='#FFFFFF'
        text={todo.title}
        iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.small }}
        fillColor={colors.text.purple}
        innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.small, borderColor: colors.border.active }}
        textStyle={{
          textDecorationLine: 'none',
          fontSize: textSize.normal,
          color: colors.text.primary,
        }}
        isChecked={checkboxState}
        onPress={(isChecked: boolean) => {
          console.log(isChecked)
        }}
      />
    </View>
  )
}

export default TodoItemComponent

const styles = StyleSheet.create({
  container: {
    paddingVertical: paddingConsts.tiny,
  },
})
