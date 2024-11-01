import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'


const TabLayout = () => {
    return (

        <Tabs screenOptions={{ tabBarActiveTintColor: '#06a706'}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Главная',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color} />
                }}
            />
            <Tabs.Screen
                name="invoice"
                options={{
                    title: 'Счета',
                    tabBarIcon: ({ color }) => <FontAwesome size={26} name='credit-card' color={color} />
                }}
            />
            <Tabs.Screen
                name="services"
                options={{
                    title: 'Платежи',
                    tabBarIcon: ({ color }) => <FontAwesome size={26} name='check' color={color} />
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'Инфо',
                    tabBarIcon: ({ color }) => <FontAwesome size={26} name='info' color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabLayout