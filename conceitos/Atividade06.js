// Importar módulos
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade06(){

    // UseStates
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);

    // Função calcular
    const calcular = () => {

        // Calcular média
        let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

        // Condicional
        if(media >= 7){
            Alert.alert(`Aprovado com média ${media.toFixed(2)}`)
        }else if(media >= 5){
            Alert.alert(`Em exame com média ${media.toFixed(2)}`)
        }else{
            Alert.alert(`Reprovado com média ${media.toFixed(2)}`)
        }

    }

    // Retornar estrutura gráfica
    return(
        <View style={estilos.conteudo}>
            <View style={estilos.imagem}>
                <Image source={require('./imagens/06.png')} style={estilos.tamanhoImagem} />
            </View>

            <TextInput placeholder="Informe a 1ª nota" style={estilos.input} onChangeText={setNota1} />
            <TextInput placeholder="Informe a 2ª nota" style={estilos.input} onChangeText={setNota2} />
            <TextInput placeholder="Informe a 3ª nota" style={estilos.input} onChangeText={setNota3} />

            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.txtBotao}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )

}

// CSS
const estilos = StyleSheet.create({
    conteudo:{
        backgroundColor:'#e8e8e8',
        flex:1,
        justifyContent:"center"
    },
    imagem:{
        alignItems:'center',
        marginBottom:20
    },
    tamanhoImagem:{
        width:200,
        height:200
    },
    input:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#999999',
        borderStyle:'solid',
        margin:10,
        padding:13
    },
    picker:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#999999',
        borderStyle:'solid',
        margin:10
    },
    botao:{
        borderRadius:5,
        borderWidth:1,
        borderColor:'#130ca6',
        borderStyle:'solid',
        backgroundColor:'#281fd1',
        margin:10,
        padding:13,
    },
    txtBotao:{
        color: '#ffffff',
        textAlign:'center'
    },
    tabuada:{
        backgroundColor:'#ccc',
        padding:10,
        fontSize:16,
        margin:10
    },
    teste:{
        borderRadius:5
    }
});