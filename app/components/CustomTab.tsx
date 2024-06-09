import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

type CustomTabConfig = {
    tabs: any[],
    renderContent: (content: any) => any,
    currentIndex: number
}
const CustomTab = ({tabs, renderContent, currentIndex}: CustomTabConfig) => {
    useEffect(() => {
        setActiveTabIndex(currentIndex)
    }, [])
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const handleTabPress = (index: number) => {
        setActiveTabIndex(index)
    }
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map((tab, index) => (
            <TouchableOpacity 
            onPress={() => handleTabPress(index)}
            style={[styles.tab, activeTabIndex === index ? styles.activeTab: null]} 
            key={index}>
                <Text style={styles.tabText}>{tab.label}</Text>
            </TouchableOpacity>
        ))}
      </View>
      <View>
        {renderContent(tabs[activeTabIndex].content)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1, 
        backgroundColor: 'white',
        width: '100%'
    },
    tabs: {
        flexDirection: 'row',
        //flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    tab: {
        padding: 10,
        alignItems: 'center',
        width: '50%',
    },
    tabText: {
        color: 'black',
        fontSize: 16
    },
    activeTab: {
        borderBottomColor: '#1F41BB',
        borderBottomWidth: 3
    }
})

export default CustomTab;