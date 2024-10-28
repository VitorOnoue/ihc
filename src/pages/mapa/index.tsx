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

import { style } from "./styles";
import Alertas from '../alertas';
import Relatos from '../relatos';
import Configs from '../configs';


const mapImage = require("../../assets/map.png");

const alertsItems = [
    { id: '1', status: require("../../assets/redstatus_icon.png"), title: 'Alerta de Tempestade Severa', text: 'Instruções rápidas:\nProcure abrigo imediatamente.' },
    { id: '2', status: require("../../assets/yellowstatus_icon.png"), title: 'Alerta de Inundação', text: 'Instruções rápidas:\nMova-se para um local mais alto.' },
    { id: '3', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.' },
];

const menuItems = [
    { id: '1', icon: require("../../assets/map_icon.png"), title: 'Mapa', page: 'Mapa' },
    { id: '2', icon: require("../../assets/alert_icon.png"), title: 'Alertas', page: 'Alertas' },
    { id: '3', icon: require("../../assets/report_icon.png"), title: 'Relatos', page: 'Relatos' },
    { id: '4', icon: require("../../assets/settings_icon.png"), title: 'Configurações', page: 'Configs' },
];

export default function Mapa() {
    return (
        <View style={style.body}>
            <View style={style.title}>
                <Text style={style.titleText}>Mapa lorem ipsum</Text>
            </View>

            <View style={style.map}>
                <Image source={mapImage} style={style.mapImage}></Image>
            </View>

            <View style={style.boxAlerts}>
                <Text style={style.alertTitleText}>Alertas recebidos</Text>
                <FlatList
                    data={alertsItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={style.alert}>
                            <Image source={item.status} style={style.icon}></Image>
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
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={[style.menuItem, { width: screenWidth / menuItems.length }]}>
                                <Image source={item.icon} style={style.icon} />
                                <Text style={style.menuItemText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}