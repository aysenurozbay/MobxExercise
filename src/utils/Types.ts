export type PostDataType = {
  userId: number
  id: number
  title: string
  body: string
}
export type CommentDataType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export type UserDataType = {
  id: number
  name: string
  email: string
  username: string
  address: {
    suite: string
    city: string
    street: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
