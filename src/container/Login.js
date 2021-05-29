/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, {useState} from 'react'
import { Text, Button, TextInput } from 'react-native-paper'
import { View, StyleSheet, Image, Pressable } from 'react-native'

import colors from '../presentational/colors'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEmailUpdate = (text) => setEmail(text)
  const handlePasswordUpdate = (text) => setPassword(text)

  return(
  <View style={styles.container}>
    <Image style={styles.image} source={require('../../assets/logo.png')} />
    <Text style={styles.title}>Welcome productivity.</Text>
    <TextInput
      mode='outlined'
      style={styles.textInput}
      label= 'Email Address'
      keyboardType='email-address'
      placeholder='e.g. csGods@gmail.com'
      value={email}
      onChangeText={handleEmailUpdate}
      autoCapitalize="none"
      returnKeyType="next"
      onSubmitEditing={() => passwordTextInput.current.focus()}
      blurOnSubmit={false}
      />
    <TextInput
      mode='outlined'
      style={styles.textInput}
      label= 'Password'
      placeholder='e.g. I<3MooByul uwU'
      value={password}
      onChangeText={handlePasswordUpdate}
      autoCapitalize="none"
      right={<TextInput.Icon name={isPasswordVisible ? "eye-off" : "eye"}
        onPress={() => setIsPasswordVisible((state) => !state)} />}
      secureTextEntry={!isPasswordVisible}
      />
    <Button
      style={{marginBottom: 10, borderRadius: 10, width: 350}}
      mode="contained"
      contentStyle={{ paddingVertical: 5 }}
      onPress={() => navigation.push("Main") }>
        Log In
    </Button>
    <Button
      style={{marginBottom: 10, borderRadius: 10, width: 350}}
      mode="contained"
      color='#fdfaf6'
      contentStyle={{ paddingVertical: 5 }}
      onPress={() => navigation.push("SignUp") }>
        Create Account
    </Button>
    <Pressable onPress={() => {}}>
        <Text
        style={styles.forgotPasswordLink} 
        onPress={() => console.log('Forgotten Pw')}>
          Forgot something?</Text>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fde3e4',
  },
  title: {
    alignContent: 'flex-start',
    marginBottom: 10,
    fontSize: 28,
    fontFamily:'sans-serif-condensed'
  },
  image: {
    resizeMode: "contain",
    height: 125,
    width: 600,
  },
  textInput: {
    width: 350,
    marginBottom: 10,
    backgroundColor: '#fdfaf6',
    fontFamily: 'sans-serif-condensed'
  },
  forgotPasswordLink: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    color: colors.secondaryLight
  },
})

export default Login