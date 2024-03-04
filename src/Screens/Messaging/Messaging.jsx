import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {PROFILE_DATA} from '../../DummyData/ProfileData'

const Messaging = () => {
  return (
    <>
        <Text style={styles.settingText}>Messages</Text>
        <ScrollView 
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          
        
        </ScrollView>
    </>
   
  )
}

const styles = StyleSheet.create({
    settingText: {
        color: '#FFF',
        fontSize: 20,
        letterSpacing: 0.2,
        backgroundColor: '#194569',
        padding: 10,
    },
    scrollViewContent: {
        minHeight: 700,
        paddingTop: 12,
        paddingHorizontal: 10,
        backgroundColor:'#F8FDFF'
    },
});

export default Messaging;