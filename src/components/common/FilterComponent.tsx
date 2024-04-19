import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { marginConsts, paddingConsts, radiusConsts } from '../../utils/constValues'
import SortIcon from '../../assets/icons/SortIcon'
import FilterIcon from '../../assets/icons/FilterIcon'

const FilterComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sortingContainer}>
        <SortIcon size={20} fill={colors.border.active} />
        <Text style={styles.sortingText}>Sirala</Text>
      </View>
      <View style={styles.sortingContainer}>
        <FilterIcon size={20} fill={colors.border.active} />
        <Text style={styles.sortingText}>Filtrele</Text>
      </View>
    </View>
  )
}

export default FilterComponent

const styles = StyleSheet.create({
  container: {
    borderColor: colors.border.secondary,
    borderWidth: 2,
    borderRadius: radiusConsts.medium,
    padding: paddingConsts.small,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: marginConsts.medium,
  },
  sortingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortingText: {
    paddingHorizontal: paddingConsts.medium,
  },
})
