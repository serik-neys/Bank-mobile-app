import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import StoryItem from './StoryItem'

const StoryList = () => {

  const stories = [
    { id: 1, source: require('../../assets/images/1.jpg') },
    { id: 2, source: require('../../assets/images/2.jpg') },
    { id: 3, source: require('../../assets/images/3.jpg') },
    { id: 4, source: require('../../assets/images/1.jpg') },
    { id: 5, source: require('../../assets/images/2.jpg') }
  ]

  return (
    <View className="my-4 flex">

      <SafeAreaView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={stories}
          renderItem={({ item }) => <StoryItem source={item.source} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  )
}

export default StoryList