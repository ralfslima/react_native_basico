import { ScrollView, StyleSheet, Text } from "react-native";

// Componente
export default function Tabela({dados}){

    // Retornar estrutura do componente
    return(
        <ScrollView>
            {dados.map((obj, indice)=>{
                return(<Text style={estilo.linha} key={indice}>{obj.nome} | {obj.idade}</Text>)
            })}
        </ScrollView>
    )

}

const estilo = StyleSheet.create({
    linha:{
        backgroundColor:'#ccc',
        marginBottom:2
    }
})