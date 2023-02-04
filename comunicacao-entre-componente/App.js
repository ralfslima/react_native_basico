import { useState } from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import Formulario from "./Formulario";
import Tabela from "./Tabela";

// Exportar componente
export default function App(){

  // UseState
  const [nome,  setNome]  = useState('');
  const [idade, setIdade] = useState('');
  const [vetor, setVetor] = useState([]);

  // Função de cadastro
  const cadastrar = () => {
    // Objeto
    let obj = {
      'nome':nome,
      'idade':idade
    }
    
    // Adicionar objeto no vetor
    setVetor([...vetor, obj]);

    // Mensagem
    Alert.alert('Cliente cadastrado com sucesso!');

    // Limpar useStates
    setNome('');
    setIdade('');
  }

  // Exibir componente
  return(
    <SafeAreaView>
      <Formulario nome={nome} idade={idade} funcaoNome={setNome} funcaoIdade={setIdade} cadastrar={cadastrar} />
      <Tabela dados={vetor} />
    </SafeAreaView>
  )

}