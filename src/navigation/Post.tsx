import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { PostParams } from './NavigationTypes'
import PostsScreen from '../screen/Post/PostsScreen'
import PostDetailScreen from '../screen/Post/PostDetailScreen'
import { colors } from '../utils/colors'

const Stack = createStackNavigator<PostParams>()

const Post = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.background.white } }}>
      <Stack.Screen name='Posts' component={PostsScreen} />
      <Stack.Screen name='PostDetails' component={PostDetailScreen} />
    </Stack.Navigator>
  )
}

export default Post
