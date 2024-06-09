import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FanCounterComponent from './FanCounterComponent';

type ProfileHeaderComponentConfig = {
  onPress: () => any,
  image: string,
  followers: any [],
  username: string,
  bioDescription: string,
  
}
const ProfileHeaderComponent = ({config}: {config: ProfileHeaderComponentConfig}) => {
  console.log('Profile: ', config)
  return (
    <View>
      <View style={styles.profileFollowContainer}>
        <Image source={{uri: config.image}} style={styles.profileImage} />
        <View style={styles.followsContainer}>
          {config.followers && config.followers.length > 0  && 
          config.followers.map((item, index) =>{
            return (
            <FanCounterComponent key={index} onPress={item.onPress} counter={item.counter} 
              description={item.description} />)
          })}
          
        </View>
      </View>

      <View style={styles.infoContainer}>
          <Text style={styles.username}>{config.username}</Text>
          <Text style={styles.bioDescription}>{config.bioDescription}</Text>
      </View>
      <View style={styles.actionContainer}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#1F41BB'}]}>
            <Text style={styles.btnText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#E8F0F2'}]}>
            <Text style={[styles.btnText, {color: 'black'}]}>Message</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  profileFollowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  followsContainer: {
    flexDirection: 'row',
    columnGap: 20
  },
  infoContainer: {
    marginTop: 16,
    rowGap: 4
  },
  username: {
    fontSize: 16,
    fontWeight: '500'
  },
  bioDescription: {
    color: '#4F8096',
    fontSize: 14
  },
  actionContainer: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 16
  },
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 14,
    color: 'white'
  }
})
export default ProfileHeaderComponent;