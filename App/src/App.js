import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Axios from "axios";
const Tab = createBottomTabNavigator();
import HomeScreen from "./Components/HomeScreen";
import Essen from "./Components/Essen";
import Training from "./Components/Training";
import Ziele from "./Components/Ziele";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Essen') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen  name="Home">
          {props => <HomeScreen {...props}/>}
        </Tab.Screen>
        <Tab.Screen  name="Essen">
          {props => <Essen {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Training">
          {props => <Training {...props} />}
        </Tab.Screen>
        <Tab.Screen  name="Ziele">
          {props => <Ziele {...props}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
} 