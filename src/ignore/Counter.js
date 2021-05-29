import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return(
    <View style={styles.container}>
      <Text>{"Counter: " + count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
      <TextInput style={{width: 200}} value={name} onChangeText={(text) => setName(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Counter