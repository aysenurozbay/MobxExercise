import { makeAutoObservable, runInAction } from 'mobx'
import { fetchUsers } from '../api/apiCalls'
import { StoreStateTypes, UserDataType } from '../utils/Types'
import { storeStates } from '../utils/constValues'

class Store {
  users: UserDataType[] = []
  filteredUsers: UserDataType[] = []
  activeFilter: string = 'none'
  state: StoreStateTypes = storeStates.PENDING
  searchTerm: string = ''
  companyNames: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchUsers() {
    this.users = []
    this.state = storeStates.PENDING
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
    this.state = storeStates.PENDING
    this.filteredUsers = this.users.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.activeFilter = 'bysearch'
    this.state = 'done'
    return this.filteredUsers
  }

  get getCompanyNames(): string[] {
    this.users.forEach(item => {
      const companyName = item.company.name
      if (!this.companyNames.includes(companyName)) {
        this.companyNames.push(companyName)
      }
    })

    return this.companyNames
  }

  filterByCompany = (value: string) => {
    this.state = storeStates.PENDING
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
    this.state = storeStates.PENDING
    this.filteredUsers = []
    this.activeFilter = 'none'
    this.state = 'done'
  }

  sortById(order: 'oldest-to-newest' | 'newest-to-oldest') {
    this.state = storeStates.PENDING
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
const userStore = new Store()

export default userStore
