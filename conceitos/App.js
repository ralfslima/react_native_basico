import { useState } from "react"
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native"
import Atividade01 from "./Atividade01";
import Atividade02 from "./Atividade02";
import Atividade03 from "./Atividade03";
import Atividade04 from "./Atividade04";
import Atividade05 from "./Atividade05";
import Atividade06 from "./Atividade06";
import Atividade07 from "./Atividade07";
import Atividade08 from "./Atividade08";

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
    // <Atividade03 />
    //<Atividade04 />
    // <Atividade05 />
    // <Atividade06 />
    // <Atividade07 />
    <Atividade08 />
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
