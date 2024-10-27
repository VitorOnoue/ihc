import React from "react";

import {
    Text,
    View,
    Image,
    FlatList,

} from "react-native";

import { style } from "./styles";
const mapImage = require("../../assets/map.png");

const alertsItems = [
    { id: '1', status:require("../../assets/redstatus_icon.png"), title: 'Alerta de Tempestade Severa', text: 'Instruções rápidas: Procure abrigo imediatamente.'},
    { id: '2', status:require("../../assets/yellowstatus_icon.png"), title: 'Alerta de Inundação', text: 'Instruções rápidas: Procure abrigo imediatamente.'},
    { id: '3', status:require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas: Procure abrigo imediatamente.'},
];

const menuItems = [
    { id: '1', icon:require("../../assets/map_icon.png"), title: 'Mapa'},
    { id: '2', icon:require("../../assets/alert_icon.png"), title: 'Alertas'},
    { id: '3', icon:require("../../assets/reports_icon.png"), title: 'Relatos'},
    { id: '4', icon:require("../../assets/settings_icon.png"), title: 'Configurações'},
];

export default function Home() {
    return (
        <View style={style.body}>
            <View style={style.title}>
                <Text style={style.titleText}>Lorem ipsum</Text>
            </View>

            <View style={style.map}>
                <Image source={mapImage} style={style.image}></Image>
            </View>

            <View style={style.boxAlerts}>
                <Text style={style.alertTitleText}>Alertas recebidos</Text>
                <FlatList
                    data={alertsItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={style.alert}>
                            <Image source={item.status} style={style.alertImage}></Image>
                            <Text style={style.alertText}>{item.title}</Text>
                            <Text style={style.alertDesc}>{item.text}</Text>
                        </View>
                    )}
                >
                </FlatList>
            </View>

            <View style={style.menu}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={style.alert}>
                            <Image source={item.icon} style={style.alertImage}></Image>
                            <Text style={style.alertText}>{item.title}</Text>
                        </View>
                    )}
                >
                </FlatList>
            </View>
        </View >
    )
}