import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    alertContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#ffffff',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    alertTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    alertDescription: {
        fontSize: 14,
        color: '#555',
    },
    alertLocation: {
        fontSize: 14,
        color: '#555',
    },
})