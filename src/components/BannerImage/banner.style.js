import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    image: {
        width: width,
        height: height * 0.60,
        borderBottomLeftRadius: 300,

    },
})