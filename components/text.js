import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function CustomText (props) {
  return (
    <Text style={styles.textContent}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create ({
  textContent: {
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'maroon',
  },
});
