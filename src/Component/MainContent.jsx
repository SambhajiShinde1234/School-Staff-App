import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import NoticeBoard from './NoticeBoard';
import Attendance from './Attendance';
import UpcomingLecture from './UpconingLecture';
function MainContent() {
  return (
    <>
        <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
        >
            <NoticeBoard />
            <Attendance />
            <UpcomingLecture />
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
   scrollViewContent: {
    backgroundColor: '#F8FDFF',
    minHeight: 1000
   }
  });
  
  export default MainContent;