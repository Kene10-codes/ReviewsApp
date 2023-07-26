import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

// Components
import Card from '../components/card';
import CustomText from '../components/text';

export default function ReviewDetails({navigation, route}) {
  const {title, body, rating} = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          <CustomText>Title : </CustomText>
          {title}
        </Text>
        <Text style={globalStyles.titleText}>
          <CustomText>Body : </CustomText>{body}
        </Text>
        <Text style={globalStyles.titleText}>
          <CustomText>Rating : </CustomText> {rating}
        </Text>
      </Card>
    </View>
  );
}
