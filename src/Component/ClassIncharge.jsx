import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Alert, Button } from 'react-native';
import { CLASS_INCHARGE_DATA } from './../DummyData/ClassInchageData'

const Item = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.imageBlock}>
     <View style={styles.imageHolder}>
        <Image 
         style={styles.image}
         source={require('../../assets/techearImage.png')} 
        />
     </View>
        <Text style={styles.name}>{item.name}</Text>
        <Text  style={styles.class}>{item.class}</Text>
    </View>
  </View>
);

function ClassIncharge({title}) {
  return (
    <View style={styles.container}>
        <View style={styles.flex}>
         <Text style={styles.heading}>{title}</Text>
            <TouchableOpacity onPress={ () => alert("All teacher details") }>
                <Text style={styles.heading}>See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.scrollViewContent}
        >
            {CLASS_INCHARGE_DATA.map((item) => (
            <Item key={item.id} item={item} />
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    paddingTop: 10,
  },
  heading: {
    fontSize: 16,
    lineHeight: 19,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#F8FDFF',
    padding: 12,
    marginRight: 10, // Gap between cards
    borderRadius: 5, // Optional: add border radius for rounded corners
    width: 95,
  },
  scrollViewContent: {
    alignItems: 'flex-start', // Align items horizontally at the start of the ScrollView
    paddingTop: 10
  },
  image: {
    height: 44,
    width: 38
  },
  imageBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageHolder: {
    borderWidth: 1,
    borderColor: '#A5D6FF',
    height: 60,
    width: 60,
    borderRadius: 50,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 14,
    color: '#194569',
  },
  class: {
    fontSize: 14,
    color: '#7D8B96'
  }
});

export default ClassIncharge;
