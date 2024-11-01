import { View, Text } from 'react-native'
import React from 'react'
import Field from '../../components/UI/Field'
import Button from '../../components/UI/Button'
import { Link, useRouter } from 'expo-router'

const SignIn = () => {

  const router = useRouter()

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-60 p-5">
        <Text className="text-2xl font-bold text-center mb-3">Войти</Text>
        <Field placeholder="Имя" style="mb-3" />
        <Field placeholder="Пароль" style="mb-3" />
        <Button onPress={() => router.push("(tabs)")} title={"Отправить"} />
        <Link className="text-center mt-2 color-blue-600 " href="(auth)">Уже есть аккаунт?</Link>
      </View>
    </View>
  )
}

export default SignIn