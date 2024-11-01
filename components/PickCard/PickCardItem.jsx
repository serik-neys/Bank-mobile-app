import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../UI/Button'

const PickCardItem = ({name, img, desc}) => {
    return (
        <View className="mb-3 px-4 py-3 bg-white rounded-md">
            <Image className="w-full h-56 mb-2" source={img} resizeMode="cover" />
            <Text className="font-bold text-2xl mb-1">{name}</Text>
            <View className="flex flex-row justify-between">
                <Text className="color-gray-400 w-2/3">{desc}</Text>
                <Button style={"w-20 h-10"} title={"Открыть"} />
            </View>
        </View>
    )
}

export default PickCardItem