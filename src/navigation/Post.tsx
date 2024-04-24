import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { PostParams } from './NavigationTypes'

import PostScreenHeader from '../components/post/PostScreenHeader'

import PostsScreen from '../screen/Post/PostsScreen'
import PostDetailScreen from '../screen/Post/PostDetailScreen'

import { colors } from '../utils/colors'
import { StyleSheet } from 'react-native'

const Stack = createStackNavigator<PostParams>()

const Post = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: styles.cardStyle }}>
      <Stack.Screen name='Posts' component={PostsScreen} />
      <Stack.Screen
        name='PostDetails'
        component={PostDetailScreen}
        options={{
          title: 'Detail',
          headerShown: true,
          header: props => PostScreenHeader(props),
        }}
      />
    </Stack.Navigator>
  )
}

export default Post

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: colors.background.white,
  },
})
