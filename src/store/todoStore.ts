import { makeAutoObservable, runInAction } from 'mobx'
import { fetchTodos } from '../api/apiCalls'
import { StoreStateTypes, TodoDataType } from '../utils/Types'
import { storeStates } from '../utils/constValues'

class Store {
  todos: TodoDataType[] = []
  filteredTodos: TodoDataType[] = []
  activeFilter: string = 'none'
  state: StoreStateTypes = storeStates.PENDING
  searchTerm: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchTodos() {
    this.todos = []
    this.state = storeStates.PENDING
    try {
      const projects = await fetchTodos()
      runInAction(() => {
        this.todos = projects
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
  get searchByTitle(): TodoDataType[] {
    this.state = storeStates.PENDING
    this.filteredTodos = this.todos.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.activeFilter = 'bysearch'
    this.state = 'done'

    return this.filteredTodos
  }
  filterByState = (state: boolean) => {
    this.state = storeStates.PENDING
    if (this.activeFilter === 'none') {
      const _filteredTodos: TodoDataType[] = [...this.todos].filter((todo: TodoDataType) => todo.completed === state)
      this.filteredTodos = _filteredTodos
    } else {
      const _filteredTodos: TodoDataType[] = [...this.filteredTodos].filter((todo: TodoDataType) => todo.completed === state)
      this.filteredTodos = _filteredTodos
    }
    this.activeFilter = 'bystate'
    this.state = 'done'
  }

  filterWithState = (isCompleted: boolean) => {
    this.state = storeStates.PENDING
    if (this.activeFilter === 'none') {
      const _filteredTodos: TodoDataType[] = [...this.todos].filter((todo: TodoDataType) => todo.completed === isCompleted)
      this.filteredTodos = _filteredTodos
    } else {
      const _filteredTodos: TodoDataType[] = [...this.filteredTodos].filter((todo: TodoDataType) => todo.completed === isCompleted)
      this.filteredTodos = _filteredTodos
    }
    this.activeFilter = 'bystate'
    this.state = 'done'
  }
  filterByUserId = (id: number) => {
    this.state = storeStates.PENDING
  }

  resetFilter() {
    this.state = storeStates.PENDING
    this.filteredTodos = []
    this.activeFilter = 'none'
    this.state = 'done'
  }

  sortById(order: 'oldest-to-newest' | 'newest-to-oldest') {
    this.state = storeStates.PENDING
    const orderPosts = this.activeFilter === 'none' ? this.todos : this.filteredTodos
    this.filteredTodos = orderPosts.slice().sort((a, b) => {
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
