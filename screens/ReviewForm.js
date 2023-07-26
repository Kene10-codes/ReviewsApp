import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {Formik} from 'formik';
import * as yup from 'yup';

// Components
import CustomButton from '../components/button';

// Validation Schema
const reviewSchema = yup.object ({
  title: yup.string ().min (4).required (),
  body: yup.string ().required ().min (10),
  rating: yup
    .string ()
    .required ()
    .test ('is-num-1-5', 'Rating value mus be between 1 - 5', val => {
      return parseInt (val) < 6 && parseInt (val) > 0;
    }),
});

export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm ();
          addReview (values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              onChangeText={props.handleChange ('title')}
              placeholder="Review Title"
              value={props.values.title}
              onBlur={props.handleBlur ('title')}
            />
            {props.errors.title
              ? <Text style={globalStyles.errorText}>
                  {props.touched.title && props.errors.title}
                </Text>
              : ''}

            <TextInput
              multiline
              minHeight={70}
              style={globalStyles.input}
              onChangeText={props.handleChange ('body')}
              placeholder="Review Body"
              value={props.values.body}
              onBlur={props.handleBlur ('body')}
            />
            {props.touched.body && props.errors.body
              ? <Text style={globalStyles.errorText}>
                  {props.touched.body && props.errors.body}
                </Text>
              : ''}

            <TextInput
              style={globalStyles.input}
              onChangeText={props.handleChange ('rating')}
              placeholder="Review Rating (1-5)"
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur ('rating')}
            />
            {props.touched.rating && props.errors.rating
              ? <Text style={globalStyles.errorText}>
                  {props.touched.rating && props.errors.rating}
                </Text>
              : ''}

            {/* Submit Custom Button */}
            <CustomButton text="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
