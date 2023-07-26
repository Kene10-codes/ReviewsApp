import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function About () {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>
        Welcome to Reviews Application, where innovation meets simplicity!
      </Text>
    </View>
  );
}
