import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { radiusConsts } from '../utils/constValues'
import { metrics } from '../utils/metrics'

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  padding20: {
    padding: 20,
  },
  margin8: {
    margin: 8,
  },
  indicatorStyle: {
    width: 100,
    backgroundColor: colors.background.secondary,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    width: metrics.screenWidth - 150,
    borderRadius: radiusConsts.medium,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.secondary,
  },
})
