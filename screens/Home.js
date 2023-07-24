import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState ([
    {
      title: 'Order was successful',
      rating: 5,
      body: 'The order I made yesterday was received successfully, thank you so much!',
      key: 1,
    },
    {
      title: 'Missing keyboard button',
      rating: 2,
      body: 'The ALT key, number 3 key and NUM LOCK key are missing in the laptop keyboard',
      key: 2,
    },
    {
      title: 'Appreciation Post',
      rating: 5,
      body: 'Thank you so much, nice product!',
      key: 3,
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate ('Review', item)}
          >
            <Text style={globalStyles.titleText}>{item.key}. {item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}
