import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeartIcon from '../../assets/icons/HeartIcon'
import { colors } from '../../utils/colors'
import { PostDataType, UserDataType } from '../../utils/Types'
import favoriteStore from '../../store/store'
import { observer } from 'mobx-react-lite'
import { SheetManager, useSheetRef } from 'react-native-actions-sheet'

interface ILikeComponentProps {
  user: UserDataType
}

const LikeComponent = ({ user }: ILikeComponentProps) => {
  const handleLike = () => {
    favoriteStore.toggleFavorites(user)
    setTimeout(() => {
      SheetManager.hide('user-sheet')
    }, 100)
  }

  const isLiked = favoriteStore.isPostLiked(user.id)

  return (
    <TouchableOpacity onPress={handleLike}>
      <HeartIcon fill={colors.text.purple} size={30} type={isLiked ? 'full' : 'empty'} />
    </TouchableOpacity>
  )
}

export default observer(LikeComponent)

const styles = StyleSheet.create({})
