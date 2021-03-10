import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";

export default function PAL({navigation,userID,userData,setUserData}){
    const [stunden,setStuden] = useState(["empty","empty","empty","empty","empty","empty"]);
    const change1 = (e)=> setStuden([e.target.value,stunden[1],stunden[2],stunden[3],stunden[4],stunden[5]]);
    const change2 = (e)=> setStuden([stunden[0],e.target.value,stunden[2],stunden[3],stunden[4],stunden[5]]);
    const change3 = (e)=> setStuden([stunden[0],stunden[1],e.target.value,stunden[3],stunden[4],stunden[5]]);
    const change4 = (e)=> setStuden([stunden[0],stunden[1],stunden[2],e.target.value,stunden[4],stunden[5]]);
    const change5 = (e)=> setStuden([stunden[0],stunden[1],stunden[2],stunden[3],e.target.value,stunden[5]]);
    const change6 = (e)=> setStuden([stunden[0],stunden[1],stunden[2],stunden[3],stunden[4],e.target.value]);
    const weiter = ()=>{
        if(stunden.includes("emtpy")||stunden.includes("")){
            navigation.navigate("PAL");
        }else{
            setUserData([userData[0],userData[1],userData[2],userData[3],userData[4],stunden]);
            axios.post(`http://localhost:8080/api/public/fillData?id=${userID}&goal=${userData[0]}&gender=${userData[1]}&weight=${userData[2]}&height=${userData[3]}`,{
                birthday:userData[4],
                stunden:stunden
            })
            .then((res)=>{
                console.log(res.data);
                navigation.navigate("HomePage");
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container} bounces={false}>
            <View style={{marginBottom:10}}>
                <Text style={styles.title}>Physical Activity Level</Text>
                <Text style={{flex:0,width:300,alignItems:"center"}}>
                    Geben Sie an viele Stunden pro Tag sie mit den verschieden Aktivität verbringen. 
                    Zusammen sollte die Summe von allen 24 Stunden.
                </Text>
            </View>
            <View>
                <Text style={styles.describe}>Schlafen</Text>
                <View style={styles.input}>
                    <MaterialCommunityIcons name="sleep" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChange={change1}/>
                </View>
                <Text style={styles.describe}>Nur sitzend oder liegend</Text>  
                <View style={styles.input}>
                    <MaterialCommunityIcons name="chair-rolling" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChange={change2}/>
                </View>
                <Text style={styles.describe}>Sitzend, kaum körperliche Aktivität</Text>
                <View style={styles.input}>
                    <MaterialIcons name="computer" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChange={change3}/>
                </View>
                <Text style={styles.describe}>Überwiegend sitzend, gehend und stehend</Text>
                <View style={styles.input}>
                    <FontAwesome name="book" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric'style={styles.textfields} onChange={change4}/>
                </View> 
                <Text style={styles.describe}>Hauptsächlich stehend und gehend</Text>
                <View style={styles.input}>
                    <FontAwesome5 name="walking" size={20} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChange={change5}/>
                </View>
                <Text style={styles.describe}>Körperlich anstrengende Arbeit</Text>
                <View style={styles.input}>
                    <Ionicons name="football" size={21} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChange={change6}/>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.register} onPress={weiter}>
                    <Text style={styles.whiteText}>Fertigstellen</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

//Styling
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#f5f5f5",        
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:60,
        marginBottom:20,
    },
    input:{
        flex:0,
        flexDirection:"row",
        height:45,
        width:320,
        borderRadius:10,
        backgroundColor:"#dedcdc",
        padding:12,
        marginBottom:10,
    }, 
    textfields:{
        width:200,
        marginLeft:10,
        marginTop:-5,
        height:30,
    },
    greet:{
        margin:5,
        opacity:0.5,
        fontSize:20,
        marginBottom:30,
    },
    register:{
        borderRadius:20,
        backgroundColor:"black",
        height:40,
        padding:12,
        width:320,
        marginTop:5,
        marginBottom:10,
        alignItems:"center",
    },
    btnContainer:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
    },  
    whiteText:{
        color:"white",
    },
    loginContainer:{
        flex:1,
        flexDirection:"row",
    },
    login:{
        color:"grey",
    },
    describe:{
        margin:5,
        opacity:0.5,
    }
});