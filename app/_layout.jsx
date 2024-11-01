import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "../global.css";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="choicecard" />
      <Stack.Screen name="bankcard" />
      <Stack.Screen name="operation" />
      <Stack.Screen name="topupcard" />
    </Stack>
  )
}

export default Layout