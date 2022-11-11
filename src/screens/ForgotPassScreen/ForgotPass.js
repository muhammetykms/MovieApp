import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './ForgotPass.Style';

const ForgotPass = () => {
  const [mail, setMail] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInput_container}>
        <TextInput
          style={styles.textInput}
          onChangeText={setMail}
          value={mail}
          placeholderTextColor={'#1c1c1c'}
          placeholder="E-Mail..."
        />
        <TouchableOpacity style={styles.signUp_button}>
          <Text style={{color: 'white'}}>Şifre Yenile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ForgotPass;
