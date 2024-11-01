import { View, Text } from 'react-native'
import React from 'react'
import Padding from '../../components/UI/Padding'
import StoryList from '../../components/Story/StoryList'
import CreditCardList from '../../components/CreditCad'

const Invoice = () => {
    return (
        <Padding>
            <StoryList />
            <CreditCardList />
        </Padding>
    )
}

export default Invoice