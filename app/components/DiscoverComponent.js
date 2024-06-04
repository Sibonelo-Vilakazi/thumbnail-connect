import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const DiscoverComponent = ({config}) => {
    
  return (
    <View style={styles.discoverContainer}>
      <Image style={styles.profile} source={{ uri: config.image}}/>
      <Text style={styles.username}>{config.fullName}</Text>
      <Text style={styles.mutualFriends}>{config.mutualFriends} mutual friends</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.btnText}>
            Follow
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    discoverContainer: {
        borderRadius: 12,
        borderColor: '#CCCCCC',
        width: Dimensions.get('screen').width / 2.5,
        alignSelf: 'flex-start',
        borderWidth: 0.5,
        alignItems: 'center',
        padding: 16,

    }, 
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 16
    },
    username: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black'
    },
    mutualFriends: {
        color: '#4F8096',
        fontSize: 12
    },
    button: {
        borderRadius: 8,
        paddingVertical: 10,
        backgroundColor: '#1F41BB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    btnText: {
        color: 'white'
    }
})

export default DiscoverComponent