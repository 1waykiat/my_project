import React from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'

const TrafficLight = (props) => {
  let count = 0
    return(
    <SafeAreaView style={styles.container} >
      <View style={styles.redBox} />
      <View style={styles.yellowBox} />
      <View style={styles.greenBox} />
      <TouchableOpacity style={styles.button} onPress={() => {
        console.log("I have been pressed " + count + " times!")
        console.log("bye world!")
        count++
        }}>
        <Text>Press Me!</Text>
      </TouchableOpacity>
      <Button title="Press Me" onPress={() => console.log("Other button")} />
    </SafeAreaView>        
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      // arranging the items w.r.t. main axis asserted by flexDirection
      justifyContent: 'space-between',
      // arranging the items w.r.t the alt axis
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    redBox: {
      backgroundColor: 'red',
      height: 50,
      width: 50
    },
    yellowBox: {
      backgroundColor: 'yellow',
      height: 50,
      width: 50
    },
    greenBox: {
      backgroundColor: 'green',
      height: 50,
      width: 50
    },
    button: {
      backgroundColor: 'gray',
      padding: 10
    }

})

export default TrafficLight