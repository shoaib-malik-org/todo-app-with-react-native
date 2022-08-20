import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Add_note } from './screens/add-note';
import { Provider } from 'react-redux';
import { store } from './redux/store';


// for multiple pages in app
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Todo List" component={Home} /*options={{ headerShown: false }}*/ />
          <Stack.Screen name="Add Task" component={Add_note} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}