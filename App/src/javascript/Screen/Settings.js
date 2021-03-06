import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import {useAuth} from "../AuthProvider";

export default function SettingsScreen({navigation}) {
    const getOut =()=>{
        logout();
        navigation.navigate("Login");
    }
    const {logout} = useAuth();
    return (
        <View style={styles.container}>
            <View  style={styles.title}>
                <Text style={styles.titleText}>GoFitME</Text>
            </View>
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
        fontSize:30,
        marginTop:30,
        fontWeight:"700",
        alignSelf:"baseline",
        color:"#ffffff",
    },
    logOut:{
        backgroundColor:"#007aff",
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
    }
});