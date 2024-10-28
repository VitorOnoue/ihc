import React from "react";

import {
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,

} from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// import { style } from "./styles";

export default function Configs() {
    return (
        <View>
            <Text>lorem ipsum configs</Text>
        </View>
    );
}