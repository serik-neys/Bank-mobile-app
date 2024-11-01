import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import ButtonLink from '../UI/ButtonLink'
import CreditCardItem from './CreditCardItem'
import Button from '../UI/Button'

const CreditCardList = () => {

    const cards = [
        { id: 1, name: "Stream Card", icon: "cc-visa", pincode: "3345", balance: "1 450.00" },
        { id: 2, name: "Flora Card", icon: "cc-mastercard", pincode: "9745", balance: "100 897.00" }
    ]


    return (
        <>
            <View className="bg-white rounded-xl p-3 mb-4">
                <Text className="text-sm color-gray-400 mb-1">Общий баланс</Text>
                <Text className="font-bold text-xl">120 450.00 ₸</Text>
            </View>

            <ButtonLink href={"choicecard"} hover="bg-green-700">Открыть новую карту</ButtonLink>

            <View className="bg-white rounded-xl p-3">
                <Text className="font-semibold mb-2 text-lg">Карты</Text>
                <SafeAreaView>
                    <FlatList
                        data={cards}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CreditCardItem {...item} />}
                    />
                </SafeAreaView>
            </View>

        </>
    )
}

export default CreditCardList