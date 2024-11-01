import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

import PickCardItem from './PickCardItem'


const PickCard = () => {

    const cards = [
        {
            id: 1,
            name: "Карта Spark",
            desc: "Молодежная карта с низкими комиссиями и кэшбеком на развлечения и кафе",
            img: require("../../assets/images/bank-2.jpg"),
        },
        {
            id: 2,
            name: "Карта Nova",
            desc: "Карта для повседневных покупок с бонусами на покупки и кэшбеком до 5%.",
            img: require("../../assets/images/bank.jpg"),
        },
        {
            id: 3,
            name: "Карта Stream",
            desc: "Удобная карта для цифровых сервисов и подписок с повышенным кэшбеком на онлайн-платформы.",
            img: require("../../assets/images/bank-3.jpg"),
        },
    ]

    return (
        <SafeAreaView>
                <FlatList
                    data={cards}
                    renderItem={({ item }) => <PickCardItem name={item.name} img={item.img} desc={item.desc} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={<View style={{ height: 150 }} />}
                />
        </SafeAreaView>
    )
}

export default PickCard