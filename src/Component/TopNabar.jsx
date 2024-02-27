import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
function TopNavbar() {
  return (
    <>
        <View>
                 <View style={styles.headerBlock} >
                    <View style={styles.logoTextBlock}>
                        <Image style={styles.logo}
                            source={require('../../assets/logo.png')}
                        />
                        <Text style={styles.schoolName}>
                            Demo Public School
                        </Text>
                    </View>
                    <View>
                        <Image style={styles.notifiactionIcon}
                            source={require('../../assets/notification.png')}
                        />
                    </View>
                </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    text: {
      color: 'red',
      fontSize: 10,
    },
    logoTextBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    headerBlock: {
        backgroundColor: '#194569',
        padding: 7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 58,
        height: 53,
    },
    schoolName: {
        lineHeight: 24,
        color: '#FFF',
        fontSize: 20,
    },
    notifiactionIcon: {
        width: 32,
        height: 32,
    },
  });
  
  export default TopNavbar;