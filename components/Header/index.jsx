import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({title, textStyle, colorIcon}) => {

    const router = useRouter()

    return (
        <Pressable className="mb-3" onPress={() => router.back()}>
            <View className="pt-9 pl-7 flex flex-row items-center">
                <FontAwesome name="arrow-left" size={18} color={colorIcon} />
                <Text className={`ml-6 font-semibold text-xl ${textStyle}`}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default Header