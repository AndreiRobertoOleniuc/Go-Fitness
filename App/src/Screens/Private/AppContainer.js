import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screen/HomeScreen";
import Settings from "./Screen/Settings";
import TageBuch from  "./Screen/Essen";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppContainer({userID,credentials}) {
    return (
    <Tab.Navigator
        inactiveColor="#404040"
        activeBackgroundColor="#282828"
        inactiveBackgroundColor="#282828"
        style={{ backgroundColor: '#282828' }}
        tabBarOptions={{
        style:{
            backgroundColor: '#282828'
        }
        }}>
        <Tab.Screen 
            name="HomeScreen"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
            component={HomeScreen} 
        />
        <Tab.Screen 
            name="Essen" 
            options={{
            tabBarLabel: 'Essen',
            tabBarIcon: ({ color }) => (
                <Ionicons name="fast-food" size={24} color={color} />
            ),}}
            component={TageBuch} 
        />
        <Tab.Screen 
            name="Settings" 
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="settings" size={24} color={color} />
            ),}}
            component={Settings} />
    </Tab.Navigator>
    );
}