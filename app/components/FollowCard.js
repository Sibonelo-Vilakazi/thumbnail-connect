import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../global/globalStyles'

const FollowCard = ({config}) => {
  return (
    <View style={styles.container}>
      <Image style={styles} source={require('../../assets/profile_1.png')} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.fullName}>{config.fullName}</Text>
            {config.isFollowing && <Text style={styles.description}>Follows you</Text>}
        </View>

        <TouchableOpacity style={[globalStyles.button, styles.btnExter]}>
            <Text style={styles.btnText}>{config.isFollowing ? 'Unfollow' : 'Follow'} </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '100%',
    },
    image:{
        width: 56,
        height: 56,
        borderRadius: 56/2
    },
    infoContainer: {
        flexDirection: 'row',
        columnGap: 16,
        flex: 1,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    btnExter: {
        width: 100
    },
    btnText: {
        color: 'white',
        
    },
    fullName:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: '#4F8096'
    }
})
export default FollowCard