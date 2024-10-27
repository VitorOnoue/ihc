import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const style = StyleSheet.create({
    body:{
        width: screenWidth,
        height: screenHeight,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff',
    },
    title:{
        width: screenWidth,
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderBottomColor:'#f4f4f4',
        borderBottomWidth:2,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
    },
    map:{
        width: screenWidth,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 6,
    },
    image:{
        width:screenWidth * 0.95,
        height:screenWidth * 0.95,
    },
    boxAlerts:{
        width: '90%',
    },
    alertTitleText:{
        fontSize:30,
        fontWeight:'bold',
        textAlign: 'left',
    },
    alert:{
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    alertImage:{
        width:20,
        height:20,
    },
    alertText:{
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    },
    alertDesc:{

    },
    menu:{

    },
    menuItem:{

    },
})