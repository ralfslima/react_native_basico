// Importação de módulos
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

// Componente
export default function Inicio(){

    // Retornar estrutura
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            
            <View style={estilos.formulario}>
                <Image source={require('./imagens/login.png')} style={estilos.imagem} />

                <TextInput style={estilos.input} placeholder="Nome de usuário"              right={<TextInput.Icon icon="account" />} />
                <TextInput style={estilos.input} placeholder="Senha" secureTextEntry={true} right={<TextInput.Icon icon="lock" />}    />
                <Button mode="contained">Logar</Button>
            </View>

        </View>
    );

}

// CSS
const estilos = StyleSheet.create({
    imagem:{
        width: 200,
        height: 200,
        marginBottom: 30
    },
    formulario:{
        alignItems: 'center'
    },
    input:{
        marginBottom: 10,
        width: 250
    }
});