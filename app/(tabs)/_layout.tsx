import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: 'black',
        
    }}>
        <Tabs.Screen name='index'
        options={{
            title: 'Home',
            
            tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} /> 
        }} />

      <Tabs.Screen name='explore' 
              options={{
                  title: 'Explore',
                  tabBarIcon: ({color}) => <FontAwesome size={28} name="search" color={color} /> 
              }} />

      <Tabs.Screen name='post' 
              options={{
                  title: 'Post',
                  tabBarIcon: ({color}) => <FontAwesome size={28} name="plus-square" color={color} /> 
              }} />

      <Tabs.Screen name='profile' 
              options={{
                  title: 'Profile',
                  tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color} /> 
              }} />
    </Tabs>
  )
}

export default _layout