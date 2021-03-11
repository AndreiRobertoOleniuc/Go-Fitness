import React,{useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";

export default function Essen() {
    const [foods,setFoods] = useState([]);
    const [input,setInput] = useState();
    const searchFood = async () => {  
        console.log(input);
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=q18XHCe4DoPeJhFVuYWfYjAHpe2a3wXVgkoGljXE&query=${input}&dataType=Survey%20(FNDDS)&pageSize=10`)
        .then((res)=>{
            setFoods(res.data.foods);
            console.log(res.data.foods[1].additionalDescriptions);
            console.log(res.data.foods[1].foodNutrients[3].value);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <View style={styles.container}>
            <View  style={styles.title}>
                <Text style={styles.titleText}>GoFitME</Text>
            </View>
            <View style={styles.search}>
                <FontAwesome name="search" size={24} color="black" />
                <TextInput placeholder="Nahrungsmittel suchen (English)" style={styles.input} onChangeText={text => console.log(text)}/>
                <TouchableOpacity style={styles.searchBtn} onPress={searchFood}>
                    <Text style={styles.searchBtnTxt}>Suchen</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.essenContainer}>
                
            </ScrollView>
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
        marginTop:30,
        fontSize:25,
        fontWeight:"400",
        alignSelf:"center",
        alignSelf:"stretch",
        padding:20,
        marginBottom:20,
    },
    titleText:{
        fontSize:30,
        fontWeight:"700",
        alignSelf:"baseline",
        color:"#ffffff",
    },
    search:{
        flexDirection:"row",
        backgroundColor:"#b3b3b3",
        justifyContent:"space-between",
        alignContent:"center",
        padding:10,
        marginHorizontal:20,
        borderRadius:10,
    },
    searchBtn:{
        backgroundColor:"#007aff",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
    },  
    searchBtnTxt:{
        color:"#ffffff",
    }
});