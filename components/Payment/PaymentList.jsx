import { FlatList } from 'react-native'
import React from 'react'
import Payment from './Payment'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'

const PaymentList = () => {

    const payments = [
        {
            id: 1,
            name: "Госуслуги",
            icon: "file-text",
            href: "https://egov.kz/cms/ru"
        },
        {
            id: 2,
            name: "Телефон",
            icon: "mobile",
            href: "https://www.kassa24.kz/telefoniya"
        },
        {
            id: 3,
            name: "Интернет",
            icon: "wifi",
            href: "https://telecom.kz"
        },
        {
            id: 4,
            name: "Такси",
            icon: "taxi",
            href: "https://taxi.yandex.kz/ru_kz/"
        },
        {
            id: 5,
            name: "Образование",
            icon: "book",
            href: "https://mybook.ru/catalog/books/"
        },
        {
            id: 6,
            name: "Еда",
            icon: "delicious",
            href: "https://kaspi.kz/shop/"
        },
        {
            id: 7,
            name: "Покупки",
            icon: "shopping-cart",
            href: "https://kaspi.kz/shop/"
        },
        {
            id: 8,
            name: "Спорт",
            icon: "futbol-o",
            href: "https://sportmaster.kz"
        },
    ]

    return (
        <SafeAreaProvider>
            <SafeAreaView className="flex rounded-lg py-3 px-2 bg-white mt-3 mb-0">
                <FlatList
                    data={payments}
                    renderItem={({ item }) => <Payment fontAwesome={true} {...item} />}
                    keyExtractor={item => item.id}
                    numColumns={4}
                />
            </SafeAreaView>
        </SafeAreaProvider>


    )
}

export default PaymentList