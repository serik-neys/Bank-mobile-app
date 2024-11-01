import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const AboutOperationItem = ({ user, sum, transactionType }) => {
    return (
        <View className="bg-white rounded-lg p-3 flex flex-row items-center mb-3">

            {transactionType === "transfer" ?
                <View className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-400">
                    <FontAwesome name="user" size={22} color={"white"} />
                </View>
                : <View className="flex justify-center items-center w-12 h-12 rounded-full bg-yellow-500">
                    <FontAwesome name="money" size={22} color={"white"} />
                </View>}



            <View className="ml-2 mr-auto">
                <Text className="font-medium">{user}</Text>
                <Text className="color-gray-400  text-sm">
                    {transactionType === "transfer" ? "Переводы" : "Пополнение"}
                </Text>
            </View>
            <Text
                className={
                    `font-semibold text-lg ${transactionType === "transfer" ? "color-black" : "color-green-600"}`
                }
            >{sum}</Text>
        </View>
    )
}

export default AboutOperationItem