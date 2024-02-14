import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Fontisto } from '@expo/vector-icons'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Fontisto name="day-sunny" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>feelslike 5</Text>
        <View style={styles.highLowWrapper}>
        <Text style={styles.highLow}>High: 8</Text>
        <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
        

      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "pink",
    flex: 1
  },
  container:{
    flex: 1,
    alignItems: 'center'

  },
  temp:{
    color: "black",
    fontSize: 48
  },
  feels:{
    color: "black",
    fontSize: 30
  },
  highLow:{
    color: "black",
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  description:{
    fontSize: 48
  },

  message:{
    fontSize: 30,  }


})

export default App