import { runInAction, makeAutoObservable } from 'mobx'
import { PostDataType, TodoDataType, UserDataType } from '../utils/Types'
import { fetchPosts } from '../api/apiCalls'

class Store {
  posts: PostDataType[] = []
  state: 'pending' | 'done' | 'error' = 'pending'

  constructor() {
    makeAutoObservable(this)
  }

  async fetchPosts() {
    this.posts = []
    this.state = 'pending'
    try {
      const projects = await fetchPosts()
      runInAction(() => {
        this.posts = projects
        this.state = 'done'
      })
    } catch (e) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }
}
const store = new Store()

export default store
