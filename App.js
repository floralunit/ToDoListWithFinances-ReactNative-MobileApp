import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import ExpensesScreen from './screens/ExpensesScreen';
import AboutScreen from './screens/AboutScreen';
import { initDb } from './db/database';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    initDb();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Items" component={ItemsScreen} />
        <Stack.Screen name="Expenses" component={ExpensesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
