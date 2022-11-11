import {StyleSheet, Dimensions} from 'react-native';
import Constants from '../../Constants';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  trending_people_container: {
    margin: 10,
  },
  trending_people_name: {
    width: 60,
    color: Constants.baseColor,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  trending_people_image: {
    height: 70,
    width: 70,
    borderRadius: 500,
  },
  heading: {
    fontSize: 19,
    color: Constants.fadedColor,
    margin: 10,
  },
});
