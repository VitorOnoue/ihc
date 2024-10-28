import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mapa from './src/pages/mapa';
import Alertas from './src/pages/alertas';
import Relatos from './src/pages/relatos';
import Configs from './src/pages/configs';

import {
  Image,
} from "react-native";

const Tab = createBottomTabNavigator();

const TabIcon = (icon: any) => {
  return (
    <Image
      source={icon}
      style={{ width: 24, height: 24 }}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mapa" component={Mapa} options={{ tabBarIcon: () => TabIcon(require('./assets/map_icon.png')) }} />
        <Tab.Screen name="Alertas" component={Alertas} options={{ tabBarIcon: () => TabIcon(require('./assets/alert_icon.png')) }} />
        <Tab.Screen name="Relatos" component={Relatos} options={{ tabBarIcon: () => TabIcon(require('./assets/report_icon.png')) }} />
        <Tab.Screen name="Configurações" component={Configs} options={{ tabBarIcon: () => TabIcon(require('./assets/settings_icon.png')) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
