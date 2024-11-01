import { View, Text } from 'react-native'
import React from 'react'
import PaymentList from '../../components/Payment/PaymentList'
import StoryList from '../../components/Story/StoryList'
import Padding from '../../components/UI/Padding'

const Services = () => {
  return (
    <>
     <Padding>
     <StoryList />
     </Padding>
     <PaymentList />
    </>
  )
}

export default Services