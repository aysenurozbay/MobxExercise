import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../utils/colors'
import { metrics } from '../../utils/metrics'
import { marginConsts, paddingConsts, radiusConsts, textSize } from '../../utils/constValues'
import { logo } from '../../utils/images'

const LoginScreen = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = () => {
    console.log(`clicked`)
  }

  return (
    <LinearGradient colors={[colors.pink, colors.background.blue]} style={styles.linearGradient}>
      <View style={styles.loginContainer}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.logoImage} resizeMode='contain' />

          <Text style={styles.descText}> N2Mobil CRM’e Hoş Geldiniz</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}> Kullanici Adi </Text>
          <TextInput style={styles.input} onChangeText={setUsername} value={username} placeholder='Username' placeholderTextColor={colors.text.secondary} />
          <Text style={styles.label}> Kullanici Adi </Text>
          <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder='Password' placeholderTextColor={colors.text.secondary} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Giris Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgetPasswordText}>Sifremi Unuttum</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default LoginScreen

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: colors.background.primary,
    width: metrics.screenWidth - 50,
    height: 450,
    borderRadius: radiusConsts.xLarge,
    padding: paddingConsts.medium,
    justifyContent: 'space-around',
  },
  headerContainer: {
    alignItems: 'center',
  },
  logoImage: {
    height: 50,
  },
  descText: {
    paddingVertical: paddingConsts.small,
  },
  inputContainer: {},
  label: {
    fontSize: textSize.medium,
    color: colors.text.primary,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    marginVertical: marginConsts.small,
    borderRadius: radiusConsts.medium,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingTop: paddingConsts.large,
  },
  loginButton: {
    backgroundColor: colors.blue,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: paddingConsts.medium,
    borderRadius: radiusConsts.huge,
  },
  loginText: {
    fontSize: textSize.normal,
    color: colors.text.white,
    lineHeight: 20,
    fontWeight: '600',
  },
  forgetPasswordText: {
    fontSize: textSize.normal,
    lineHeight: 20,
    fontWeight: '600',
    color: colors.blue,
    alignSelf: 'center',
    paddingVertical: paddingConsts.medium,
  },
})
