import React from 'react'

import { AppParams, DrawerStackParams } from './NavigationTypes'
import { createDrawerNavigator } from '@react-navigation/drawer'
import PostsIcon from '../assets/icons/PostsIcon'
import CustomDrawer from '../components/drawer/CustomDrawer'
import FavoritesScreen from '../screen/Favorites/FavoritesScreen.tsx'
import TodoScreen from '../screen/Todo/TodoScreen'
import UsersScreen from '../screen/Users/UsersScreen'
import { colors } from '../utils/colors'
import { marginConsts } from '../utils/constValues'
import { metrics } from '../utils/metrics'
import Post from './Post'
import Header from '../components/common/Header'

const Drawer = createDrawerNavigator<DrawerStackParams>()

const Main = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: metrics.screenWidth >= 768 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: colors.background.purple,
        drawerLabelStyle: {
          color: colors.text.purple,
          marginLeft: -marginConsts.medium,
          fontWeight: '700',
        },
        header: props => Header(props),
        sceneContainerStyle: {
          backgroundColor: colors.background.white,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name='Post' component={Post} options={{ drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} />, title: 'Gonderiler' }} />
      <Drawer.Screen
        name='Todos'
        component={TodoScreen}
        options={{ drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} />, title: 'Gorevler' }}
      />

      <Drawer.Screen
        name='Users'
        component={UsersScreen}
        options={{ drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} />, title: 'Kullanicilar' }}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{ drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} />, title: 'Favorilerim' }}
      />
    </Drawer.Navigator>
  )
}

export default Main
