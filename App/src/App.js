import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./javascript/Login";
import SignUp from "./javascript/Registrieren";
import Form from "./javascript/Form/BasicData";
import Container from "./javascript/AppContainer";
import Ziel from "./javascript/Form/Ziel";
import PAL from './javascript/Form/PAL';
import {AuthProvider} from "./javascript/AuthProvider";

const Stack = createStackNavigator();

//Icons https://icons.expo.fyi/

export default function App() {
  const [userData,setUserData] = useState(["goal","gender","weight","height","birthday","stunden"]);
  return (
    <AuthProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" >
            {props => <Login {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Sign Up" >
            {props => <SignUp {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Ziele" >
            {props => <Ziel {...props} userData={userData} setUserData={setUserData}/>}
          </Stack.Screen>
          <Stack.Screen name="Form" >
            {props => <Form {...props} userData={userData} setUserData={setUserData}/>}
          </Stack.Screen>
          <Stack.Screen name="PAL" >
            {props => <PAL {...props} setUserData={setUserData}  userData={userData}/>}
          </Stack.Screen>
          <Stack.Screen name="HomePage" options={{gestureEnabled: false}}  >
            {props => <Container {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
} 