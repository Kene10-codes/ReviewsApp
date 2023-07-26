import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create ({
  button: {
    backgroundColor: 'maroon',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
