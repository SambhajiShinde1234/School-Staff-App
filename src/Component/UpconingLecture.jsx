import React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { UPCOMING_LECTURE_DATA } from './../DummyData/UpcomingLectureData'

const Item = ({ item }) => (
  <View style={styles.card}>
    <View style={styles.calendar}>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={styles.subject}>{item.class}</Text>
    </View>
    <Text style={styles.timing}>{item.timing}</Text>
  </View>
);

function UpcomingLecture() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Lectures</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {UPCOMING_LECTURE_DATA.map((item) => (
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
  card: {
    backgroundColor: '#FFF',
    padding: 12,
    marginRight: 10, // Gap between cards
    borderRadius: 5, // Optional: add border radius for rounded corners
    width: 200,
    borderLeftWidth: 8,
    borderLeftColor: '#FF7272',
  },
  scrollViewContent: {
    alignItems: 'flex-start', // Align items horizontally at the start of the ScrollView
    paddingTop: 10
  },
  calendar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginBottom: 3
  },
  subject: {
    fontSize: 16,
    letterSpacing: 0.2,
    color: '#313131',
    lineHeight: 20,
    letterSpacing: 0.2
  },
  timing: {
    fontSize: 16,
    letterSpacing: 0.2,
    color: '#7D8B96',
    lineHeight: 20,
    letterSpacing: 0.2
  }
});

export default UpcomingLecture;
