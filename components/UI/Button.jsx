import { Text, TouchableHighlight } from 'react-native'
import React from 'react'

const Button = ({ title, style, onPress, bg = "bg-yellow-300", color = "", hover = "#caca18" }) => {

    return (
        <TouchableHighlight
            className={`${bg} rounded-lg py-2 ${style}`}
            underlayColor={hover}
            onPress={onPress}
            // style={{ backgroundColor: "#e9e90d" }}
        >
            <Text className={`text-center text-sm font-medium ${color}`}>{title}</Text>
        </TouchableHighlight>
    )
}

export default Button