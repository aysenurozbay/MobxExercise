import { runInAction, makeAutoObservable, observable, action, computed, makeObservable } from 'mobx'
import { PostDataType, TodoDataType, UserDataType } from '../utils/Types'
import { fetchPosts, fetchTodos } from '../api/apiCalls'

class Store {
  todos: TodoDataType[] = []
  filteredTodos: TodoDataType[] = []
  activeFilter: string = 'none'
  state: 'pending' | 'done' | 'error' = 'pending'
  searchTerm: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  async fetchTodos() {
    this.todos = []
    this.state = 'pending'
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
    this.state = 'pending'
    this.filteredTodos = this.todos.filter(item => item.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.activeFilter = 'bysearch'
    this.state = 'done'

    return this.filteredTodos
  }
  filterByState = (state: boolean) => {
    this.state = 'pending'
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
    console.log(`isCompleted`, isCompleted)

    this.state = 'pending'
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
    console.log(this)

    this.state = 'pending'
  }

  resetFilter() {
    this.state = 'pending'
    this.filteredTodos = []
    this.activeFilter = 'none'
    this.state = 'done'
  }

  sortById(order: 'oldest-to-newest' | 'newest-to-oldest') {
    this.state = 'pending'
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
