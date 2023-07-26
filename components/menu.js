import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Menu({title, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.menuContent}>
        <MaterialIcons name="menu" size={18} color={'#fff'} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create ({
  menuContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
