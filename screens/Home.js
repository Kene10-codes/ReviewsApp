import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
export default function Home () {
  return (
    <View>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  title: {
    fontFamily: 'nunitosans-semibold',
    fontSize: 24,
  },
});