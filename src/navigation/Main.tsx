import React, { useState } from 'react'
import { Pressable, TextInput } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import PostsIcon from '../assets/icons/PostsIcon'
import CustomDrawer from '../components/drawer/CustomDrawer'
import FavoritesScreen from '../screen/Favorites/FavoritesScreen.tsx'
import TodoScreen from '../screen/Todo/TodoScreen'
import UsersScreen from '../screen/Users/UsersScreen'

import Post from './Post.tsx'

import { colors } from '../utils/colors'
import { metrics } from '../utils/metrics'
import { DEFAULT_SEARCH_TITLE, SearchTitles, SearchTitlesType, marginConsts } from '../utils/constValues'

import UserIcon from '../assets/icons/UserIcon.tsx'
import DrawerIcon from '../assets/icons/DrawerIcon.tsx'
import TasksIcon from '../assets/icons/TasksIcon.tsx'
import HeartIcon from '../assets/icons/HeartIcon.tsx'
import { commonStyles } from '../assets/commonStyles.ts'

import todoStore from '../store/todoStore.ts'
import postStore from '../store/postStore.ts'
import userStore from '../store/userStore.ts'

const Drawer = createDrawerNavigator()

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (text: string, type: keyof SearchTitlesType) => {
    setSearchTerm(text)
    searchLookUp[type](text)
  }
  const searchLookUp: Record<keyof SearchTitlesType, (value: string) => void> = {
    ['TODO']: value => {
      setSearchTerm(value)
      todoStore.setSearchTerm(value)
      todoStore.searchByTitle
    },
    ['POST']: value => {
      setSearchTerm(value)
      postStore.setSearchTerm(value)
      postStore.searchByTitle
    },
    ['USER']: value => {
      setSearchTerm(value)
      userStore.setSearchTerm(value)
      userStore.searchByName
    },
  }

  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerType: metrics.screenWidth >= 768 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: colors.background.purple,
        drawerLabelStyle: {
          color: colors.text.purple,
          marginLeft: -marginConsts.medium,
          fontWeight: '700',
        },
        headerStyle: {
          height: 50,
        },
        sceneContainerStyle: {
          backgroundColor: colors.background.white,
        },
        headerRight: props => <UserIcon size={30} fill={colors.border.active} />,
        headerLeft: props => {
          return (
            <Pressable onPress={() => navigation.toggleDrawer()}>
              <DrawerIcon size={40} fill={colors.border.active} />
            </Pressable>
          )
        },
      })}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name='Post'
        component={Post}
        options={{
          drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} />,
          title: 'Gonderiler',
          headerTitle: prop => (
            <TextInput
              placeholder={SearchTitles['POST'] || DEFAULT_SEARCH_TITLE}
              onChangeText={text => handleSearch(text, 'POST')}
              value={searchTerm}
              style={commonStyles.input}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Todos'
        component={TodoScreen}
        options={{
          drawerIcon: ({}) => <TasksIcon fill={colors.text.purple} size={30} />,
          title: 'Gorevler',
          headerTitle: prop => (
            <TextInput
              placeholder={SearchTitles['TODO'] || DEFAULT_SEARCH_TITLE}
              onChangeText={text => handleSearch(text, 'TODO')}
              value={searchTerm}
              style={commonStyles.input}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Users'
        component={UsersScreen}
        options={{
          drawerIcon: ({}) => <UserIcon fill={colors.text.purple} size={30} />,
          headerTitle: prop => (
            <TextInput
              placeholder={SearchTitles['TODO'] || DEFAULT_SEARCH_TITLE}
              onChangeText={text => handleSearch(text, 'TODO')}
              value={searchTerm}
              style={commonStyles.input}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{ drawerIcon: ({}) => <HeartIcon fill={colors.text.purple} size={30} type='full' />, title: 'Favorilerim' }}
      />
    </Drawer.Navigator>
  )
}

export default Main
