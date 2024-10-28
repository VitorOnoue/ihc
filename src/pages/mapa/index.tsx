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

import AlertItem from '../../components/alertItem';

import { style } from "./styles";

const mapImage = require("../../assets/map.png");

const alertsItems = [
    { id: '1', status: require("../../assets/redstatus_icon.png"), title: 'Alerta de Tempestade Severa', text: 'Instruções rápidas:\nProcure abrigo imediatamente.', location: 'Localização: 200m de distância' },
    { id: '2', status: require("../../assets/yellowstatus_icon.png"), title: 'Alerta de Inundação', text: 'Instruções rápidas:\nMova-se para um local mais alto.', location: 'Localização: 500m de distância' },
    { id: '3', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância' },
];

export default function Mapa() {
    return (
        <View style={style.body}>
            <View style={style.map}>
                <Image source={mapImage} style={style.mapImage}></Image>
            </View>

            <View style={style.boxAlerts}>
                <Text style={style.alertTitleText}>Alertas ao seu redor</Text>
                <FlatList
                    data={alertsItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <AlertItem
                            icon={item.status}
                            title={item.title}
                            description={item.text}
                            location={item.location} />
                    )}
                >
                </FlatList>
            </View>
        </View>
    )
}