import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ActionSheet, { ActionSheetRef, SheetProps, useSheetRef } from 'react-native-actions-sheet'
import { paddingConsts, textSize } from '../../utils/constValues'
import LocationIcon from '../../assets/icons/LocationIcon'
import { colors } from '../../utils/colors'
import CompanyIcon from '../../assets/icons/CompanyIcon'
import WorldIcon from '../../assets/icons/WorldIcon'
import LikeComponent from '../like/LikeComponent'

const UserSheet = ({ payload, sheetId }: SheetProps<'user-sheet'>) => {
  const user = payload?.user
  const actionSheetRef = useRef<ActionSheetRef>(null)

  return (
    <ActionSheet id={sheetId} containerStyle={styles.container} indicatorStyle={styles.indicatorStyle} ref={actionSheetRef}>
      {user && (
        <>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <LikeComponent user={user} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.labelContainer}>
              <LocationIcon size={30} fill={colors.border.active} />
              <Text style={styles.labelText}> Konum</Text>
            </View>
            <Text style={styles.userInfo}>
              {user.address.street} , {user.address.suite} , {user.address.city}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.labelContainer}>
              <CompanyIcon size={30} fill={colors.border.active} />
              <Text style={styles.labelText}> Firma</Text>
            </View>
            <Text style={styles.userInfo}>{user.company.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.labelContainer}>
              <WorldIcon size={30} fill={colors.border.active} />
              <Text style={styles.labelText}> Websitesi</Text>
            </View>
            <Text style={styles.userInfo}>{user.website}</Text>
          </View>
        </>
      )}
    </ActionSheet>
  )
}

export default UserSheet

const styles = StyleSheet.create({
  container: {
    padding: paddingConsts.large,
  },
  indicatorStyle: {
    width: 100,
    backgroundColor: colors.background.secondary,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '600',
    fontSize: textSize.xLarge,
  },
  infoContainer: {
    paddingVertical: paddingConsts.medium,
    borderBottomColor: colors.border.secondary,
    borderBottomWidth: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    fontSize: textSize.normal,
    fontWeight: '500',
    lineHeight: 20,
    color: colors.text.primary,
  },
  userInfo: {
    fontSize: textSize.normal,
    color: colors.text.secondary,
    lineHeight: 20,
    fontWeight: '300',
    paddingVertical: paddingConsts.small,
  },
})
