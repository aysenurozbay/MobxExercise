import { SheetDefinition, registerSheet } from 'react-native-actions-sheet'
import UserSheet from './UserSheet'
import { UserDataType } from '../../utils/Types'

registerSheet('user-sheet', UserSheet)

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'user-sheet': SheetDefinition<{
      payload: {
        value: string
      }
    }>
  }
}
