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
    const sheetPayload: 'completed' | 'notcompleted' | number = await SheetManager.show(SheetTypes.FilterSheet, {
      payload: {
        type: 'todo',
      },
    })

    const filterTypesLookup: Record<string, () => void> = {
      completed: () => todoStore.filterByState(true),
      notcompleted: () => todoStore.filterByState(false),
      userId: () => todoStore.filterByUserId(Number(sheetPayload)),
      reset: () => todoStore.resetFilter(),
    }

    if (!filterTypesLookup[sheetPayload]) {
      return
    }

    filterTypesLookup[sheetPayload]()
  }

  const sortOnPress = async () => {
    const sheetPayload = await SheetManager.show(SheetTypes.SortSheet)
    todoStore.sortById(sheetPayload)
  }

  const data = todoStore.activeFilter !== 'none' ? todoStore.filteredTodos : todoStore.todos

  const handleSearch = (text: string) => {
    setSearchTerm(text)
    todoStore.setSearchTerm(text)
    todoStore.searchByTitle
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TextInput placeholder={SearchTitles.TODO} onChangeText={handleSearch} value={searchTerm} style={commonStyles.input} />,
    })
  }, [navigation, searchTerm])

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
