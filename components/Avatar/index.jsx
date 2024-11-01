import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Avatar = () => {
    return (
        <Link href={"profile"}>
            <View className="flex flex-row items-center mb-3">
                <View className="rounded-full w-12 h-12 bg-gray-300 flex justify-center items-center">
                    <Text>MS</Text>
                </View>
                <Text className="ml-2 font-semibold text-xl">Профиль</Text>
            </View>
        </Link>
    )
}

export default Avatar