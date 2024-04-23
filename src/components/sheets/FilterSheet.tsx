import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ActionSheet, { SheetManager, SheetProps } from 'react-native-actions-sheet'
import { colors } from '../../utils/colors'
import { marginConsts, paddingConsts, radiusConsts, textSize } from '../../utils/constValues'
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox'
import { commonStyles } from '../../assets/commonStyles'
import { FontStyles } from '../../assets/fonts'
import todoStore from '../../store/todoStore'
import { SheetTypes } from './sheets'
import { UserDataType } from '../../utils/Types'
import { fetchUsers } from '../../api/apiCalls'
import userStore from '../../store/userStore'
import { metrics } from '../../utils/metrics'

type FilterTable = {
  todo: ('completed' | 'notcompleted')[]
  post: ['userId']
  user: ['company']
}

const FilterSheet = ({ payload, sheetId }: SheetProps<SheetTypes.FilterSheet>) => {
  const [checkboxState, setCheckboxState] = React.useState(false)

  const filterTable: FilterTable = {
    todo: ['completed', 'notcompleted'],
    post: ['userId'],
    user: ['company'],
  }

  const onPressBouncyCheckbox = (item: any) => {
    SheetManager.hide(sheetId, {
      payload: item,
    })
  }

  useEffect(() => {
    userStore.fetchUsers()
  }, [])

  const users: UserDataType[] = userStore.users
  return (
    <ActionSheet
      id={sheetId}
      containerStyle={{ ...commonStyles.padding20, ...styles.container }}
      useBottomSafeAreaPadding={true}
      indicatorStyle={commonStyles.indicatorStyle}
      backgroundInteractionEnabled={false}>
      {payload ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {userStore.state === 'pending' && <Text>Loading...</Text>}
          <Button
            title='Filtreleri Temizle'
            onPress={() => {
              SheetManager.hide(sheetId, {
                payload: `true`,
              })
              todoStore.resetFilter()
            }}
          />
          {filterTable[payload.type]?.map(item => (
            <BouncyCheckbox
              size={25}
              key={item}
              unFillColor='#FFFFFF'
              text={item}
              iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.small }}
              fillColor={colors.text.purple}
              innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.small, borderColor: colors.border.active }}
              textStyle={FontStyles.filterText}
              style={commonStyles.margin8}
              isChecked={checkboxState}
              onPress={() => {
                console.log(checkboxState)
                onPressBouncyCheckbox(item)
              }}
            />
          ))}
          <View style={styles.userFilterContainer}>
            <Text style={styles.userFilterLabel}> Kullaniciya Gore Filtrele</Text>
            {users?.map(user => (
              <BouncyCheckbox
                size={25}
                key={user.id}
                unFillColor='#FFFFFF'
                text={user.name}
                iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.huge }}
                fillColor={colors.text.purple}
                innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.huge, borderColor: colors.border.active }}
                textStyle={FontStyles.filterText}
                style={commonStyles.margin8}
                isChecked={checkboxState}
                onPress={() => {
                  // console.log(checkboxState)
                  onPressBouncyCheckbox(user.id)
                }}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text> Bir sorun olustu </Text>
      )}
    </ActionSheet>
  )
}

export default FilterSheet

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight / 2,
  },
  iconImageStyle: {},
  iconStyle: {
    height: 50,
    width: 50,
    backgroundColor: `red`,
  },
  userFilterContainer: {
    paddingVertical: paddingConsts.medium,
    paddingHorizontal: paddingConsts.tiny,
  },
  userFilterLabel: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
})
