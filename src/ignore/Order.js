import React, {useState} from 'react'
import { TextInput } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'


const Order = () => {
  const [text, setText] = useState('Nothing Entered')
  const [comment, setComment] = useState('')
  

  return(
    <View style={styles.container}>
      <View style={styles.orderBox} >
        <Text style={styles.text}>{ text } </Text>
      </View>
      <Button title="Chicken" onPress={() => setText('Chicken')} />
      <View style={styles.space} />
      <Button title="Beef" onPress={() => setText('Beef')} />
      <View style={styles.space} />
      <Button title="Fish" onPress={() => setText('Fish')} />
      <TextInput
        style={styles.textInput}
        placeholder="Comments?"
        onChangeText={(text) => setComment(text)}
        value={comment}
      />
      <View style={styles.space} />
      <Button title="Clear" onPress={() => setComment('')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    marginBottom: 8,
    width: 200,
    height: 30,
  },
  space: {
    width: 30,
    height: 20
  },
  orderBox: {
    height: 60,
    width: 100,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 18
  },
  button: {
    marginTop: 40
  }

})

export default Order