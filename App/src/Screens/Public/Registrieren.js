import React,{useEffect,useState} from "react";
import { StyleSheet, Text, View, Button,TextInput } from "react-native";

export default function Registrieren({navigation}){
    return(
        <View>
            <Text>Go Fitness</Text>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Password"/>
            <Button title="Sign Up"/>
        </View>
    )
}