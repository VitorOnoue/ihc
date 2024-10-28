import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { style } from "./styles";

type AlertItemProps = {
    icon: any;
    title: string;
    description: string;
    location: string;
    date: string;
};

const AlertItem: React.FC<AlertItemProps> = ({ icon, title, description, location, date }) => {
    return (
        <View style={style.alertContainer}>
            <Image source={icon} style={style.icon} />
            <View style={style.textContainer}>
                <Text style={style.alertTitle}>{title}</Text>
                <Text style={style.alertDescription}>{description}</Text>
                <Text style={style.alertLocation}>{location}</Text>
                <Text style={style.alertDate}>{date}</Text>
            </View>
        </View>
    );
};

export default AlertItem;