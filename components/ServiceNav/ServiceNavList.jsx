import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import Payment from '../Payment/Payment'

const ServiceNavList = () => {

  const services = [
    {
      id: 1,
      name: "История",
      icon: "calendar-outline",
      href: "operation"
    },
    {
      id: 2,
      name: "QR",
      icon: "qr-code-outline",
      href: ""
    },
    {
      id: 3,
      name: "Магазин",
      icon: "basket-outline",
      href: "https://kaspi.kz/shop/"
    },
    {
      id: 4,
      name: "Переводы",
      icon: "cash-outline",
      href: "(transfer)"
    },
  ]

  return (
    <View>
      <SafeAreaView>
        <FlatList
          className="flex rounded-lg py-3 px-2 bg-white mt-3"
          data={services}
          renderItem={({ item }) => <Payment name={item.name} icon={item.icon} href={item.href} />}
          keyExtractor={item => item.id}
          numColumns={4}
        />
      </SafeAreaView>
    </View>
  )
}

export default ServiceNavList