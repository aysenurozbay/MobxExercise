import { runInAction, makeAutoObservable, observable, action, computed, makeObservable } from 'mobx'
import { PostDataType } from '../utils/Types'
import { fetchPosts, fetchTodos } from '../api/apiCalls'

class Store {
  posts: PostDataType[] = []
  filteredPosts: PostDataType[] = []
  activeFilter: string = 'none'
  state: 'pending' | 'done' | 'error' = 'pending'
  searchTerm: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchPosts() {
    this.posts = []
    this.state = 'pending'
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
    this.state = 'pending'
    this.filteredPosts = this.posts.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.activeFilter = 'bysearch'
    this.state = 'done'

    return this.filteredPosts
  }
  filterByUser = (id: number) => {
    console.log(this)

    this.state = 'pending'
  }

  resetFilter() {
    this.state = 'pending'
    this.filteredPosts = []
    this.activeFilter = 'none'
    this.state = 'done'
  }

  sortById(order: 'oldest-to-newest' | 'newest-to-oldest') {
    this.state = 'pending'
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
