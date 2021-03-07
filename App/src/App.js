import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Public/Login";
import SignUp from "./Screens/Public/Registrieren";
import Form from "./Screens/Public/Form/Form";
import Home from "./Screens/Private/Home";
import Ziel from "./Screens/Public/Form/Ziel";
const Stack = createStackNavigator();

//Icons https://icons.expo.fyi/

/*
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Sign Up" component={SignUp} />
<Stack.Screen name="Form" component={Form} />
<Stack.Screen name="Private" component={Home}/>
*/

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Ziele" component={Ziel}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
} 