import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('window');

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
    },
    button: {
        marginTop: 10,
        height: 40,
        width: 300,
        color: 'white',
        backgroundColor: '#ed7640',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 45,


    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text_container: {
        flexDirection: 'row',
        marginLeft: 90,

    },
    query_text: {
        marginTop: 15,
        padding: 10,
        color: 'white',

    },
    signIn_button: {
        color: '#ed7640',
        marginTop: 15,
        padding: 10,

    },
    pasForget_text: {
        color: '#ed7640',
        padding: 10,
        marginLeft: 130,

    }
})