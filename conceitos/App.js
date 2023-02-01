import { useState } from "react"
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native"
import Atividade01 from "./Atividade01";
import Atividade02 from "./Atividade02";
import Atividade04 from "./Atividade04";
import Atividade06 from "./Atividade06";

// Componente
export default function App(){

  // Criar useState
  const [texto, setTexto] = useState('');

  // Função
  const evento = () =>{
    Alert.alert("Você clicou no botão");
  }

  // Exibir estrutura do componente
  return(
    // <Atividade01 />
    // <Atividade02 />
    // <Atividade04 />
    <Atividade06 />
    // <View>
    //   <Text style={{marginTop:30, fontSize:30, color:'blue', textAlign:'center'}}>{texto}</Text>
    //   <TextInput style={estilos.input} placeholder="Digite algo..." onChangeText={setTexto} />

    //   <Button title="Clique aqui" onPress={evento} />
    // </View>
  )
}

// CSS
const estilos = StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'black',
    borderStyle:'solid',
    margin:10,
    padding:10
  }
})
