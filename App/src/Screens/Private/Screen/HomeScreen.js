import React,{useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({navigation,userID,credentials}){
    const [essen,setEssen] = useState([
        {
            name:"Kiwi",
            cal:40
        },
        {
            name:"Apfel",
            cal:100
        },
        {
            name:"Spaghetti",
            cal:500
        },
        {
            name:"Pizza",
            cal:800
        },
        {
            name:"Milch",
            cal:150
        },
        {
            name:"Müsli",
            cal:100
        },
        {
            name:"Bannana",
            cal:90
        },
    ]);
    return(
        <View style={styles.container}>
            <View  style={styles.title}>
                <Text style={styles.titleText}>GoFitME</Text>
            </View>
            <View style={styles.calories}>
                <Text style={styles.caloriesTitle}>Calorien Verbleibend</Text>
                <View style={{flex:0,flexDirection:"row", justifyContent:"space-around"}}>
                    <View>
                        <Text style={styles.textCal}>2555</Text>
                        <Text style={{color:"rgba(224, 227, 222,0.5)",fontSize:15,}}>Ziel</Text>
                    </View>
                    <Text style={styles.textCal}>-</Text>
                    <View>
                        <Text style={styles.textCal}>600</Text>
                        <Text style={{color:"rgba(224, 227, 222,0.5)",fontSize:15,}}>Gegessen</Text>
                    </View>
                    <Text style={styles.textCal}>=</Text>
                    <View>
                        <Text style={{color:"#3aad23",fontSize:17}}>1955</Text>
                        <Text style={{color:"rgba(224, 227, 222,0.5)",fontSize:15,}}>Verbleiben</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.info}>Dein Essen heute</Text>
            <ScrollView style={styles.essenContainer}>
                {essen.map((item,key)=>(  
                    <View style={styles.essen} key={key}>
                        <Text style={styles.essenInfo}>Name: {item.name}</Text>
                        <Text style={styles.essenInfo}>Calorien: {item.cal}</Text>
                        <TouchableOpacity style={styles.delete}>
                            <MaterialIcons name="delete" size={23} color="red" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
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
    }
});