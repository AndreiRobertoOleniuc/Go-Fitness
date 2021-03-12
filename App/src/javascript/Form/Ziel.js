import React,{useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Ziele({navigation,userData,setUserData}){
    const [gewichtAbnahmenStyle,setGewichtAbnehmenStyle] = useState([styles.choice,"rgba(135, 137, 140,0.5)",styles.title,styles.descriptionText]);
    const [gewichtZunehmenStyle,setGewichtZunehmenStyle] = useState([styles.choice,"rgba(135, 137, 140,0.5)",styles.title,styles.descriptionText]);
    const changeToZunehmen = ()=>{
        setGewichtZunehmenStyle([styles.choiceSelected,"#ffffff",styles.titleSelected,styles.descriptionTextSelected]);
        setGewichtAbnehmenStyle([styles.choice,"rgba(135, 137, 140,0.5)",styles.title,styles.descriptionText]);
        setUserData(["zunehmen",userData[1],userData[2],userData[3],userData[4],userData[5]]);
    }
    const changeToAbnehmen = ()=>{
        setGewichtAbnehmenStyle([styles.choiceSelected,"#ffffff",styles.titleSelected,styles.descriptionTextSelected]);
        setGewichtZunehmenStyle([styles.choice,"rgba(135, 137, 140,0.5)",styles.title,styles.descriptionText]);
        setUserData(["abnehmen",userData[1],userData[2],userData[3],userData[4],userData[5]]);
    }
    const weiter = ()=>{
        if(userData[0] == "goal"){
            navigation.navigate('Ziele')
        }else{
            navigation.navigate('Form')
        }
    }
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.frage}>Was ist ihr Ziel mit dieser App</Text>
            </View>
            <View style={styles.choiceContainer}>
                <TouchableOpacity style={gewichtZunehmenStyle[0]} onPress={changeToZunehmen}>
                    <Text style={gewichtZunehmenStyle[2]}>Gewicht zunehmen</Text>
                    <View style={styles.makeRow}>
                        <FontAwesome5 name="plus" size={24} color={gewichtZunehmenStyle[1]} />
                        <MaterialCommunityIcons name="weight-kilogram" size={50} color={gewichtZunehmenStyle[1]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={gewichtAbnahmenStyle[0]} onPress={changeToAbnehmen}>
                    <Text style={gewichtAbnahmenStyle[2]}>Gewicht abnehmen</Text>
                    <View style={styles.makeRow}>
                        <FontAwesome5 name="minus" size={24} color={gewichtAbnahmenStyle[1]} />
                        <MaterialCommunityIcons name="weight-kilogram" size={50} color={gewichtAbnahmenStyle[1]} />
                    </View>
                </TouchableOpacity> 
            </View>
            <TouchableOpacity style={styles.weiter} onPress={weiter}>
                <Text style={{color:"white"}}>Weiterfahren</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"stretch",
        justifyContent:"center",
        backgroundColor:"#f5f5f5",
    },
    choiceContainer:{
        flex:0,
        flexDirection:"row",
        backgroundColor:"#f5f5f5",
        justifyContent:"space-around",
    },
    frage:{
        fontSize:20,
        marginBottom:40,
        fontWeight:"300",
        marginHorizontal:60,
    },
    weiter:{
        backgroundColor:"black",
        marginTop:50,
        marginHorizontal:90,
        borderRadius:20,
        padding:13,
        flex:0,
        alignItems:"center",
        justifyContent:"center",
    },
    makeRow:{
        flex:0,
        flexDirection:"row",
    },  
    choice:{
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
    title:{
        fontSize:18,
        color:"rgb(135, 137, 140)",
        marginBottom:10,
    },
    choiceSelected:{
        flex:0,
        width:180,
        height:300,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleSelected:{
        fontSize:18,
        color:"#ffffff",
        marginBottom:10,
    },
    descriptionTextSelected:{
        color:"#ffffff",
    },
});