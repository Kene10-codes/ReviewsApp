import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {MaterialIcons} from '@expo/vector-icons';

// Components
import ReviewForm from './ReviewForm';

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState (false);
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

  // Add Review Function
  const addReview = review => {
    review.key = Math.floor ((Math.random () * 6 + 1).toString ());
    setReviews (currentReview => {
      return [review, ...currentReview];
    });
    setModalOpen (false);
  };

  return (
    <ImageBackground
      source={require ('../assets/bg.jpg')}
      style={globalStyles.container}
    >
      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={() => setModalOpen (true)}
      />

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              style={{...styles.modalToggle, ...styles.modalClose}}
              size={24}
              onPress={() => setModalOpen (false)}
            />
          </View>
        </TouchableWithoutFeedback>
        <ReviewForm addReview={addReview} />
      </Modal>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate ('Review', item)}
            style={globalStyles.review}
          >
            <Text style={globalStyles.reviewText}>
              {item.key}. {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create ({
  modalToggle: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginBottom: 10,
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
  },
  modalContent: {
    padding: 5,
  },
});
