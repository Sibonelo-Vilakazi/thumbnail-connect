import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const FanCounterComponent = ({counter, description, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.counterContainer}>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center'
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  description: {
    fontSize: 16,
    color: '#4F8096'
  }
})
export default FanCounterComponent