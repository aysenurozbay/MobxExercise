import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UserDataType } from '../../utils/Types'
import { API_URL, paddingConsts } from '../../utils/constValues'
import UserCard from '../../components/user/UserCard'
import FilterComponent from '../../components/common/FilterComponent'

const UsersScreen = () => {
  const [users, setUsers] = useState<UserDataType[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${API_URL}/users`, {
        params: {},
      })
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [page])

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <FilterComponent />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {users.map(user => (
            <UserCard user={user} key={user.id} />
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

export default UsersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: paddingConsts.large,
  },
})
