import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { PostParams } from './NavigationTypes'
import PostsScreen from '../screen/Post/PostsScreen'
import PostDetailScreen from '../screen/Post/PostDetailScreen'
import { colors } from '../utils/colors'
import PostScreenHeader from '../components/post/PostScreenHeader'

const Stack = createStackNavigator<PostParams>()

const Post = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.background.white } }}>
      <Stack.Screen name='Posts' component={PostsScreen} />
      <Stack.Screen
        name='PostDetails'
        component={PostDetailScreen}
        options={{
          title: 'Detail', //i want an option here to hide the drawer nav header on this screen only
          headerShown: true,
          header: props => PostScreenHeader(props),
        }}
      />
    </Stack.Navigator>
  )
}

export default Post
