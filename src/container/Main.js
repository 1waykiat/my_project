/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { View, StatusBar, Text } from 'react-native'

const Main = () => {
  return(
    <Agenda
      renderItem={(item, firstItemInDay) => {return( <Text>Hi</Text>)}}
    >
    </Agenda>
)
}
  
  export default Main