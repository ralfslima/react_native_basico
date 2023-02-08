// Importação de módulos
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

// Componente
export default function Inicio(){

    // useState
    const [formularioLoginAtivo, setFormularioLoginAtivo] = useState(true);
    const [nomeCriarConta, setNomeCriarConta] = useState('');
    const [senhaCriarConta, setSenhaCriarConta] = useState('');
    const [vetor, setVetor] = useState([]);

    // Retornar estrutura
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            
            {formularioLoginAtivo === true ?

            <View style={estilos.formulario}>
                <Image source={require('./imagens/login.png')} style={estilos.imagem} />

                <TextInput style={estilos.input} placeholder="Nome de usuário"              right={<TextInput.Icon icon="account" />} />
                <TextInput style={estilos.input} placeholder="Senha" secureTextEntry={true} right={<TextInput.Icon icon="lock" />}    />
                <Button    style={estilos.botaoLogar} mode="contained">Logar</Button>
                <Button    style={estilos.botaoCriarConta} mode="contained" onPress={() => {setFormularioLoginAtivo(false)}}>Criar conta</Button>
            </View>

            : 

            <View style={estilos.formulario}>
                <Image source={require('./imagens/usuario.png')} style={estilos.imagem} />

                <TextInput onChangeText={setNomeCriarConta}  style={estilos.input} placeholder="Nome de usuário"              right={<TextInput.Icon icon="account" />} />
                <TextInput onChangeText={setSenhaCriarConta} style={estilos.input} placeholder="Senha" secureTextEntry={true} right={<TextInput.Icon icon="lock" />}    />
                <Button    onPress={criarConta} style={estilos.botaoCriarConta} mode="contained">Criar conta</Button>
                <Button    style={estilos.botaoCriarConta} mode="contained" onPress={() =>{setFormularioLoginAtivo(true)}} >Voltar</Button>
                
            </View>

            }
            </View>
    );

}

// CSS
const estilos = StyleSheet.create({
    imagem:{
        width: 150,
        height: 150,
        marginBottom: 30
    },
    formulario:{
        alignItems: 'center'
    },
    input:{
        marginBottom: 10,
        width: 250
    },
    botaoLogar:{
        width: 250,
        marginTop: 20
    },
    botaoCriarConta:{
        marginTop: 10,
        width: 250
    }
});