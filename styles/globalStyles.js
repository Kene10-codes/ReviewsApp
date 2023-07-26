import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontFamily: 'nunitosans-semibold',
    fontSize: 18,
    color: '#333',
    paddingTop: 8,
  },
  paragraph: {
    lineHeight: 20,
    marginVertical: 8,
  },
  reviewText: {
    fontFamily: 'nunitosans-semibold',
    fontSize: 18,
    color: 'maroon',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 7,
    padding: 8,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  button: {
    marginVertical: 10,
  },
});
