import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeartIcon from '../../assets/icons/HeartIcon'
import { colors } from '../../utils/colors'
import { PostDataType } from '../../utils/Types'
import favoriteStore from '../../store/store'
import { observer } from 'mobx-react-lite'

interface ILikeComponentProps {
  post: PostDataType
}

const LikeComponent = ({ post }: ILikeComponentProps) => {
  const handleLike = () => {
    favoriteStore.toggleFavorites(post)
  }

  const isLiked = favoriteStore.isPostLiked(post.id)

  return (
    <TouchableOpacity onPress={handleLike}>
      <HeartIcon fill={colors.text.purple} size={30} type={isLiked ? 'full' : 'empty'} />
    </TouchableOpacity>
  )
}

export default observer(LikeComponent)

const styles = StyleSheet.create({})
