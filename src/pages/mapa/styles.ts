import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    body: {
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 2,
        top: 20,
        position: 'absolute',
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    map: {
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapImage: {
        width: screenWidth * 0.95,
        height: screenWidth * 0.95,
    },
    boxAlerts: {
        width: '100%',
    },
    alertTitleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    icon: {
        width: 24,
        height: 24,
        padding: 10,
    },
    menu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    menuItem: {
        alignItems: 'center', // Center text and icon
        paddingHorizontal: 20,
    },
    menuItemText: {
        fontSize: 10,
    },
    locationText: {

    }
})