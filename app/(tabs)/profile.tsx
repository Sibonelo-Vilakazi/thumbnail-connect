import { View, Text, ScrollView, StyleSheet, StatusBar, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileHeaderComponent from '../components/ProfileHeaderComponent'
import DiscoverComponent from '../components/DiscoverComponent';
import { useRouter } from 'expo-router';
const profile = () => {
  const [profile, setProfile] = useState(null);
  const [discoverPeople, setDiscoverPeople] = useState([]);
  const [gallery, setGallery] = useState([]);
  const router = useRouter();

  useEffect(() =>{
    const profileData = require('../../assets/mocks/profile.json');
     
     const data = profileData.followers.map((item) => {
      if(item.description === 'followers'){
        item.onPress = () => {
          router.push('screens/followers/followers')
        }
      }else if (item.description === 'following'){
        item.onPress = () => {
          router.push('screens/followers/following')
        }
      }else {
        item.onPress =  () =>{}
      }

      return item 
    });
    profileData.followers = data;

    console.log('PROFILE: DTA ', profileData)

    setProfile(profileData);
    const discoverData = require('../../assets/mocks/discover-people.json');
    setDiscoverPeople(discoverData);

    const galleryData = require('../../assets/mocks/gallery.json');
    
    setGallery(galleryData);
  }, [])
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {profile && <ProfileHeaderComponent config={profile} />}

      {discoverPeople && discoverPeople.length > 0  && 
      <View style={{marginVertical:  10}}>
        <Text style={styles.discoverText}>Discover people</Text>
        <FlatList 
          data={discoverPeople}
          horizontal={true}
          ItemSeparatorComponent={<View style={{width: 10}}></View>}
          renderItem={({item, index}) => 
          <DiscoverComponent key={index} config={item} />}
        />
      </View>
      }

      <View style={styles.galleryContainer}>
        {gallery && gallery.length > 0  && 
        gallery.map((item, index) =>{
          return (
            <Image 
            style={styles.galleryImage}
            key={index} source={{uri: item}} />
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white'
  },
  discoverText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  galleryContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  galleryImage: {
    width: (Dimensions.get('screen').width - 32) / 3,
    height: 100,
    resizeMode: 'cover',
    borderColor: 'black',
    borderWidth: 0.5
  
  }
});

export default profile