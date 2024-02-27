import React from 'react'
import TopNavbar from '../../Component/TopNabar'
import MainContent from '../../Component/MainContent'
import { StatusBar, View } from 'react-native'
function Home() {
  return (
    <>
        <View>
            <StatusBar />
            <TopNavbar />
            <MainContent />
        </View>
    </>
  )
}

export default Home;