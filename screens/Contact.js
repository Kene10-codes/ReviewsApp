import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import CustomText from '../components/text';

export default function Contact () {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>
        <CustomText>Phone:</CustomText> +234******3415
      </Text>
      <Text style={globalStyles.paragraph}>
        <CustomText>Email:</CustomText> tech***@gmail.com
      </Text>
      <Text style={globalStyles.paragraph}>
        <CustomText>Website:</CustomText> ***.com
      </Text>
    </View>
  );
}
