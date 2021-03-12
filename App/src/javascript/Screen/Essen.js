import React,{ useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,TextInput} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
import {db} from "../firebase";
import {useAuth} from "../AuthProvider";

export default function Essen() {
    //Firebase
    const {currentUser} = useAuth();
    const addFood = (item) =>{
        db.collection("userData").doc(currentUser.uid)
        .get()
        .then((doc)=>{
            if(doc.exists){
                addIt(item,doc.data());
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const addIt = (item,essenData)=>{
        let dat = new Date();
        const year = dat.getFullYear();
        const month = dat.getMonth();
        const day = dat.getDay();
        const datum = year + "-" + month+"-" + day;
        db.collection('userData').doc(currentUser.uid).set({
            essen: [...essenData.essen,{
                name:item.description,
                cal:item.foodNutrients[3].value,
                time:datum,
            }]
        }, { merge: true });
        setFoods([]);
    }
    //Food API
    const [foods,setFoods] = useState([]);
    const [input,setInput] = useState("");
    const searchFood = async () => {  
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=q18XHCe4DoPeJhFVuYWfYjAHpe2a3wXVgkoGljXE&query=${input}&dataType=Survey%20(FNDDS)&pageSize=30`)
        .then((res)=>{
            setFoods(res.data.foods);
            setInput("");
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
                <TextInput placeholder="Nahrungsmittel suchen (English)" style={styles.input} value={input} onChangeText={text => {setInput(text)}}/>
                <TouchableOpacity style={styles.searchBtn} onPress={searchFood}>
                    <Text style={styles.searchBtnTxt}>Suchen</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.essenContainer}>
                {foods.map((food,key)=>(
                    <TouchableOpacity key={key} style={styles.essensEintrag} id={key} onPress={()=>{
                        addFood(food);
                    }}>
                        <Text style={styles.name}>{food.description}</Text>
                        <Text style={styles.calorie}>Calories: {food.foodNutrients[3].value}</Text>
                    </TouchableOpacity>
                ))}
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
    search:{
        flexDirection:"row",
        backgroundColor:"#d6d6d6",
        justifyContent:"space-between",
        alignContent:"center",
        padding:10,
        marginHorizontal:10,
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
    },
    essenContainer:{
        marginTop:20,
        marginHorizontal:10,
        borderRadius:10,
        marginBottom:20,
    },
    essensEintrag:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:8,
        justifyContent:"space-between",
        backgroundColor:"#282828",
        borderRadius:10,
        padding:15,
    },
    name:{
        color:"white",
        maxWidth: 200
    },
    calorie:{
        color:"white",
        fontSize:12,
    }
});