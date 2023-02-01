import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
                <Image source={require('./imagens/02.png')} />
            </View>

            <TextInput placeholder="Informe um valor" style={estilos.input} onChangeText={setValor} />

            <TouchableOpacity style={estilos.botao} onPress={calcular}>
                <Text style={estilos.txtBotao}>Enviar</Text>
            </TouchableOpacity>

            <ScrollView>

                {tabuada.map((resultado, indice) => {
                    return(<Text style={estilos.tabuada} key={indice}>{resultado}</Text>);
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
        marginBottom:20
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