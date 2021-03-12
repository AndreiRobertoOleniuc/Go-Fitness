import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  
import {useAuth} from "../AuthProvider";
import {db} from "../firebase";

export default function PAL({navigation,userData,setUserData}){
    const [stunden,setStuden] = useState(["empty","empty","empty","empty","empty","empty"]);
    const { currentUser } = useAuth();
    const weiter = ()=>{
        if(stunden.includes("emtpy")||stunden.includes("")){
            navigation.navigate("PAL");
        }else{
            setUserData([userData[0],userData[1],userData[2],userData[3],userData[4],stunden]);
            navigation.navigate("HomePage");
            db.collection("userData").doc(currentUser.uid).set({
                userData: userData,
                calories:getCal(),
                essen:[],
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        }
    }
    const getCal = ()=>{
        let base;
        let pal;
        if(userData[1]){
            base = 66.47 + (13.7 * userData[2]) + (5 * userData[3]) - (6.8 * Age(userData[4]));
        }else{
            base = 655.1 + (9.6 * userData[2]) + (1.8 * userData[3]) - (4.7 * Age(userData[4]));
        }
        pal = ((stunden[0] * 0.95) + (stunden[1]* 1.2) + (stunden[2] * 1.45) + (stunden[3] * 1.65) + (stunden[4] * 1.85) + (stunden[5] * 2.2)) / 24;
        if(userData[0]="zunehmen"){
            return base * pal + 400;
        }else{
            return base * pal - 550;
        }
    }
    function Age(inputAge) {
        while(inputAge.includes(".")){
            inputAge = inputAge.replace(".","-");
        }
        const birthday = new Date(inputAge);
        const today = new Date();
        const one_year = 1000 * 60 * 60 * 24 * 365;
        return Math.floor((today.getTime() - birthday.getTime()) / one_year);
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
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChangeText={text=>setStuden([text,stunden[1],stunden[2],stunden[3],stunden[4],stunden[5]])}/>
                </View>
                <Text style={styles.describe}>Nur sitzend oder liegend</Text>  
                <View style={styles.input}>
                    <MaterialCommunityIcons name="chair-rolling" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChangeText={text=>setStuden([stunden[0],text,stunden[2],stunden[3],stunden[4],stunden[5]])}/>
                </View>
                <Text style={styles.describe}>Sitzend, kaum körperliche Aktivität</Text>
                <View style={styles.input}>
                    <MaterialIcons name="computer" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChangeText={text=>setStuden([stunden[0],stunden[1],text,stunden[3],stunden[4],stunden[5]])}/>
                </View>
                <Text style={styles.describe}>Überwiegend sitzend, gehend und stehend</Text>
                <View style={styles.input}>
                    <FontAwesome name="book" size={22} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric'style={styles.textfields} onChangeText={text=>setStuden([stunden[0],stunden[1],stunden[2],text,stunden[4],stunden[5]])}/>
                </View> 
                <Text style={styles.describe}>Hauptsächlich stehend und gehend</Text>
                <View style={styles.input}>
                    <FontAwesome5 name="walking" size={20} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChangeText={text=>setStuden([stunden[0],stunden[1],stunden[2],stunden[3],text,stunden[5]])}/>
                </View>
                <Text style={styles.describe}>Körperlich anstrengende Arbeit</Text>
                <View style={styles.input}>
                    <Ionicons name="football" size={21} color="black" />
                    <TextInput placeholder="Stunden" keyboardType='numeric' style={styles.textfields} onChangeText={text=>setStuden([stunden[0],stunden[1],stunden[2],stunden[3],stunden[4],text])}/>
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


/*
if(stunden.includes("emtpy")||stunden.includes("")){
            navigation.navigate("PAL");
        }else{
            setUserData([userData[0],userData[1],userData[2],userData[3],userData[4],stunden]);
            axios.post(`http://localhost:8080/api/public/fillData?id=${userID}&goal=${userData[0]}&gender=${userData[1]}&weight=${userData[2]}&height=${userData[3]}`,{
                birthday:userData[4],
                stunden:stunden
            })
            .then((res)=>{
                navigation.navigate("HomePage");
            })
            .catch((err)=>{
                console.log(err);
            })
        }

*/