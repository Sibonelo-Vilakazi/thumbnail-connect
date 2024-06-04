import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import CustomTab from '../../components/CustomTab'
import FollowersView from './followersview'
import FollowingView from './followingview'
import { Title } from 'react-native-paper'
import { Stack } from 'expo-router/stack'
import { useLocalSearchParams } from 'expo-router/build'

const FollowersDetails = () => {
    const params = useLocalSearchParams()

    useEffect(() => {
        console.log(params)
        
    }, [])
  return (
    
    <View style={styles.container}>
        <Stack.Screen options={{title: 'Friends'}} />
        <CustomTab currentIndex={params.details ==='followers' ? 0 : 1} tabs={[{label: 'Followers' ,content: <FollowersView />},
        {label: 'Following' , content: <FollowingView />}
        
    ]} 
    renderContent={(content) => <View>{content}</View>}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    }
})

export default FollowersDetails