import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import OperationItem from './AboutOperationItem'

const AboutOperation = () => {

    const operations = [
        { id: 1, user: "Сергей Д.", sum: "- 400 ₸", transactionType: "transfer" },
        { id: 2, user: "Вадим К.", sum: "+ 2 000 ₸", transactionType: "replenishment" },
        { id: 3, user: "Федор П.", sum: "- 4 500 ₸", transactionType: "transfer" },
        { id: 5, user: "Саня Л.", sum: "+ 20 000 ₸", transactionType: "replenishment" },
        { id: 6, user: "Сергей Д.", sum: "- 400 ₸", transactionType: "transfer" },
        { id: 7, user: "Вадим К.", sum: "+ 2 000 ₸", transactionType: "replenishment" },
        { id: 8, user: "Федор П.", sum: "- 4 500 ₸", transactionType: "transfer" },
        { id: 9, user: "Саня Л.", sum: "+ 20 000 ₸", transactionType: "replenishment" },
        { id: 10, user: "Сергей Д.", sum: "- 400 ₸", transactionType: "transfer" },
        { id: 11, user: "Вадим К.", sum: "+ 2 000 ₸", transactionType: "replenishment" },
        { id: 12, user: "Федор П.", sum: "- 4 500 ₸", transactionType: "transfer" },
        { id: 13, user: "Саня Л.", sum: "+ 20 000 ₸", transactionType: "replenishment" }
    ]

    return (
        <SafeAreaView>
            <FlatList
                data={operations}
                renderItem={({ item }) => <OperationItem {...item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 150 }} />}
            />
        </SafeAreaView>
    )
}

export default AboutOperation