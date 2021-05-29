/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper'


const SignUp = ( {navigation} ) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleNameUpdate = (text) => setName(text)
  const handleEmailUpdate = (text) => setEmail(text)
  const handlePasswordUpdate = (text) => setPassword(text)
  const handleButtonPress = () => {
    setName('')
    setEmail('')
    setPassword('')
    setIsSignedUp(!isSignedUp)
  }

  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Create an account to store your boards</Text>
      <TextInput
        mode='outlined'
        style={styles.textInput}
        label= 'Name'
        placeholder='e.g. Chris Wong Yun Rui'
        value={name}
        onChangeText={handleNameUpdate}
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwordTextInput.current.focus()}
        blurOnSubmit={false}
      />
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
      placeholder='e.g. Purpl3K1ssSuxxx'
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
        onPress={() => {
          handleButtonPress.apply()
          navigation.push("Main")
        }}>
          Sign Up
      </Button>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fde3e4',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 40,
    marginRight: 215
  },
  subtitle: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 20,
    marginBottom: 10
  },
  textInput: {
    width: 350,
    marginBottom: 10,
    backgroundColor: '#fdfaf6',
    fontFamily: 'sans-serif-condensed'
  },
});

export default SignUp