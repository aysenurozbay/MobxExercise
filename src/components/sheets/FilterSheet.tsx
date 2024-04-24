import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import Loading from '../common/Loading'

const FilterSheet = ({ payload, sheetId }: SheetProps<SheetTypes.FilterSheet>) => {
  const [checkboxState, setCheckboxState] = React.useState(false)

  const onPressBouncyCheckbox = (type: any, value?: string | number) => {
    console.log(type)

    SheetManager.hide(sheetId, {
      payload: { value, type },
    })
  }

  useEffect(() => {
    userStore.fetchUsers()
    userStore.getCompanyNames
  }, [])

  const users: UserDataType[] = userStore.users

  const comp = userStore.users.forEach(item => {
    const companyName = item.company.name
    if (!userStore.companyNames.includes(companyName)) {
      userStore.companyNames.push(companyName)
    }
  })

  return (
    <ActionSheet
      id={sheetId}
      containerStyle={{ ...commonStyles.padding20, ...styles.container }}
      useBottomSafeAreaPadding={true}
      indicatorStyle={commonStyles.indicatorStyle}
      backgroundInteractionEnabled={false}>
      <Text style={commonStyles.sheetTitle}>Filtrele</Text>

      {payload ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              SheetManager.hide(sheetId, {
                payload: { type: 'reset' },
              })
            }}
            style={commonStyles.resetFilterText}>
            <Text>Filtreleri Temizle</Text>
          </TouchableOpacity>

          {payload.type === 'todo' && (
            <>
              <BouncyCheckbox
                size={25}
                key={'todoStatus-complete'}
                unFillColor='#FFFFFF'
                text={'Tamamlanmis Gorevler'}
                iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.huge }}
                fillColor={colors.text.purple}
                innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.huge, borderColor: colors.border.active }}
                textStyle={FontStyles.filterText}
                style={commonStyles.margin8}
                isChecked={checkboxState}
                onPress={() => {
                  onPressBouncyCheckbox('completed')
                }}
              />
              <BouncyCheckbox
                size={25}
                key={'todoStatus-notComplete'}
                unFillColor='#FFFFFF'
                text={'Tamamlanmis Gorevler'}
                iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.huge }}
                fillColor={colors.text.purple}
                innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.huge, borderColor: colors.border.active }}
                textStyle={FontStyles.filterText}
                style={commonStyles.margin8}
                isChecked={checkboxState}
                onPress={() => {
                  onPressBouncyCheckbox('notcompleted')
                }}
              />
            </>
          )}
          {payload.type === 'user' && (
            <>
              {userStore.state === 'pending' && <Loading />}
              {userStore.state === 'done' && (
                <View>
                  {userStore.companyNames?.map(company => (
                    <BouncyCheckbox
                      size={25}
                      key={company}
                      unFillColor='#FFFFFF'
                      text={company}
                      iconStyle={{ borderColor: colors.text.purple, borderRadius: radiusConsts.huge }}
                      fillColor={colors.text.purple}
                      innerIconStyle={{ borderWidth: 1, borderRadius: radiusConsts.huge, borderColor: colors.border.active }}
                      textStyle={FontStyles.filterText}
                      style={commonStyles.margin8}
                      isChecked={checkboxState}
                      onPress={() => {
                        onPressBouncyCheckbox('company', company)
                      }}
                    />
                  ))}
                </View>
              )}
            </>
          )}
          {payload.type === 'post' && (
            <>
              {userStore.state === 'pending' && <Loading />}
              {userStore.state === 'done' && (
                <View>
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
                        onPressBouncyCheckbox('user', user.id)
                      }}
                    />
                  ))}
                </View>
              )}
            </>
          )}
        </ScrollView>
      ) : (
        <Text> Bir sorun olustu !</Text>
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
