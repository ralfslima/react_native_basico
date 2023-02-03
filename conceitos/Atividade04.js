// Importar módulos
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Componente
export default function Atividade04(){

    // UseStates
    const [valor, setValor] = useState('');
    const [tabuada, setTabuada] = useState([]);

    // Função calcular
    const calcular = () => {

        // Vetor temporário
        let tabuadaTemp = [];

        // Laço
        for(let i = 0; i<11; i++){
            tabuadaTemp.push(i*valor);
        }

        // Envio a tabuadaTemp para o state tabuada
        setTabuada(tabuadaTemp);

    }

    // Retornar estrutura gráfica
    return(
        <View style={estilos.conteudo}>
            <View style={estilos.imagem}>
                <Image source={require('./imagens/04.png')} style={estilos.tamanhoImagem} />
            </View>

            <TextInput placeholder="Informe um valor" style={estilos.input} onChangeText={setValor} />

            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.txtBotao}>Enviar</Text>
            </TouchableOpacity>

            <ScrollView>

                {
                tabuada.map((resultado, indice) => {
                    return(<Text style={estilos.tabuada} key={indice}>{valor} X {indice} = {resultado}</Text>);
                })}

            </ScrollView>
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
        marginBottom:20,
        marginTop:100
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
        marginBottom:30
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