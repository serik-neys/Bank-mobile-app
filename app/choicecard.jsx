import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Button from '../components/UI/Button'
import Padding from '../components/UI/Padding'
import PickCard from '../components/PickCard'

const ChoiceCard = () => {
    return (
        <Padding>
            <Header title={"Открыть карту"} />
           <PickCard/>
        </Padding>
    )
}

export default ChoiceCard