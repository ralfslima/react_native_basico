import { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade01(){

    // useState
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [valor3, setValor3] = useState(0);

    // Função de concatenação
    const acao = () => {
        
        if(valor1 < valor2 && valor1 < valor3){
            Alert.alert(valor1);
        }else if(valor2 < valor1 && valor2 < valor3){
            Alert.alert(valor2);
        }else{
            Alert.alert(valor3);
        }

    }

    // Estrutura do app
    return(
        <SafeAreaView style={estilos.conteudo}>
            
            <View style={estilos.centralizar}>
                <Image source={require('./imagens/07.png')} style={estilos.imagem} />
            </View>

            <TextInput style={estilos.input} placeholder='Número 1' onChangeText={setValor1} />
            <TextInput style={estilos.input} placeholder='Número 2' onChangeText={setValor2} />
            <TextInput style={estilos.input} placeholder='Número 3' onChangeText={setValor3} />

            <View style={estilos.centralizar}>
                <TouchableOpacity style={estilos.botao} onPress={acao}>
                    <Text style={estilos.txtBotao}>Clique aqui</Text>
                </TouchableOpacity>
            </View>
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
    },
    botao:{
        backgroundColor:'#155413',
        width:200,
        borderRadius:5,
        padding:10
    },
    txtBotao:{
        color:'#fff',
        textAlign:'center'
    }
});