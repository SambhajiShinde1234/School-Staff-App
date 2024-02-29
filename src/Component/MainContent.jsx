import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'
import NoticeBoard from './NoticeBoard';
import Attendance from './Attendance';
import UpcomingLecture from './UpconingLecture';
import ClassIncharge from './ClassIncharge'
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
            <ClassIncharge title='Class Incharge'/>
            <ClassIncharge title='Subject Incharge' />
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
   scrollViewContent: {
    backgroundColor: '#F8FDFF',
    minHeight: 870,
   }
  });
  
  export default MainContent;