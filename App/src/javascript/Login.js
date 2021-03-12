import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
import {useAuth} from "./AuthProvider";
import {db} from "./firebase";

export default function Login({navigation}){
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const { login,currentUser } = useAuth();

    const loginSubmit = ()=>{
        login(email,password);
        db.collection('userData').doc(currentUser.uid).get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    db.collection('userData').doc(currentUser.uid).onSnapshot((doc) => {
                        navigation.navigate("HomePage");
                    });
                }else{
                    navigation.navigate("Ziele");
                }
        });
    }  
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Go Fitness</Text>
            </View>
            <View>
                <Text style={styles.greet}>Welcome</Text>
                <TextInput placeholder="Username or Email" style={styles.input} onChangeText={text=>setEmail(text)}/>
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>  
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.login} onPress={loginSubmit}>
                    <Text style={styles.whiteText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} style={styles.signUpContainer}>
                    <Text>Don't have an account? </Text>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        marginBottom:150,
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
    },
    login:{
        borderRadius:20,
        backgroundColor:"black",
        height:40,
        padding:12,
        width:320,
        marginTop:10,
        marginBottom:10,
        alignItems:"center"
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
        color:"grey",
    }
});

/*

    const login = async ()=>{
        axios.get(`http://localhost:8080/api/public/login?username=${username}&password=${password}`)
        .then((res)=>{
            if(res.data.loggedIn){
                setCredentials({
                    uname:username,
                    upassword:password
                })
                setUserID(res.data.userID);
                if(res.data.dataFilled){
                    navigation.navigate("HomePage");
                }else{
                    navigation.navigate("Ziele");
                }
            }else{
                navigation.navigate("Login");
            }
        })
    }
*/