import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/HomeScreen';
import AddAnimalScreen from './src/navigation/AddAnimalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Acceuil" component={HomeScreen} />
        <Stack.Screen name="Formulaire" component={AddAnimalScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

