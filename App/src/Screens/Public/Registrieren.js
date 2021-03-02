import React, {useState} from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Axios from "axios";
export default function Registrieren({navigation}){
    const styles = StyleSheet.create({
        container: {
            flex:1,
            flexDirection:"column",
            alignItems:"center",
            backgroundColor:"#f5f5f5",        
        },
        title: {
            color: '#f1654c',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop:100,
            marginBottom:50,
        },
        input:{
            height:40,
            width:320,
            borderRadius:10,
            backgroundColor:"#dedcdc",
            padding:12,
            marginBottom:10,
        }, 
        greet:{
            margin:5,
            opacity:0.5,
            fontSize:20,
            marginBottom:30,
        },
        register:{
            borderRadius:20,
            backgroundColor:"#f1654c",
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
        signUpContainer:{
            flex:1,
            flexDirection:"row",
        },
        signUp:{
            color:"#f1654c",
        },
        describe:{
            margin:5,
            opacity:0.5,
        }
    });
    const [response,setResponse] = useState(null);
    const getCal = async ()=>{
        const body = [8.0,2.0,6.0,2.0,1.0,2.0];
        Axios.post(`http://andreinetwork.hopto.org/api/public/getCalorie?gender=${true}&weight=${62}&height=${170}&age=${19}`,body)
        .then((res)=>{
            console.log(res.data);
            setResponse(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container} bounces={false}>
            <View>
                <Text style={styles.title}>Go Fitness</Text>
            </View>
            <View>
                <Text style={styles.greet}>Fill in your Data</Text>
                <Text style={styles.describe}>Full Name</Text>
                <TextInput placeholder="Name" style={styles.input}/>
                <Text style={styles.describe}>Email</Text>
                <TextInput placeholder="Email" style={styles.input}/>
                <Text style={styles.describe}>Username</Text>  
                <TextInput placeholder="Username" style={styles.input}/>
                <Text style={styles.describe}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true}/>  
                <Text style={styles.describe}>Confirm Password</Text>
                <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true}/>  
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.register} onPress={getCal}>
                    <Text style={styles.whiteText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.signUpContainer}>
                    <Text>Already have an Accound </Text>
                    <Text style={styles.signUp}>Login here</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}