import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  userNameInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    color: 'black',
  },
  button: {
    color: 'white',
    backgroundColor: '#ed7640',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    height: 40,
    borderRadius: 30,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignSelf: 'center',
  },
  query_text: {
    color: 'white',
    marginLeft: 90,
  },
  signIn_button: {
    color: '#ed7640',
    marginRight: 90,
  },
  pasForget_text: {
    color: '#ed7640',
    alignSelf: 'center',
    marginTop: 10,
  },
});
