import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItemComponent from '../../components/todo/TodoItemComponent'
import { paddingConsts } from '../../utils/constValues'
import FilterComponent from '../../components/common/FilterComponent'

const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <FilterComponent />
      <TodoItemComponent />
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
})
