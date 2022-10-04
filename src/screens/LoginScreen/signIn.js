import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Banner from '../../components/BannerImage';
import Login from "../../components/LoginPage/login";

const signIn = () => {
    return (
        <View>

            <Banner />
            <Login />
        </View>

    )
}
export default signIn;
