import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PostComponent from '../../components/post/PostComponent'
import { API_URL, paddingConsts } from '../../utils/constValues'
import FilterComponent from '../../components/common/FilterComponent'
import axios from 'axios'
import { TodoDataType } from '../../utils/Types'
import TodoItemComponent from '../../components/todo/TodoItemComponent'

const TodoScreen = () => {
  const [todos, setTodos] = useState<TodoDataType[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${API_URL}/todos`, {
        params: {
          limit: 10, // Her istekte alınacak maksimum öğe sayısı
          offset: (page - 1) * 10, // Sayfa başına öğe sayısı * sayfa numarası
        },
      })
      setTodos(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [page])

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <FilterComponent />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {todos.map(todo => (
            <TodoItemComponent todo={todo} key={todo.id} />
          ))}
          {/* <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Button title='Previous Page' onPress={handlePrevPage} disabled={page === 1} />
            <Button title='Next Page' onPress={handleNextPage} />
          </View> */}
        </View>
      )}
    </ScrollView>
  )
}

export default TodoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
})
