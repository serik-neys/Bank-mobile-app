import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Field from '../../components/UI/Field'
import Padding from '../../components/UI/Padding'
import Button from '../../components/UI/Button'

const CardTransfer = () => {
    return (
        <View>
            <Header title={"Перевод на карту"} />
            <Padding>
                <Field placeholder={"4567 1234 5690 3478"} style={"mb-3"} />
                <Field placeholder={"Сумма первода"} style={"mb-3"}/>
                <Button title={"Перевести"} style={"w-35"} />
            </Padding>
        </View>
    )
}

export default CardTransfer