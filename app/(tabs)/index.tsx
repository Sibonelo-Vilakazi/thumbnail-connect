import { View, Text } from 'react-native';
import React from 'react';
import FeedComponent from '../components/feedComponent';
import { ScrollView } from 'react-native';
const index = () => {

  const configs= [{
    fullName: 'Sibonelo Vilakazi',
    datePosted: 'Yesterday at 10 PM',
    postUserProfile: require('../../assets/profile_1.png'),
    numLikes: 10,
    userProfile: require('../../assets/profile_1.png'),
    feedImage: require('../../assets/postImage.png')
  },
  {
    fullName: 'John Doe',
    datePosted: 'Today at 10 AM',
    postUserProfile: require('../../assets/profile_2.png'),
    numLikes: 2,
    userProfile: require('../../assets/profile_1.png'),
    feedImage: require('../../assets/postIcon.png')
  },
  {
    fullName: 'Nick Ross',
    datePosted: 'Yesterday at 7 PM',
    postUserProfile: require('../../assets/profile_2.png'),
    numLikes: 2,
    userProfile: require('../../assets/profile_1.png'),
    feedImage: require('../../assets/postImage.png')
  },
  {
    fullName: 'Sibonelo Vilakazi',
    datePosted: 'Yesterday at 10 PM',
    postUserProfile: require('../../assets/profile_2.png'),
    numLikes: 2,
    userProfile: require('../../assets/profile_2.png'),
    feedImage: require('../../assets/postIcon.png')
  }
]
  return (
    <ScrollView scrollEnabled={true}>
      {configs.map((config, index) =>{
        return (<FeedComponent key={index} config={config} />)
      })}
      
      
    </ScrollView>
  )
}

export default index