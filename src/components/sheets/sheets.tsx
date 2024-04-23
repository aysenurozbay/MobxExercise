import { SheetDefinition, registerSheet } from 'react-native-actions-sheet'
import UserSheet from './UserSheet'
import FilterSheet from './FilterSheet'
import SortSheet from './SortSheet'
import type { FilterSheetDefinitionType, SortSheetDefinitionType, UserSheetDefinitionType } from './sheetstypes'

export enum SheetTypes {
  UserSheet = 'user-sheet',
  SortSheet = 'sort-sheet',
  FilterSheet = 'filter-sheet',
}

registerSheet(SheetTypes.UserSheet, UserSheet)
registerSheet(SheetTypes.SortSheet, SortSheet)
registerSheet(SheetTypes.FilterSheet, FilterSheet)

declare module 'react-native-actions-sheet' {
  interface Sheets {
    [SheetTypes.UserSheet]: SheetDefinition<UserSheetDefinitionType>
    [SheetTypes.SortSheet]: SheetDefinition<SortSheetDefinitionType>
    [SheetTypes.FilterSheet]: SheetDefinition<FilterSheetDefinitionType>
  }
}
