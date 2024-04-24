import { runInAction, makeAutoObservable, observable, action, computed, makeObservable } from 'mobx'
import { PostDataType, StoreStateTypes } from '../utils/Types'
import { fetchPosts, fetchTodos } from '../api/apiCalls'
import { storeStates } from '../utils/constValues'

class Store {
  posts: PostDataType[] = []
  filteredPosts: PostDataType[] = []
  activeFilter: string = 'none'
  state: StoreStateTypes = storeStates.PENDING
  searchTerm: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchPosts() {
    this.posts = []
    this.state = storeStates.PENDING
    try {
      const _posts = await fetchPosts()
      runInAction(() => {
        this.posts = _posts
        this.state = 'done'
      })
    } catch (e) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }

  setSearchTerm = (term: string) => {
    this.searchTerm = term
  }
  get searchByTitle(): PostDataType[] {
    this.state = storeStates.PENDING
    this.filteredPosts = this.posts.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.activeFilter = 'bysearch'
    this.state = 'done'
    return this.filteredPosts
  }
  filterByUser = (id: number) => {
    this.state = storeStates.PENDING
    this.filteredPosts = this.posts.filter(item => item.userId === id)
    this.activeFilter = 'byuser'
    this.state = 'done'
  }

  resetFilter() {
    this.state = storeStates.PENDING
    this.filteredPosts = []
    this.activeFilter = 'none'
    this.state = 'done'
  }

  sortById(order: 'oldest-to-newest' | 'newest-to-oldest') {
    this.state = storeStates.PENDING
    const orderPosts = this.activeFilter === 'none' ? this.posts : this.filteredPosts
    this.filteredPosts = orderPosts.slice().sort((a, b) => {
      if (order === 'oldest-to-newest') {
        return a.id - b.id
      } else {
        return b.id - a.id
      }
    })
    this.activeFilter = 'sorted'
    this.state = 'done'
  }
}
const postStore = new Store()

export default postStore
