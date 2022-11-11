import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {},
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
    borderWidth: 1,
    padding: 10,
  },
  title_container: {
    margin: 10,
    padding: 10,
  },
  image_container: {},
});
