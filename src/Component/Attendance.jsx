import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
 
function Attendance() {
  return (
    <>
        <View style={styles.container}>

          <Text style={styles.heading}>Attendance</Text>
          <View style={styles.figureCard}>

            <View style={styles.innerCard}>
              <View style={styles.graph}>
                <Text style={styles.graphValue}>40</Text>
                <Text style={styles.graphText}>Total Students</Text>
              </View>

              <View style={styles.attendanceBlock}>
                <View style={styles.attendanceFigure}>
                  <Text style={styles.attendanceStatusPresent}></Text>
                  <Text style={styles.attendanceText}>Present</Text>
                  <Text style={styles.attendanceValue}>20</Text>
                </View>

                <View style={styles.attendanceFigure}>
                  <Text style={styles.attendanceStatusAbsent}></Text>
                  <Text style={styles.attendanceText}>Absent</Text>
                  <Text style={styles.attendanceValue}>15</Text>
                </View>

                <View style={styles.attendanceFigure}>
                  <Text style={styles.attendanceStatusLeave}></Text>
                  <Text style={styles.attendanceText}>Leave</Text>
                  <Text style={styles.attendanceValue}>05</Text>
                </View>
              </View>
            </View>
          </View>
         </View>
    </>
  )
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
  figureCard: {
    marginTop: 10,
    minHeight: 155,
    width: 343,
    borderRadius: 5, // Optional: add border radius for rounded corners
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#C0EDFF',
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  innerCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  graph: {
    borderWidth: 10,
    borderRadius: 100,
    width: 120,
    height: 120,
    borderColor: '#22A601',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  graphValue: {
    color: '#313131',
    fontSize: 20,
    fontWeight: 'bold'
  },
  graphText: {
    color: '#7D8B96',
    fontSize: 10,
    fontWeight: 'bold'
  },
  attendanceBlock: {
    width: 120,
    height: 120,
    display: 'flex',
    justifyContent: 'space-between'
  },
  attendanceFigure: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  attendanceStatusPresent: {
    width: 8,
    height: 8,
    backgroundColor: '#22A601',
    borderRadius: 50
  },
  attendanceStatusAbsent: {
    width: 8,
    height: 8,
    backgroundColor: '#FEA63F',
    borderRadius: 50
  },
  attendanceStatusLeave: {
    width: 8,
    height: 8,
    backgroundColor: '#CE0000',
    borderRadius: 50
  },
  attendanceText: {
    color: '#7D8B96',
    fontSize: 15,
  },
  attendanceValue: {
    fontSize: 21,
    color: '#313131'
  }
  });
  
  export default Attendance;