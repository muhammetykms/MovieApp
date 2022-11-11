import {Dimensions, StyleSheet} from 'react-native';
import Constants from '../../Constants';

const height = Dimensions.get('window').height;
export default StyleSheet.create({
  sectionBg: {
    backgroundColor: Constants.baseColor,
    height: height,
  },
  // image: {
  //   width: 200,
  //   height: 200,
  //   borderWidth: 1,
  // },
  image_container: {
    borderRadius: 50,
  },
  // category_text: {
  //   fontWeight: 'bold',
  //   color: 'black',
  //   fontFamily: 'Verdana',
  //   fontSize: 24,
  // },
  // flatList_container: {
  //   margin: 10,
  //   padding: 10,
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   backgroundColor: 'yellow',
  // },
});
