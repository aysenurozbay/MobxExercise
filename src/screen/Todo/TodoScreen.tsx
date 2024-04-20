import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TodoItemComponent from '../../components/todo/TodoItemComponent'
import { API_URL, paddingConsts } from '../../utils/constValues'
import FilterComponent from '../../components/common/FilterComponent'
import axios from 'axios'

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
