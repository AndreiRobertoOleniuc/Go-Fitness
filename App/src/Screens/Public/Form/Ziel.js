import React,{useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Ziele(){
    const [chosen,setChosen] = useState(true);
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.gain}>
                <Text style={{fontSize:18,color:"rgb(135, 137, 140)",marginBottom:10}}>Gewicht abnehmen</Text>
                <View style={styles.makeRow}>
                    <FontAwesome5 name="minus" size={24} color="rgba(135, 137, 140,0.5)" />
                    <MaterialCommunityIcons name="weight-kilogram" size={50} color="rgba(135, 137, 140,0.5)" />
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>Mit diesem Programm verlieren sie gesund Gewicht</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lose}>
                <Text style={{fontSize:18,color:"rgb(135, 137, 140)",marginBottom:10}}>Gewicht zunehmen</Text>
                <View style={styles.makeRow}>
                    <FontAwesome5 name="plus" size={24} color={chosen ? ("rgba(0, 137, 140,1)"):("rgba(135, 137, 140,0.5)")} />
                    <MaterialCommunityIcons name="weight-kilogram" size={50} color="rgba(135, 137, 140,0.5)" />
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>Mit diesem Programm nehmen sie gesund Gewicht zu</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#f5f5f5",
        justifyContent:"space-around",      
    },
    makeRow:{
        flex:0,
        flexDirection:"row",
    },  
    gain:{
        flex:0,
        width:180,
        height:300,
        borderRadius:20,
        borderWidth:3,
        borderColor:"rgba(135, 137, 140,0.5)",
        alignItems:"center",
        justifyContent:"center",
    },
    lose:{
        flex:0,
        width:180,
        height:300,
        borderRadius:20,
        borderWidth:3,
        borderColor:"rgba(135, 137, 140,0.5)",
        alignItems:"center",
        justifyContent:"center",
    },
    description:{
        flex:0,
        justifyContent:"center",
        alignItems: "center",
        margin:12,
    },
    descriptionText:{
        color:"rgb(135, 137, 140)",
    },  
});