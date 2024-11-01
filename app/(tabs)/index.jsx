import { View, Text } from 'react-native'
import React from 'react'
import Padding from '../../components/UI/Padding'
import Avatar from '../../components/Avatar'
import ServiceNavList from '../../components/ServiceNav/ServiceNavList'
import StoryList from '../../components/Story/StoryList'

const Home = () => {
  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

  return (
    <>
      <Padding>
        <Avatar />
        <StoryList />
      </Padding>

      <ServiceNavList />

      <Padding>
        <Text className="text-lg mb-3">
          Курсы валют
        </Text>
        <View className="flex flex-row flex-wrap gap-3">


          <View className="p-3 rounded-md bg-white">
            <Text className="text-lg">$ 488.0 - 493.0</Text>
          </View>

          <View className="p-3 rounded-md bg-white">
            <Text className="text-lg">€ 528.43 - 530.55</Text>
          </View>

          <View className="p-3 rounded-md bg-white">
            <Text className="text-lg">₽ 5.07 - 5.89</Text>
          </View>

          <View className="p-3 rounded-md bg-white">
            <Text className="text-lg">¥ 68.59 -  63.45</Text>
          </View>

          <View className="p-3 rounded-md bg-white">
            <Text className="text-lg">£  631.68 -  590.00</Text>
          </View>


          <View className="p-3 rounded-md bg-white">
            <Text className="text-lg">₣ 561.10 - 545.33</Text>
          </View>


        </View>
      </Padding>
    </>
  )
}

export default Home