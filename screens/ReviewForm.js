import React from 'react';
import {View, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {Formik} from 'formik';

export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
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
            />

            <TextInput
              multiline
              style={globalStyles.input}
              onChangeText={props.handleChange ('body')}
              placeholder="Review Body"
              value={props.values.body}
            />

            <TextInput
              style={globalStyles.input}
              onChangeText={props.handleChange ('rating')}
              placeholder="Review Rating (1-5)"
              value={props.values.rating}
              keyboardType="numeric"
            />
            <View style={globalStyles.button}>
              <Button
                title="submit"
                onPress={props.handleSubmit}
                color="maroon"
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
