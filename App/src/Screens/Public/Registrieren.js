import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from "axios";

export default function Registrieren({navigation,setCredentials,setUserID}){
    const [email,setEmail] = useState();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    const register = async ()=>{
        axios.get(`http://localhost:8080/api/public/register?email=${email}&username=${username}&password=${password}`)
        .then((res)=>{
            if(res.data.loggedIn){
                setCredentials({
                    uname:username,
                    upassword:password
                })
                setUserID(res.data.userID);
                navigation.navigate("Ziele");
            }else{
                navigation.navigate("Sign Up");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const changeEmail = (e) => setEmail(e.target.value);
    const changeUsername = (e)=> setUsername(e.target.value);
    const changePassword = (e) => setPassword(e.target.value);
    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container} bounces={false}>
            <View>
                <Text style={styles.title}>Go Fitness</Text>
            </View>
            <View>
                <Text style={styles.greet}>Fill in your Data</Text>
                <Text style={styles.describe}>Email</Text>
                <TextInput placeholder="Email" style={styles.input} onChange={changeEmail}/>
                <Text style={styles.describe}>Username</Text>  
                <TextInput placeholder="Username" style={styles.input} onChange={changeUsername}/>
                <Text style={styles.describe}>Password</Text>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChange={changePassword}/>  
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.register} onPress={register}>
                    <Text style={styles.whiteText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginContainer}>
                    <Text>Already have an Accound </Text>
                    <Text style={styles.login}>Login here</Text>
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