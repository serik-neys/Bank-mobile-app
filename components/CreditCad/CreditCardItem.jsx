import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'


const CreditCardItem = ({ name, icon, pincode, balance }) => {
    return (
        <View className="flex flex-row items-center justify-between px-2 mb-2">
            <Link href={"bankcard"}>
                <View className="flex flex-row items-center">
                    <FontAwesome name={icon} color={"blue"} size={38} />
                    <View className="ml-2">
                        <Text className="font-semibold">{name}</Text>
                        <Text className="text-sm color-gray-400">{pincode}</Text>
                    </View>
                </View>
            </Link>
            <Text className="font-bold text-base">{balance} ₸</Text>
        </View>
    )
}

export default CreditCardItem