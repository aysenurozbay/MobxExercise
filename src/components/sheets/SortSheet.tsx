import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ActionSheet, { SheetManager, SheetProps } from 'react-native-actions-sheet'
import { colors } from '../../utils/colors'
import { marginConsts, paddingConsts, radiusConsts, textSize } from '../../utils/constValues'
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox'
import { SheetTypes } from './sheets'
import { commonStyles } from '../../assets/commonStyles'

type OrderDataType = {
  id: 'oldest-to-newest' | 'newest-to-oldest'
  label: string
}

const SortSheet = ({ payload, sheetId }: SheetProps<SheetTypes.SortSheet>) => {
  const [checkboxState, setCheckboxState] = React.useState(false)

  const orders: OrderDataType[] = [
    { id: 'oldest-to-newest', label: 'Eskiden Yeniye' },
    { id: 'newest-to-oldest', label: 'Yeniden Eskiye ' },
  ]

  return (
    <ActionSheet
      id={sheetId}
      containerStyle={styles.container}
      useBottomSafeAreaPadding={true}
      indicatorStyle={styles.indicatorStyle}
      backgroundInteractionEnabled={false}>
      <View>
        <Text style={commonStyles.sheetTitle}>Filtrele</Text>

        {orders.map(order => (
          <BouncyCheckbox
            size={25}
            key={order.id}
            unFillColor='#FFFFFF'
            text={order.label}
            iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.small }}
            fillColor={colors.text.purple}
            innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.small, borderColor: colors.border.active }}
            textStyle={{
              textDecorationLine: 'none',
              fontSize: textSize.normal,
              color: colors.text.primary,
            }}
            style={styles.checkbox}
            isChecked={checkboxState}
            onPress={(isChecked: boolean) => {
              SheetManager.hide(sheetId, {
                payload: order.id,
              })
            }}
          />
        ))}
      </View>
    </ActionSheet>
  )
}

export default SortSheet

const styles = StyleSheet.create({
  container: {
    padding: paddingConsts.large,
  },
  indicatorStyle: {
    width: 100,
    backgroundColor: colors.background.secondary,
  },

  checkbox: {
    marginVertical: marginConsts.small,
  },
})
