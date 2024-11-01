import { View } from 'react-native'
import React from 'react'


const Padding = ({ children, style}) => {
    return (
        <View className={`pt-3 px-6 ${style}`} >
            {children}
        </View>
    )
}

export default Padding