import { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade01(){

    // useState
    const [ladoEsquerdo, setLadoEsquerdo] = useState(0);
    const [ladoDireito, setLadoDireito] = useState(0);
    const [ladoInferior, setLadoInferior] = useState(0);

    // Função de concatenação
    const acao = () => {
        
        if(ladoDireito === ladoEsquerdo && ladoEsquerdo === ladoInferior){
            Alert.alert('Equilátero');
        }else if(ladoDireito !== ladoEsquerdo && ladoEsquerdo !== ladoInferior){
            Alert.alert('Escaleno');
        }else{
            Alert.alert('Isósceles');
        }

    }

    // Estrutura do app
    return(
        <SafeAreaView style={estilos.conteudo}>
            
            <View style={estilos.centralizar}>
                <Image source={require('./imagens/05.png')} style={estilos.imagem} />
            </View>

            <TextInput style={estilos.input} placeholder='Direito' onChangeText={setLadoDireito} />
            <TextInput style={estilos.input} placeholder='Esquerdo' onChangeText={setLadoEsquerdo} />
            <TextInput style={estilos.input} placeholder='Inferior' onChangeText={setLadoInferior} />

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