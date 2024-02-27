import React from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NOTICE_BOARD_DATA } from '../DummyData/NoticeBoardData';

const Item = ({ title }) => (
  <View style={styles.card}>
    <Text style={styles.noticeTitle}>{title}</Text>
  </View>
);

function NoticeBoard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notice Board</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {NOTICE_BOARD_DATA.map((item) => (
          <Item key={item.id} title={item.title} />
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
    backgroundColor: '#FFE7B9',
    padding: 12,
    marginRight: 10, // Gap between cards
    borderRadius: 5, // Optional: add border radius for rounded corners
    minHeight: 100,
    width: 330
  },
  scrollViewContent: {
    alignItems: 'flex-start', // Align items horizontally at the start of the ScrollView
    paddingTop: 10
},
  noticeTitle: {
    fontSize: 14,
    color: '#313131',
    lineHeight: 20,
    letterSpacing: 0.2
  }
});

export default NoticeBoard;
