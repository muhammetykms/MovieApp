import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import styles from './banner.style';
const { width, height } = Dimensions.get('window');
const image = { uri: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' };

const banner = () => {
    return (
        <View style={{ backgroundColor: 'black' }}>
            <Image style={styles.image} source={image} />
        </View>
    )
}
export default banner;
