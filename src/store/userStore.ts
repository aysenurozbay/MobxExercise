import { runInAction, makeAutoObservable, observable, action, computed, makeObservable } from 'mobx'
import { PostDataType, TodoDataType, UserDataType } from '../utils/Types'
import { fetchPosts, fetchTodos, fetchUsers } from '../api/apiCalls'

class Store {
  users: UserDataType[] = []
  filteredUsers: UserDataType[] = []
  activeFilter: string = 'none'
  state: 'pending' | 'done' | 'error' = 'pending'
  searchTerm: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchUsers() {
    this.users = []
    this.state = 'pending'
    try {
      const _users = await fetchUsers()
      runInAction(() => {
        this.users = _users
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

  get searchByName(): UserDataType[] {
    this.state = 'pending'
    this.filteredUsers = this.users.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.activeFilter = 'bysearch'
    this.state = 'done'
    return this.filteredUsers
  }

  filterByCompany = (value: string) => {
    this.state = 'pending'
    if (this.activeFilter === 'none') {
      const _filteredUsers: UserDataType[] = [...this.users].filter((user: UserDataType) => user.company.name === value)
      this.filteredUsers = _filteredUsers
    } else {
      const _filteredUsers: UserDataType[] = [...this.filteredUsers].filter((user: UserDataType) => user.company.name === value)
      this.filteredUsers = _filteredUsers
    }
    this.activeFilter = 'bystate'
    this.state = 'done'
  }
  resetFilter() {
    this.state = 'pending'
    this.filteredUsers = []
    this.activeFilter = 'none'
    this.state = 'done'
  }

  sortById(order: 'oldest-to-newest' | 'newest-to-oldest') {
    this.state = 'pending'
    const orderPosts = this.activeFilter === 'none' ? this.users : this.filteredUsers
    this.filteredUsers = orderPosts.slice().sort((a, b) => {
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
const todoStore = new Store()

export default todoStore
