import React,{useState} from "react";
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Form({navigation,setUserData}){
    const [styleMale,setStyleMale] = useState([styles.maleContainer,"grey"]);
    const [styleFemale,setStyleFemale] = useState([styles.femaleContainer,"grey"]);

    const changeToMale= ()=>{
        setStyleMale([styles.maleContainerSelected,"white"]);
        setStyleFemale([styles.femaleContainer,"grey"]);
        
    }
    const changeToFemale= ()=>{
        setStyleFemale([styles.femaleContainerSelected,"white"]);
        setStyleMale([styles.maleContainer,"grey"]);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Jetzt brauchen wir noch</Text>
            <Text style={{color: 'black',
                fontWeight: '400',
                fontSize: 20,
                marginBottom:40,}}
                >
                Ihre Daten
            </Text>
            <View style={styles.holder}>
                <View style={styles.containerAge}>
                    <MaterialIcons name="date-range" size={24} color="black" />
                    <TextInput placeholder="Geburtsdatum (Format 10.06.2005)" style={styles.input} keyboardType='numeric' />
                </View>
                <View style={styles.containerGender}>
                    <View style={styles.genderSelector}>
                        <TouchableOpacity style={styleMale[0]} onPress={changeToMale}><FontAwesome5 name="male" size={24} color={styleMale[1]}/></TouchableOpacity>
                        <TouchableOpacity style={styleFemale[0]} onPress={changeToFemale}><FontAwesome5 name="female" size={24} color={styleFemale[1]} /></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerWeight}>
                    <FontAwesome5 name="weight" size={24} color="black" />
                    <TextInput placeholder="Gewicht (Kilogramm)" style={styles.input} keyboardType='numeric' />
                </View>
                <View style={styles.containerHeight}>
                    <MaterialCommunityIcons name="human-male-height-variant" size={24} color="black" />
                    <TextInput placeholder="Grösse (CM)" style={styles.input} keyboardType='numeric' />
                </View>
                <TouchableOpacity style={styles.confirm} onPress={() => navigation.navigate('PAL')}>
                    <Text style={{color:"white"}}>Fortfahren</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#f5f5f5",        
    },
    title: {
        color: 'black',
        fontWeight: '400',
        fontSize: 20,
        marginTop:80,
    },
    btn:{
        borderRadius:20,
        backgroundColor:"#f1654c",
        height:40,
        padding:12,
        width:320,
        marginTop:10,
        marginBottom:10,
        alignItems:"center",
    },  
    holder:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        width:320,
        marginBottom:30,
        borderRadius:20,
    },
    containerAge:{
        flexDirection:"row",
        borderBottomColor:"black",
        backgroundColor:"white",
        borderRadius:10,
        padding:12,
        width:320,
        marginBottom:20,
    },
    containerGender:{
        flexDirection:"row",
        borderBottomColor:"black",
        backgroundColor:"white",
        borderRadius:10,
        padding:12,
        width:320,
        marginBottom:20,
        height:100,
    },
    containerWeight:{
        flexDirection:"row",
        borderBottomColor:"black",
        backgroundColor:"white",
        borderRadius:10,
        padding:12,
        width:320,
        marginBottom:20,
    },
    containerHeight:{
        flexDirection:"row",
        borderBottomColor:"black",
        backgroundColor:"white",
        borderRadius:10,
        padding:12,
        width:320,
        marginBottom:20,
    },
    genderSelector:{
        flexDirection:"row",
        flex:1,
        padding:10,
    },  
    maleContainer:{
        borderRadius:10,
        borderColor:"rgba(69, 82, 79,0.4)",
        borderWidth:1,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginEnd:5,
    },
    femaleContainer:{
        borderRadius:10,
        borderColor:"rgba(69, 82, 79,0.4)",
        borderWidth:1,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    femaleContainerSelected:{
        borderRadius:10,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ed5885",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
    },
    maleContainerSelected:{
        borderRadius:10,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0cb5f2",
        marginEnd:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input:{
        width:320,
        marginLeft:15,
        marginTop:-1,
    },
    confirm:{
        borderBottomColor:"black",
        backgroundColor:"black",
        borderRadius:20,
        padding:12,
        width:320,
        marginBottom:20,
        flex:0,
        alignItems:"center",
        justifyContent:"center",
    },
});

