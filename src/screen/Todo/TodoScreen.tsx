// TodoScreen.tsx

import React, { useEffect, useLayoutEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import PostComponent from '../../components/post/PostComponent'
import FilterComponent from '../../components/common/FilterComponent'
import { SearchTitles, paddingConsts } from '../../utils/constValues'
import { SheetManager } from 'react-native-actions-sheet'
import todoStore from '../../store/todoStore'
import TodoItemComponent from '../../components/todo/TodoItemComponent'
import { SheetTypes } from '../../components/sheets/sheets'
import { PostParams } from '../../navigation/NavigationTypes'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TodoDataType } from '../../utils/Types'
import { commonStyles } from '../../assets/commonStyles'
import Loading from '../../components/common/Loading'

interface ITodoScreenProps {}

const TodoScreen = observer(({}: ITodoScreenProps) => {
  const navigation: StackNavigationProp<PostParams> = useNavigation()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    todoStore.fetchTodos()
  }, [])

  const filterOnPress = async () => {
    const sheetPayload: { type: string; value?: string | number } = await SheetManager.show(SheetTypes.FilterSheet, {
      payload: {
        type: 'todo',
      },
    })
    const { value, type } = sheetPayload

    const filterTypesLookup: Record<string, () => void> = {
      completed: () => todoStore.filterWithState(true),
      notcompleted: () => todoStore.filterByState(false),
      reset: () => todoStore.resetFilter(),
    }

    if (!filterTypesLookup[type]) {
      return
    }

    filterTypesLookup[type]()
  }

  const sortOnPress = async () => {
    const sheetPayload = await SheetManager.show(SheetTypes.SortSheet)
    todoStore.sortById(sheetPayload)
  }

  const data = todoStore.activeFilter !== 'none' ? todoStore.filteredTodos : todoStore.todos

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <FilterComponent filterOnPress={filterOnPress} sortOnPress={sortOnPress} />
      {todoStore.state === 'pending' && <Loading />}
      {todoStore.state === 'done' && (
        <View>
          {data?.map(todo => (
            <TodoItemComponent todo={todo} key={todo.id} />
          ))}
        </View>
      )}
      {todoStore.state === 'error' && <Text>Error occurred while fetching data</Text>}
    </ScrollView>
  )
})

export default TodoScreen

const styles = StyleSheet.create({
  container: {
    padding: paddingConsts.large,
  },
})
