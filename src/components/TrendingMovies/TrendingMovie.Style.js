import {StyleSheet, Dimension, Dimensions} from 'react-native';
import Constants from '../../Constants';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  poster_image: {
    height: 250,
    width: 150,
    borderRadius: 10,
  },
  movie_title: {
    color: Constants.textColor,
    width: 150,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  heading: {
    fontsize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
});
