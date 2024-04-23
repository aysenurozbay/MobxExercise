import React from 'react'

import { AppParams, DrawerStackParams } from './NavigationTypes'
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer'
import PostsIcon from '../assets/icons/PostsIcon'
import CustomDrawer from '../components/drawer/CustomDrawer'
import FavoritesScreen from '../screen/Favorites/FavoritesScreen.tsx'
import TodoScreen from '../screen/Todo/TodoScreen'
import UsersScreen from '../screen/Users/UsersScreen'
import { colors } from '../utils/colors'
import { marginConsts, paddingConsts } from '../utils/constValues'
import { metrics } from '../utils/metrics'
import Post from './Post'
import Header from '../components/common/Header'
import { Pressable, Text } from 'react-native'
import UserIcon from '../assets/icons/UserIcon.tsx'
import DrawerIcon from '../assets/icons/DrawerIcon.tsx'
import TasksIcon from '../assets/icons/TasksIcon.tsx'
import HeartIcon from '../assets/icons/HeartIcon.tsx'
import PostsScreen from '../screen/Post/PostsScreen.tsx'

const Drawer = createDrawerNavigator<DrawerStackParams>()

const Main = () => {
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
        component={PostsScreen}
        options={{ drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} />, title: 'Gonderiler' }}
      />
      <Drawer.Screen
        name='Todos'
        component={TodoScreen}
        options={{ drawerIcon: ({}) => <TasksIcon fill={colors.text.purple} size={30} />, title: 'Gorevler' }}
      />
      <Drawer.Screen
        name='Users'
        component={UsersScreen}
        options={{ drawerIcon: ({}) => <UserIcon fill={colors.text.purple} size={30} />, title: 'Kullanicilar' }}
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
