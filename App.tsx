import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IndexNav from './app/Navigation/Index'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IndexNav />
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})