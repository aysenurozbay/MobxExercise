import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SheetManager } from 'react-native-actions-sheet'
import FilterComponent from '../../components/common/FilterComponent'
import Loading from '../../components/common/Loading'
import { SheetTypes } from '../../components/sheets/sheets'
import TodoItemComponent from '../../components/todo/TodoItemComponent'
import todoStore from '../../store/todoStore'
import { paddingConsts, storeStates } from '../../utils/constValues'

interface ITodoScreenProps {}

const TodoScreen = observer(({}: ITodoScreenProps) => {
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
      {todoStore.state === storeStates.PENDING && <Loading />}
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
