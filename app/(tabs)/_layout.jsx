import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
             <Tabs.Screen
                name="services"
                options={{
                    title: 'Services',
                }}
            />
        </Tabs>
    )
}

export default TabLayout