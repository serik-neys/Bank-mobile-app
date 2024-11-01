import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesome } from '@expo/vector-icons'
import ButtonLink from '../components/UI/ButtonLink'

const BankCard = () => {
  return (
    <>
      <View className="bg-green-800 pb-8">
        <Header title={"Карта Банка"} textStyle={"color-white"} colorIcon={"white"} />
        <Text className="color-gray-300 text-sm text-center mb-1">Общий баланс</Text>
        <Text className="color-white text-3xl font-bold text-center mb-3">345,00 ₸</Text>

        <View className="bg-green-700 rounded-lg py-5 px-5 mx-7">
          <Text className="color-white text-2xl font-bold mb-3">Streamer Card</Text>
          <Text className="color-white text-2xl font-semibold mb-3">3456 4567 1209 7845</Text>
          <View className="flex flex-row">
            <View className=" mr-5">
              <Text className="color-white text-xs font-normal mb-1 uppercase">действует до</Text>
              <Text className="color-white text-base font-bold text-center">09/26</Text>
            </View>
            <View className="mr-auto">
              <Text className="color-white text-xs font-normal mb-1 uppercase">CVC / CVV</Text>
              <Text className="color-white text-base font-bold text-center">678</Text>
            </View>
            <FontAwesome className="mt-auto" name="cc-visa" size={28} color={"white"} />
          </View>
        </View>
      </View>

      <View>

        <View className="flex justify-around flex-row p-5 gap-3">
          <ButtonLink
            bg='bg-white'
            color="color-green-500"
            hover={"bg-slate-300"}
            style={"p-4"}
            href="topupcard"
          >Пополнить</ButtonLink>
          <ButtonLink
            bg='bg-white'
            color="color-green-500"
            hover={"bg-slate-300"}
            style={"p-4"}
            href="cardtransfer"
          >Перевести</ButtonLink>
          <ButtonLink
            bg='bg-white'
            color="color-green-500"
            hover={"bg-slate-300"}
            style={"p-4"}
            href="operation"
          >История</ButtonLink>
        </View>
      </View>
    </>

  )
}

export default BankCard