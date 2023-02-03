import { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade01(){

    // useState
    const [valor, setValor] = useState(0);

    // Função de concatenação
    const acao = () => {
        // Alert.alert('Boa noite' + nome);
        Alert.alert(`Boa noite ${nome}`);
    }

    // Estrutura do app
    return(
        <SafeAreaView style={estilos.conteudo}>
            
            <View style={estilos.centralizar}>
                <Image source={require('./imagens/03.png')} style={estilos.imagem} />
            </View>

            <TextInput style={estilos.input} placeholder='Informe o valor' onChangeText={setValor} />

            <Text style={estilos.valorConvertido}>U$ {(valor / 5).toFixed(2)}</Text>
        </SafeAreaView>
    )
}

// CSS
const estilos = StyleSheet.create({
    conteudo:{
        flex:1,
        justifyContent:'center'
    },
    centralizar:{
        alignItems:'center'
    },
    imagem:{
        width:200,
        height:200
    },
    input:{
        margin:10,
        padding:10,
        borderStyle:'solid',
        borderColor:'#e8e8e8',
        borderWidth:1
    },
    valorConvertido:{
        textAlign:'center',
        fontWeight:'bold'
    }
});