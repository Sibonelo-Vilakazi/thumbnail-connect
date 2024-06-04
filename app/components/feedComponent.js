import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
const feedComponent = ({config}) => {
  return (
    <View style={styles.postContainer}>
        <View style={styles.profileContainer}>
            <Image style={styles.profile} source={config?.postUserProfile ?? ''} />
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{config.fullName}</Text>
            <Text style={styles.datePosted}>{config.datePosted}</Text>
        </View>
        </View>

        <View>
            <Image style={styles.postImage} source={config?.feedImage} />
        </View>

        <View style={styles.reactionComment}>
            <View style={styles.reactionContainer}>
                <View style={styles.iconContainer}>
                    <AntDesign size={24} name='hearto' color={'#4F8096'} />
                </View>

                <View style={styles.iconContainer}>
                    <AntDesign size={24} name='message1' color={'#4F8096'} />
                </View>
                <View style={[styles.iconContainer, {
                    transform: 'rotate(-45deg)'
                }]}>
                    <TextInput.Icon size={24} icon='send-outline' color={'#4F8096'} />
                </View>
            </View>
            <View style={styles.likesContainer}>
                <Text style={styles.likesText}>{config.numLikes} likes</Text>
            </View>

            <View style={styles.commentContainer}>
                <Image style={styles.profile} source={config.userProfile} />
                <View style={styles.commentInputContainer}>
                    <TextInput placeholder='Add a comment' 
                        contentStyle={{
                            //height: 48
                        }}

                        style={{
                            height: 48,
                            backgroundColor: 'white'
                        }}
                        mode='outlined'
                        right={<TextInput.Icon size={24} icon='send-outline' color={'#4F8096'} />}
                    />
                </View>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 10
    },
    profileContainer:{
        display: 'flex',
        columnGap: 8,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    infoContainer: {
        flex: 1
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        color: '#0D171C'
    },
    datePosted: {
        color: '#4F8096',
        fontSize: 14
    },
    postImage: {
        width: '100%',
        height: 260,
        marginBottom: 12
    },
    reactionComment: {
        paddingHorizontal: 16
    },
    reactionContainer: {
        columnGap: 10,
        flexDirection: 'row'
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    likesContainer:{
        marginBottom: 8
    },
    likesText: {
        fontWeight: '500'
    },
    commentContainer:{
        flexDirection: 'row',
        columnGap: 12,
        alignItems: 'center'
    },
    commentInputContainer: {
        flex: 1
    }
});

export default feedComponent;