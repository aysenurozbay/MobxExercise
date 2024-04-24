import axios from 'axios'

import { CommentDataType, PostDataType, TodoDataType, UserDataType } from '../utils/Types'
import { API_URL } from '../utils/constValues'

export const fetchPosts = async () => {
  try {
    const response = await axios.get<PostDataType[]>(`${API_URL}/posts`, {})
    return response.data
  } catch (error) {
    return []
  }
}

export const fetchUsers = async () => {
  try {
    const response = await axios.get<UserDataType[]>(`${API_URL}/users`, {})
    return response.data
  } catch (error) {
    return []
  }
}

export const fetchTodos = async (): Promise<TodoDataType[]> => {
  try {
    const response = await axios.get<TodoDataType[]>(`${API_URL}/todos`, {})
    return response.data
  } catch (error) {
    return []
  }
}
export const fetchComments = async (postId: number): Promise<CommentDataType[]> => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`, {})
    return response.data
  } catch (error) {
    return []
  }
}
