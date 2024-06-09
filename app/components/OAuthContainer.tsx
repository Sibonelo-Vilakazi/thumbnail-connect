import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type OAuthContainerConfig = {
  iconName: any
}
const OAuthContainer = ({iconName}: OAuthContainerConfig) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={iconName} size={24} color={'black'} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#ECECEC',
        borderRadius: 10
    }
})

export default OAuthContainer;