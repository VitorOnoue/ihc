import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
} from "react-native";

import { style } from "./styles";

export default function Relatos() {
    const [newReport, setNewReport] = useState("");
    const [reports, setReports] = useState([
        { id: '1', content: "Relato sobre tempestade severa próximo ao bairro central." },
        { id: '2', content: "Incêndio controlado em área de floresta." },
    ]);

    const addReport = () => {
        if (newReport.trim()) {
            setReports([...reports, { id: (reports.length + 1).toString(), content: newReport }]);
            setNewReport("");
        }
    };

    return (
        <View style={style.body}>
            <Text style={style.title}>Relatos de Eventos Ambientais</Text>

            <FlatList
                data={reports}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.reportItem}>
                        <Text style={style.reportText}>{item.content}</Text>
                    </View>
                )}
            />

            <TextInput
                style={style.input}
                placeholder="Escreva seu relato aqui..."
                value={newReport}
                onChangeText={setNewReport}
            />

            <TouchableOpacity style={style.button} onPress={addReport}>
                <Text style={style.buttonText}>Enviar Relato</Text>
            </TouchableOpacity>
        </View>
    );
}
