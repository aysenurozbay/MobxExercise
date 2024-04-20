import { makeAutoObservable } from 'mobx'
import { PostDataType, UserDataType } from '../utils/Types'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface UserData {
  user: UserDataType
  isLiked: boolean
}

class FavoriteStore {
  users: UserData[] = []

  constructor() {
    makeAutoObservable(this)
    this.loadFavorites()
  }

  toggleFavorites(item: UserDataType) {
    const index = this.users.findIndex(user => user.user.id === item.id)

    if (index !== -1) {
      this.users[index].isLiked = !this.users[index].isLiked
      if (!this.users[index].isLiked) {
        this.users.splice(index, 1)
      }
    } else {
      // Eğer post storeda yoksa, storeda ekleyerek beğenme durumunu true yap
      const newPost: UserData = { user: item, isLiked: true }
      this.users.push(newPost)
    }
    this.saveFavorites()
  }

  isPostLiked(postId: number) {
    return this.users.some(item => item.user.id === postId && item.isLiked)
  }
  private STORAGE_KEY = '@User:Favorites'

  async saveFavorites() {
    try {
      const favoritesJSON = JSON.stringify(this.users)
      await AsyncStorage.setItem(this.STORAGE_KEY, favoritesJSON)
      console.log('Favorites saved successfully')
    } catch (error) {
      console.error('Error saving favorites:', error)
    }
  }

  async loadFavorites() {
    try {
      const favoritesJSON = await AsyncStorage.getItem(this.STORAGE_KEY)
      if (favoritesJSON) {
        this.users = JSON.parse(favoritesJSON)
      }
      console.log('Favorites loaded successfully')
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
  }
}
const favoriteStore = new FavoriteStore()
export default favoriteStore
