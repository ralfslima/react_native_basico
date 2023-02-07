import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import Painel from './Painel';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={Inicio} />
        <Stack.Screen name="painel" component={Painel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;