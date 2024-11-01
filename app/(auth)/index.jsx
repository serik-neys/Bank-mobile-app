import { View, Text } from 'react-native'
import React from 'react'
import Field from '../../components/UI/Field'
import Button from '../../components/UI/Button'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-60 p-5">
        <Text className="text-2xl font-bold text-center mb-3">Авторизация</Text>
        <Field placeholder="Имя" style="mb-3" />
        <Field placeholder="Почта" style="mb-3" />
        <Field placeholder="Пароль" style="mb-3" />
       
        <Button title={"Отправить"} />
        <Link className="text-center mt-2 color-blue-600 " href="/signin">Не создали аккаунт?</Link>
      </View>
    </View>
  )
}

export default SignUp