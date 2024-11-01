import { View, Text } from 'react-native'
import React from 'react'
import { ICON_COLOR } from '../../constants/icon'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const Payment = ({ name, icon, fontAwesome = false, href = "" }) => {
  return (
      <View className="w-1/4 flex items-center justify-center mb-4">
         <Link href={href}>
        {fontAwesome ?
          <FontAwesome size={30} name={icon} color={ICON_COLOR} />
          :
          <Ionicons size={35} name={icon} color={ICON_COLOR} />
        }
          </Link>
        <Text className="mt-2 text-sm">{name}</Text>
      </View>
  
  )
}

export default Payment