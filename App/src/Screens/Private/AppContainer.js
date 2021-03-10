import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screen/HomeScreen";
import Settings from "./Screen/Settings";
import TageBuch from  "./Screen/Tagebuch";

const Tab = createBottomTabNavigator();

export default function AppContainer({userID,credentials}) {
    React.useEffect(()=>{
        console.log(userID);
        console.log(credentials);
    },[]);
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tagebuch" component={TageBuch} />
        <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    );
}