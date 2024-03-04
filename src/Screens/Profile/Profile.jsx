import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {PROFILE_DATA} from '../../DummyData/ProfileData'

const Profile = () => {
  return (
    <>
        <Text style={styles.settingText}>Profile</Text>
        <ScrollView 
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
            <View style={styles.imgContainer}>
                <View style={styles.iconHolder}>
                    <Image          
                        style={styles.image}
                        source={require('../../../assets/DannyTeacher.webp')} />
                </View>
                <Text style={styles.name}>Perry Thomas</Text>
            </View>
            {
                PROFILE_DATA.map((item) => {
                    return(
                        <View key={item.id} style={styles.container}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.details}>{item.name}</Text>
                        </View>
                    )
                })
            }
           
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
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        borderColor: '#C0EDFF',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    image: {
        height: 100,
        width: 100,
        resizeMode:'contain',
        borderRadius: 100,
    },
    iconHolder: {
        borderWidth: 10,
        borderColor: '#FFF',
        borderRadius: 100,
        width: 130,
        height: 130,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10
    },
    name: {
        fontSize: 18,
        color: '#313131',
        fontWeight: 'bold'
    },
    title: {
        fontSize: 14,
        color: '#313131',
    },
    details: {
        fontSize: 14,
        color: '#313131',
        fontWeight: 'bold'
    }
});

export default Profile;