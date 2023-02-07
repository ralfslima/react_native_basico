import { Button, Text, View } from "react-native";

export default function Inicio({ navigation }){
    return(
        <View>
            <Text>Página inicial</Text>
            <Button title="Painel" onPress={() => navigation.navigate('painel')} />
        </View>
    )
}