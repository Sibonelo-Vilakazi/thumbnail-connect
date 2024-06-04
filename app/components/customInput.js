import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react'

const CustomInput = ({placeholder, isSecure}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} style={styles.textInput} 
        secureTextEntry={isSecure}
      placeholderTextColor={'#626262'}  />
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        height: 64,
        width: '100%',
        backgroundColor: '#F1F4FF',
        borderWidth: 1,
        borderColor: '#1F41BB',
        borderRadius: 10,
        paddingLeft: 20
    }
})

export default CustomInput;