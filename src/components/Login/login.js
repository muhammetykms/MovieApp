import React, { useState } from "react";
import { SafeAreaView, TextInput, View, ImageBackground, Image, Text, Touchable, TouchableOpacity, ScrollView } from "react-native";
import styles from './login.style';
function login({ navigation }) {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={styles.container}>
            <TextInput style={styles.userNameInput} onChangeText={setUserName} value={userName} placeholder="Kullanıcı adı..." keyboardType="default" placeholderTextColor={'#1c1c1c'} />
            <TextInput style={styles.userNameInput} onChangeText={setPassword} value={password} placeholder="Şifre..." placeholderTextColor={'#1c1c1c'} />
            <TouchableOpacity style={styles.button}  ><Text style={{ color: 'white' }}>Giriş Yap</Text></TouchableOpacity>
            <View style={styles.text_container}>
                <Text style={styles.query_text}>Kayıtlı Değil misin ?</Text>

                <TouchableOpacity style={styles.signIn_button} >
                    <Text style={{ color: '#ed7640' }}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity >
                <Text style={styles.pasForget_text}>Şifre mi unuttum ?</Text>
            </TouchableOpacity>
        </View >
    );
}

export default login;