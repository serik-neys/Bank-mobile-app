import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Field from '../../components/UI/Field'
import Padding from '../../components/UI/Padding'
import Button from '../../components/UI/Button'

const Transfer = () => {
    return (
        <View>
            <Header title={"Перевод по номеру"} />
            <Padding>
                <Field placeholder={"Номер телефона"} style={"mb-3"} />
                <Field placeholder={"Сумма первода"} style={"mb-3"}/>
                <Button title={"Перевести"} style={"w-35"} />
            </Padding>
        </View>
    )
}

export default Transfer