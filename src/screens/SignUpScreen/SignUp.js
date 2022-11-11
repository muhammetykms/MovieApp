import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './SignUp.Style';
import auth from '@react-native-firebase/auth';
const SignUp = () => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        value={name}
        placeholderTextColor={'#1c1c1c'}
        placeholder="İsim..."
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setLastName}
        value={lastName}
        placeholderTextColor={'#1c1c1c'}
        placeholder="Soyisim..."
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setMail}
        value={mail}
        placeholderTextColor={'#1c1c1c'}
        placeholder="E-Mail..."
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholderTextColor={'#1c1c1c'}
        placeholder="Şifre..."
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        onChangeText={setConfirmPass}
        value={confirmPass}
        placeholderTextColor={'#1c1c1c'}
        placeholder="Şifre Tekrar..."
        secureTextEntry
      />
      <View>
        <TouchableOpacity style={styles.signUp_button}>
          <Text style={{color: 'white'}}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
