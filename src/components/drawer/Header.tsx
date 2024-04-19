import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageIcon from '../../assets/icons/ImageIcon'
import { marginConsts, paddingConsts, textSize } from '../../utils/constValues'
import { colors } from '../../utils/colors'

const Header = () => {
  return (
    <View style={styles.container}>
        <ImageIcon size={50} fill='red'/>
        <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Jhon Doe</Text>
            <Text style={styles.userMail}>jhon@lorem.com</Text>
        </View>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: marginConsts.medium,
        paddingVertical: paddingConsts.small,
        borderBottomColor: colors.border.primary,
        borderBottomWidth: 1,

    },
    userInfoContainer:{
        paddingHorizontal: paddingConsts.small
    },
    userName:{
        fontSize: textSize.xLarge,
        color: colors.text.primary

    },
    userMail:{
        fontSize: textSize.normal,
        color: colors.text.primary
    },
})