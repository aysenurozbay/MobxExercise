import { PostDataType } from '../utils/Types'

export type AppParams = {
  Login: undefined
  Main: undefined
}

export type DrawerStackParams = {
  Dashboard: any
  Post: undefined
  Todos: any
  Favorites: undefined
  Users: undefined
}

export type PostParams = {
  Posts: undefined
  PostDetails: { post: PostDataType }
}
