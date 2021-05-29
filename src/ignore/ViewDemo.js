import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ViewDemo = (props) => {
    const {children, containerWidth} = props 
    return(
    <View style={[styles.container, containerWidth]} >
        <View style={styles.redBox}>
          <Text>{children}</Text>
        </View>
        <View style={styles.blueBox} />
        <Text>{children}</Text>
    </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
    },
    redBox: {
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    blueBox: {
        backgroundColor: 'blue',
        height: 50,
        width: 50
    }

})

export default ViewDemo