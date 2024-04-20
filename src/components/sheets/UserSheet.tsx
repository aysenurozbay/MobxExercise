import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'

const UserSheet = (props: SheetProps<'user-sheet'>) => {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>{props.payload?.value}</Text>
      </View>
    </ActionSheet>
  )
}

export default UserSheet

const styles = StyleSheet.create({})
