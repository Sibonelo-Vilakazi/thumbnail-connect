import { View, Text } from 'react-native'
import React from 'react'
import FollowCard from '../../components/FollowCard';

const FollowersView = () => {
  return (
    <View>
      <FollowCard 
        config={{
          fullName: 'Follower View',
          isFollowing: true
        }}
      />
      <FollowCard 
        config={{
          fullName: 'BugArray',
          isFollowing: false
        }}
      />
      <FollowCard 
        config={{
          fullName: 'BugArray',
          isFollowing: true
        }}
      />
      <FollowCard 
        config={{
          fullName: 'BugArray',
          isFollowing: true
        }}
      />
    </View>
  )
}

export default FollowersView