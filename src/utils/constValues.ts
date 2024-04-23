import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const textSize = {
  xSmall: 10,
  small: 12,
  normal: 14,
  medium: 16,
  large: 18,
  xLarge: 22,
  huge: 32,
}

export const marginConsts = {
  tiny: 4,
  xSmall: 6,
  small: 8,
  medium: 12,
  large: 16,
  xLarge: 20,
  huge: 32,
}

export const paddingConsts = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 20,
  xLarge: 24,
  huge: 32,
}

export const radiusConsts = {
  tiny: 2,
  small: 4,
  medium: 8,
  large: 12,
  xLarge: 20,
  huge: 1000,
}

export const headerStyles = StyleSheet.create({
  styles: {
    borderBottomColor: colors.border.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export const storeStates = {
  PENDING: 'pending',
  DONE: 'done',
  ERROR: 'error',
}
export const SearchTitles = {
  TODO: 'Gorev Ara',
  POST: 'Gonderi Ara',
  USER: 'Kullanici Ara',
}

export const API_URL = 'https://jsonplaceholder.typicode.com'
