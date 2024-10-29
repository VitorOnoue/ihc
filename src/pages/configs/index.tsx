import React, { useState } from "react";

import {
    Text,
    View,
    Switch,

} from "react-native";

import { style } from "./styles";

export default function Configs() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={style.container}>
            <Text style={style.label}>Tema escuro</Text>
            <Switch
                trackColor={{ false: "#757677", true: "#757677" }}
                thumbColor={isEnabled ? "#ffffff" : "#f3f3f3"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}