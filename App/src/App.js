import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Public/Login";
import SignUp from "./Screens/Public/Registrieren";
import Form from "./Screens/Public/Form/Form";
import Container from "./Screens/Private/AppContainer";
import Ziel from "./Screens/Public/Form/Ziel";
import PAL from './Screens/Public/Form/PAL';
const Stack = createStackNavigator();

//Icons https://icons.expo.fyi/

export default function App() {
  const [userData,setUserData] = useState({
    goal:null,
    gender:null,
    weight:null,
    height:null,
    birthday:null,
    studen:null
  });
  const [credentials,setCredentials] = useState({});
  const [userID,setUserID] = useState();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" >
            {props => <Login {...props} setUserID={setUserID} setCredentials={setCredentials}/>}
          </Stack.Screen>
          <Stack.Screen name="Sign Up" >
            {props => <SignUp {...props} setUserID={setUserID} setCredentials={setCredentials}/>}
          </Stack.Screen>
          <Stack.Screen name="Ziele" >
            {props => <Ziel {...props} setUserData={setUserData}/>}
          </Stack.Screen>
          <Stack.Screen name="Form" >
            {props => <Form {...props} setUserData={setUserData}/>}
          </Stack.Screen>
          <Stack.Screen name="PAL" >
            {props => <PAL {...props} setUserData={setUserData} userID={userID} userData={userData}/>}
          </Stack.Screen>
          <Stack.Screen name="HomePage">
            {props => <Container {...props} userID={userID} credentials={credentials}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
} 