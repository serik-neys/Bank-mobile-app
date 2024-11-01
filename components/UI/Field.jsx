import { TextInput } from 'react-native'
import React from 'react'

const Field = ({ style, onChangeText, placeholder, value }) => {

    return (
        <>
            <TextInput
            
               className={`bg-white py-2 px-4 rounded-lg ${style}`}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}

            />
        </>
    )
}

export default Field