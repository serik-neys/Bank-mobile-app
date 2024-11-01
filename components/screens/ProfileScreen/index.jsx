
import React from 'react';
import { View, Text } from 'react-native';
import Padding from '../../UI/Padding';
import { useRouter } from 'expo-router';
import Button from '../../UI/Button';
import Header from '../../Header';

const ProfileScreen = ({ }) => {
    // Пример данных профиля
    const userProfile = {
        name: 'Иван Иванов',
        accountNumber: '+7 766 567 5566',
        balance: '150,000 KZT',
        email: 'advnce333@mail.ru'
    };

    const router = useRouter()

    return (
        <>
            <Header title={"Профиль"} />


            <Padding>

                <View>
                    <View className="mx-auto rounded-full bg-gray-300 flex justify-center items-center w-16 h-16">
                        <Text className="font-semibold text-2xl">MS</Text>
                    </View>
                    <Text className="text-center font-semibold mb-2 text-xl">Профиль</Text>
                    <View >
                        <View className="flex flex-row mb-2 p-2 rounded bg-white">
                            <Text className="mr-1 text-lg color-gray-400">Имя:</Text>
                            <Text className="text-lg">{userProfile.name}</Text>
                        </View>

                        <View className="flex flex-row mb-2 p-2 rounded bg-white">
                            <Text className="mr-1 text-lg color-gray-400">Почта:</Text>
                            <Text className="text-lg">{userProfile.email}</Text>
                        </View>

                        <View className="flex flex-row mb-2 p-2 rounded bg-white">
                            <Text className="mr-1 text-lg color-gray-400">Номер телефона:</Text>
                            <Text className=" text-lg">{userProfile.accountNumber}</Text>
                        </View>

                        <View className="flex flex-row mb-2 p-2 rounded bg-white">
                            <Text className="mr-1 text-lg color-gray-400">Баланс:</Text>
                            <Text className="text-lg">{userProfile.balance}</Text>
                        </View>

                    </View>

                    <Button title="Редактировать профиль" style="mb-1" />
                    <Button
                        onPress={() => router.push("signin")}
                        title="Выйти"
                        color="color-white"
                        style={"color-state-100"}
                        bg='bg-red-600'
                        hover='bg-red-700'
                    />



                </View>
            </Padding>
        </>
    );
};

export default ProfileScreen;
