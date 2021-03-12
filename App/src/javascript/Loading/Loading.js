import React,{ useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Loading() {

    return (
        <View style={styles.container}>
            <View  style={styles.title}>
                <Text style={styles.titleText}>Loading</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#181818"
    },
    makeWhite:{
        color:"#ffffff",
    },
    title:{
        backgroundColor:"#121212",
        fontSize:25,
        fontWeight:"400",
        alignSelf:"center",
        alignSelf:"stretch",
        padding:20,
        marginBottom:20,
    },
    titleText:{
        marginTop:30,
        fontSize:30,
        fontWeight:"700",
        alignSelf:"baseline",
        color:"#ffffff",
    },
});