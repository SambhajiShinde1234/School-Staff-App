import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Messaging = () => {
  return (
    <>
        <Text style={styles.settingText}>Messages</Text>
        <View style={styles.container}>
          <Text>
            No Messages
          </Text>
        </View>
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
    container: {
        minHeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Messaging;