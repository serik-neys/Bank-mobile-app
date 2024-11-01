import { Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ButtonLink = ({ href = "", style, onPress, bg = "bg-green-500", color = "color-white", children, hover = "black" }) => {

    return (
        <TouchableHighlight className={`${bg} rounded-lg py-2  mb-3 ${style} `} underlayColor={hover}>
            <Link
                className="text-center"
                onPress={onPress}
                href={href}
            >
                <Text className={`${color}`}>{children}</Text>
            </Link>
        </TouchableHighlight>
    )
}

export default ButtonLink