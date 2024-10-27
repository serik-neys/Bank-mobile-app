import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

const Button = ({ title, style, onPress }) => {

    const styles = {
        btn: {
            backgroundColor: "rgb(233, 233, 13)",
            width: 220,
            paddingVertical: 8,
            borderRadius: 7,
            ...style
        },
        text: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 500,
        }
    }

    return (
        <TouchableHighlight
            underlayColor={"rgb(210, 210, 13)"}
            onPress={onPress}
            style={styles.btn}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    )
}

export default Button