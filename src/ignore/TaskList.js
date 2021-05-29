import React from 'react'
// import { View } from 'react-native'
import { StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native'
// import { Button } from 'react-native-elements/dist/buttons/Button'

//List of data to be placed into scrollable
const TASKS = [
  {
    id: '1',
    name: 'Study for CS2030S'
  },
  {
    id: '2',
    name: 'Workout'
  },
  {
    id: '3',
    name: 'Complete PS7'
  },
  {
    id: '4',
    name: 'Lab 6'
  },
  {
    id: '5',
    name: 'Dinner'
  },
  {
    id: '6',
    name: 'Lunch'
  },
  {
    id: '7',
    name: 'Exams or smth'
  }
]


//eslint-disable-next-line react/prop-types
const Task = ({title}) => (
  <TouchableOpacity style={styles.item} onPress={() => console.log(title)}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

const TaskList = () => {
  return (
    <FlatList
      data={TASKS}
      renderItem={({item}) => <Task title={item.name} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    padding: 20,
    marginVertical: 30,
    marginHorizontal: 12
  },
  title: {
    fontSize: 30
  }
})

export default TaskList