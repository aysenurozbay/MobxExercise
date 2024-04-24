import React from 'react'
import { TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react-lite'
import { SheetManager } from 'react-native-actions-sheet'

import HeartIcon from '../../assets/icons/HeartIcon'
import favoriteStore from '../../store/favoriteStore'

import { UserDataType } from '../../utils/Types'
import { colors } from '../../utils/colors'

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
