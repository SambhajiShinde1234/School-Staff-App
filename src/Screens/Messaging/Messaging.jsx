import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SettingView = ({leftIconName, title, rightIconName}) => {
    return(
        <View style={styles.container}>
            <View style={styles.iconHolder}>
                <Ionicons name={leftIconName} size={23} color='black' />
            </View>
            <Text style={styles.titles}>{title}</Text>
            <TouchableOpacity
                onPress={() => alert(title)}
            >
                <Ionicons name={rightIconName} size={23} color='black' />
            </TouchableOpacity>
        </View>
    )
}

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
    heading: {
        fontSize: 16,
        lineHeight: 19,
        marginBottom: 15,
    },
    scrollViewContent: {
        minHeight: 700,
        paddingTop: 12,
        paddingHorizontal: 10,
        backgroundColor:'#F8FDFF'
    },
    iconHolder: {
        borderWidth: 1,
        borderColor: '#A5D6FF',
        borderRadius: 50,
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC672'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 28,
        borderWidth: 1,
        borderColor: '#C0EDFF',
        backgroundColor: '#FFF',
        padding: 3,
        borderRadius: 50
    },
    titles: {
        fontSize: 15,
        color: '#313131',
    }
});

export default Messaging
