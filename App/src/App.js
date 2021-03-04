import React from 'react';
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Public/Login";
import SignUp from "./Screens/Public/Registrieren";
import Form from "./Screens/Public/Form/Form"
const Stack = createStackNavigator();

//Icons https://icons.expo.fyi/
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sign Up" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
  );
} 