import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function About () {
  return (
    <View>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  title: {
    fontFamily: 'nunitosans-semibold',
    fontSize: 24,
  },
});
