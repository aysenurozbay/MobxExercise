import { makeAutoObservable } from 'mobx'
import { PostDataType } from '../utils/Types'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface PostData {
  post: PostDataType
  isLiked: boolean
}

class FavoriteStore {
  posts: PostData[] = []

  constructor() {
    makeAutoObservable(this)
    this.loadFavorites()
  }

  toggleFavorites(item: PostDataType) {
    const index = this.posts.findIndex(post => post.post.id === item.id)
    console.log(index)

    if (index !== -1) {
      this.posts[index].isLiked = !this.posts[index].isLiked
      if (!this.posts[index].isLiked) {
        this.posts.splice(index, 1)
      }
    } else {
      // Eğer post storeda yoksa, storeda ekleyerek beğenme durumunu true yap
      const newPost: PostData = { post: item, isLiked: true }
      this.posts.push(newPost)
    }
    this.saveFavorites()
  }

  isPostLiked(postId: number) {
    return this.posts.some(post => post.post.id === postId && post.isLiked)
  }
  private STORAGE_KEY = '@User:Favorites'

  async saveFavorites() {
    try {
      const favoritesJSON = JSON.stringify(this.posts)
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
        this.posts = JSON.parse(favoritesJSON)
      }
      console.log('Favorites loaded successfully')
    } catch (error) {
      console.error('Error loading favorites:', error)
    }
  }
}
const favoriteStore = new FavoriteStore()
export default favoriteStore
