import React from 'react';
import {
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const Tester = () => {
  return(
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo1.png')} />
      <Image style={styles.title} source={require('../../assets/Title.png')} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 0.3,
    resizeMode: 'contain',
    height: 100,
    width: 200,
    marginBottom: 0,
  },
  title: {
    resizeMode: "contain",
    height: 300,
    width: 300,
    marginBottom: 20,
  },
});

export default Tester