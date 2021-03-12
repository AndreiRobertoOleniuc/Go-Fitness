import React,{useState,useEffect} from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {db} from "../firebase";
import {useAuth} from "../AuthProvider";
import firebase from "firebase";


export default function HomeScreen({navigation}){
    const {currentUser} = useAuth();
    const [data,setUserData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [abzug,setAbzug] = useState(0);

    let dat = new Date();
    const year = dat.getFullYear();
    const month = dat.getMonth();
    const day = dat.getDay();
    const datum = year + "-" + month+"-" + day;

    useEffect(()=>{
        db.collection("userData").doc(currentUser.uid)
            .onSnapshot((doc)=>{
                let toAdd=0;
                setUserData(doc.data());
                setLoading(false);
                doc.data().essen.map((item)=>{
                    if(item.time===datum){
                        toAdd += item.cal;
                    }
                })
                setAbzug(toAdd);
            })
    },[]);
    const deleteFood = (food)=>{
        console.log(food)
        db.collection("userData").doc(currentUser.uid).update({
            essen: firebase.firestore.FieldValue.arrayRemove(food)
        })
    }
    return(
        <View style={styles.container}>
            {loading?(<Text>Loading</Text>):(
                <View>
                    <View  style={styles.title}>
                        <Text style={styles.titleText}>GoFitME</Text>
                    </View>
                    <View style={styles.calories}>
                        <Text style={styles.caloriesTitle}>Calorien Verbleibend</Text>
                        <View style={{flex:0,flexDirection:"row", justifyContent:"space-around"}}>
                        <View>
                            <Text style={styles.textCal}>{(data == null)?null:data.calories.toFixed(0)}</Text>
                            <Text style={{color:"rgba(224, 227, 222,0.5)",fontSize:15,}}>Ziel</Text>
                        </View>
                        <Text style={styles.textCal}>-</Text>
                        <View>
                            <Text style={styles.textCal}>{abzug}</Text>
                            <Text style={{color:"rgba(224, 227, 222,0.5)",fontSize:15,}}>Gegessen</Text>
                        </View>
                        <Text style={styles.textCal}>=</Text>
                        <View>
                            <Text style={{color:"#3aad23",fontSize:17}}>{(data.calories-abzug).toFixed(0)}</Text>
                            <Text style={{color:"rgba(224, 227, 222,0.5)",fontSize:15,}}>Verbleiben</Text>
                        </View>
                    </View>
                    </View>
                    <Text style={styles.info}>Dein Essen heute</Text>
                    <ScrollView style={styles.essenContainer}>
                        {data.essen.map((item,key)=>{
                            if(item.time===datum){
                                return (  
                                    <View style={styles.essen} key={key}>
                                        <Text style={styles.essenName}>Name: {item.name}</Text>
                                        <Text style={styles.essenInfo}>Calorien: {item.cal}</Text>
                                        <TouchableOpacity style={styles.delete} onPress={()=>{deleteFood(item)}}>
                                            <MaterialIcons name="delete" size={23} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }else{
                                return (null);
                            }
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    )
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
        fontSize:30,
        marginTop:30,
        fontWeight:"700",
        alignSelf:"baseline",
        color:"#ffffff",
    },
    calories:{
        flex:0,
        marginHorizontal:12,
        backgroundColor:"#282828",
        borderRadius:10,
        padding:10,
        marginBottom:20,
    },
    caloriesTitle:{
        fontSize:20,
        fontWeight:"700",
        alignSelf:"baseline",
        color:"#ffffff",
        margin:10,
    },  
    textCal:{
        color:"#ffffff",
        fontSize:15,
    },
    essen:{
        flex:0,
        flexDirection:"row",
        padding:20,
        backgroundColor:"#282828",
        marginHorizontal:12,
        borderRadius:5,
        marginBottom:10,
        justifyContent:"space-between",
    },
    info:{
        fontSize:18,
        fontWeight:"700",
        alignSelf:"baseline",
        color:"#ffffff",
        marginBottom:10,
        marginLeft:18
    }, 
    essenInfo:{
        color:"white",
        fontSize:15,
    },
    essenName:{
        maxWidth:110,
        color:"white",
        fontSize:15,
    },
});
