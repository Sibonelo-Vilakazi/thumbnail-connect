import { View, Text } from 'react-native'
import React from 'react'
import FollowCard from '../../components/FollowCard'

const FollowingView = () => {
  return (
    <View>
      <FollowCard 
        config={{
          fullName: 'BugArray',
          isFollowing: true
        }}
      />
      <FollowCard 
        config={{
          fullName: 'Sibonelo',
          isFollowing: false
        }}
      />
      <FollowCard 
        config={{
          fullName: 'John Doe',
          isFollowing: true
        }}
      />
      <FollowCard 
        config={{
          fullName: 'MarkZ ',
          isFollowing: true
        }}
      />
    </View>
  )
}

export default FollowingView