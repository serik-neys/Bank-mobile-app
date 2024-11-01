import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
    
    return (
        <View className="mt-1 py-4 border-b-black border-b-2">
            <TouchableOpacity onPress={toggleOpen} clas>
                <Text className="text-base font-medium">{question}</Text>
            </TouchableOpacity>
            {isOpen && <Text className="mt-1 text-sm">{answer}</Text>}
        </View>
    );
}

export default FaqItem;