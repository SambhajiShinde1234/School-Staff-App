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

const Setting = () => {
  return (
    <>
        <Text style={styles.settingText}>Settings</Text>
        <ScrollView 
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
        <Text style={styles.heading}>Profile</Text>
        <SettingView leftIconName='person-outline' title='Edit Profile' rightIconName='chevron-forward-outline' />
        <SettingView leftIconName='finger-print-outline' title='Change Password' rightIconName='chevron-forward-outline' />

        <Text style={styles.heading}>Activities</Text>
        <SettingView leftIconName='ribbon-outline' title='School Programs' rightIconName='chevron-forward-outline' />
        <SettingView leftIconName='school-outline' title='College Programs' rightIconName='chevron-forward-outline' />


        <Text style={styles.heading}>Notifications</Text>
        <SettingView leftIconName='notifications-outline' title='Notifications' rightIconName='chevron-forward-outline' />

        <Text style={styles.heading}>Regional</Text>
        <SettingView leftIconName='location-outline' title='Languages' rightIconName='chevron-forward-outline' />
        <SettingView leftIconName='log-out-outline' title='Logout' rightIconName='chevron-forward-outline' />
    </ScrollView>
    </>
   
  )
}

const styles = StyleSheet.create({
    settingText: {
        color: '#FFF',
        fontSize: 25,
        letterSpacing: 0.2,
        fontWeight: 'bold',
        backgroundColor: '#194569',
        padding: 10,
           
        
    },
    heading: {
        fontSize: 18,
        lineHeight: 19,
        marginBottom: 15,
        fontWeight: 'bold'
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
        padding: 7,
        borderRadius: 50
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#313131',
    }
});

export default Setting