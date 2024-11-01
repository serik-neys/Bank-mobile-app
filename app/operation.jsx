import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons'
import Padding from '../components/UI/Padding'
import AboutOperation from '../components/AboutOperation'

const Operation = () => {
    return (
        <View>
            <Header title={"История операций"} />

            <Padding>
             <AboutOperation/>
            </Padding>
        </View>
    )
}

export default Operation