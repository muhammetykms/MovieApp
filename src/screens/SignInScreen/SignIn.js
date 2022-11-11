import React, {useState} from 'react';
import {TextInput, View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './SignIn.Style';
import Banner from '../../components/BannerImage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

function SignIn({navigation}) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const goHomePage = page => {
    navigation.navigate(page);
  };
  const signIn = () => {
    auth()
      .createUserWithEmailAndPassword(userName, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };
  return (
    <KeyboardAwareScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.container}>
        <Banner />
        <TextInput
          style={styles.userNameInput}
          onChangeText={setUserName}
          value={userName}
          placeholder="E-Mail..."
          keyboardType="default"
          placeholderTextColor={'#1c1c1c'}
        />
        <TextInput
          style={styles.userNameInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Şifre..."
          placeholderTextColor={'#1c1c1c'}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => goHomePage('BottomTab')}>
          <Text style={{color: 'white'}}>Giriş Yap</Text>
        </TouchableOpacity>

        <View style={styles.text_container}>
          <Text style={styles.query_text}>Kayıtlı Değil misin ?</Text>
          <TouchableOpacity
            style={styles.signIn_button}
            onPress={() => goHomePage('SignUp')}>
            <Text style={{color: '#ed7640'}}> Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => goHomePage('ForgotPass')}>
          <Text style={styles.pasForget_text}>Şifre mi unuttum ?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignIn;
