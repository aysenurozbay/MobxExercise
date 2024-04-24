import React, { useEffect, useLayoutEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import PostComponent from '../../components/post/PostComponent'
import FilterComponent from '../../components/common/FilterComponent'
import { SearchTitles, paddingConsts } from '../../utils/constValues'
import { SheetManager } from 'react-native-actions-sheet'
import { SheetTypes } from '../../components/sheets/sheets'
import { PostParams } from '../../navigation/NavigationTypes'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { colors } from '../../utils/colors'
import { commonStyles } from '../../assets/commonStyles'
import userStore from '../../store/userStore'
import UserCard from '../../components/user/UserCard'
import Loading from '../../components/common/Loading'

interface IUsersScreennProps {}

const UsersScreen = observer(({}: IUsersScreennProps) => {
  const navigation: StackNavigationProp<PostParams> = useNavigation()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    userStore.fetchUsers()
  }, [])

  const filterOnPress = async () => {
    const sheetPayload: { type: string; value?: string } = await SheetManager.show(SheetTypes.FilterSheet, {
      payload: {
        type: 'user',
      },
    })

    const { value, type } = sheetPayload

    const filterTypesLookup: Record<string, () => void> = {
      company: () => {
        if (value) {
          userStore.filterByCompany(value)
        }
      },
      reset: () => userStore.resetFilter(),
    }

    if (!filterTypesLookup[type]) {
      return
    }

    filterTypesLookup[type]()
  }

  const sortOnPress = async () => {
    const sheetPayload = await SheetManager.show(SheetTypes.SortSheet)
    userStore.sortById(sheetPayload)
  }

  const data = userStore.activeFilter !== 'none' ? userStore.filteredUsers : userStore.users

  const handleSearch = (text: string) => {
    setSearchTerm(text)
    userStore.setSearchTerm(text)
    userStore.searchByName
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TextInput placeholder={SearchTitles.USER} onChangeText={handleSearch} value={searchTerm} style={commonStyles.input} />,
    })
  }, [navigation, searchTerm])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <FilterComponent filterOnPress={filterOnPress} sortOnPress={sortOnPress} />
      {userStore.state === 'pending' && <Loading />}
      {userStore.state === 'done' && (
        <View>
          {data?.map(user => (
            <UserCard user={user} key={user.id} />
          ))}
        </View>
      )}
      {userStore.state === 'error' && <Text>Error occurred while fetching data</Text>}
    </ScrollView>
  )
})

export default UsersScreen

const styles = StyleSheet.create({
  container: {
    padding: paddingConsts.large,
  },
})
