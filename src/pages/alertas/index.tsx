import React from "react";

import {
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,

} from "react-native";

import AlertItem from "../../components/alertItem";

const alertsItems = [
    { id: '1', status: require("../../assets/redstatus_icon.png"), title: 'Alerta de Tempestade Severa', text: 'Instruções rápidas:\nProcure abrigo imediatamente.', location: 'Localização: 200m de distância', data: 'Data: 28/10/2024' },
    { id: '2', status: require("../../assets/yellowstatus_icon.png"), title: 'Alerta de Inundação', text: 'Instruções rápidas:\nMova-se para um local mais alto.', location: 'Localização: 500m de distância', data: 'Data: 28/10/2024' },
    { id: '3', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 28/10/2024' },
    { id: '4', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 18/07/2024' },
    { id: '5', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 14/04/2024' },
    { id: '6', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 08/01/2024' },
    { id: '7', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 22/10/2023' },
    { id: '8', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 12/08/2023' },
    { id: '9', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 29/05/2023' },
    { id: '10', status: require("../../assets/greenstatus_icon.png"), title: 'Aviso de Incêndio', text: 'Instruções rápidas:\nFique alerta e acompanhe notícias locais.', location: 'Localização: 1km de distância', data: 'Data: 17/03/2023' },
];

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// import { style } from "./styles";

export default function Alertas() {
    return (
        <FlatList
            data={alertsItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <AlertItem
                    icon={item.status}
                    title={item.title}
                    description={item.text}
                    location={item.location}
                    date={item.data} />
            )}
        >
        </FlatList>
    );
}