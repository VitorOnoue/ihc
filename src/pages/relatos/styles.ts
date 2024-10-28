import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    reportItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
        width: screenWidth * 0.9,
    },
    reportText: {
        fontSize: 16,
        color: '#333',
    },
    input: {
        width: screenWidth * 0.9,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginVertical: 10,
    },
    button: {
        width: screenWidth * 0.9,
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
