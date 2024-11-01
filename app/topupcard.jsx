import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Padding from '../components/UI/Padding'
import Field from '../components/UI/Field'
import Button from '../components/UI/Button'

const TopUpCard = () => {
  return (
    <View>
            <Header title={"Пополнить карту"} />
            <Padding>
                <Field placeholder={"4567 1234 5690 3478"} style={"mb-3"} />
                <Field placeholder={"Действует до"} style={"mb-3"} />
                <Field placeholder={"CVC / CVV"} style={"mb-3"} />
                <Field placeholder={"Сумма пополнение"} style={"mb-3"}/>
                <Button title={"Пополнить"} style={"w-35"} />
            </Padding>
        </View>
  )
}

export default TopUpCard