import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageIcon from '../../assets/icons/ImageIcon'
import { colors } from '../../utils/colors'
import { paddingConsts, radiusConsts, textSize } from '../../utils/constValues'
import DotsIcon from '../../assets/icons/DotsIcon'

const UserCard = () => {
  return (
    <View style={styles.container} >
       <View style={styles.userContainer}>
            <View style={styles.imageContainer} >
                <ImageIcon size={40} fill={colors.border.active}/>
            </View>
            <View style={styles.userInfoContainer} >
            <View style={styles.nameContaner}>

                    <Text style={styles.name}>Jhon Doe</Text>
                    <Text style={styles.email}>jhon@lorem.com</Text>

            </View>
            <View style={styles.phoneContaner}>
                    <Text style={styles.phone}>+90 555 678 12 23</Text>
            </View>
            </View>
       </View>
       <View>
        <DotsIcon size={40} fill={colors.border.active}/>   
       </View>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: radiusConsts.medium,
        borderColor: colors.border.primary,
        padding: paddingConsts.small,
        flexDirection: `row`,
        justifyContent: 'space-between'
    },
    imageContainer: {
        width: 68,
        height: 68,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radiusConsts.medium,
        borderColor: colors.border.primary, 
        borderWidth: 1,
   },
   userContainer:{
        flexDirection: `row`,


   },
   userInfoContainer:{
        paddingHorizontal: paddingConsts.medium,
         justifyContent: 'space-around'

   },
   nameContaner:{
   },
   name:{
    color: colors.text.primary,
    fontSize: textSize.medium,
    
   },
   email:{
    lineHeight:16,
    color: colors.text.secondary,
    fontSize: textSize.xSmall
   },
   phoneContaner:{},
   phone:{
        color: colors.text.secondary,
        fontSize: textSize.small
   },
})