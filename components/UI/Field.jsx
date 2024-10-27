import { TextInput } from 'react-native'
import React from 'react'

const Field = ({ style = {}, onChangeText, placeholder, value }) => {

    const styles = {
        paddingVertical: 7,
        paddingHorizontal: 15,
        width: 220,
        backgroundColor: "rgb(260, 260, 260)",
        borderRadius: 8,
        ...style
    }

    return (
        <>
            <TextInput
            
                style={styles}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}

            />
        </>
    )
}

export default Field