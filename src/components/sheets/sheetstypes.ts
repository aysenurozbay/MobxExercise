import type { UserDataType } from '../../utils/Types'

export type UserSheetDefinitionType = {
  payload: {
    user: UserDataType
  }
}

export type SortSheetDefinitionType = {
  payload: {}
  returnValue: 'oldest-to-newest' | 'newest-to-oldest'
}

export type FilterSheetDefinitionType = {
  payload: {
    type: 'post' | 'user' | 'todo'
  }
  returnValue: any
}
