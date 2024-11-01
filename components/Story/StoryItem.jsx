import { View, Text, Image } from 'react-native'
import React from 'react'

const StoryItem = ({source}) => {
    return (
        <View className="mr-5 w-24 h-24 rounded-md overflow-hidden bg-black opacity-70">
            <Image className="w-full h-full" source={source} resizeMode="cover" />
        </View>
    )
}

export default StoryItem