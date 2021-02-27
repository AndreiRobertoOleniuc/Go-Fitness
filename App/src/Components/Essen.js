import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from "axios";
//import raw from "../keys.txt";

function Essen({ navigation }) {
    const [foods,setFoods] = useState();
    useEffect(()=>{ 
        /*fetch(raw)
            .then(r => r.text())
            .then(text => {
                getData(text);
            });*/
    },[]);
    const getData = async (apiKey)=>{
        axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${q18XHCe4DoPeJhFVuYWfYjAHpe2a3wXVgkoGljXE}&query=Apple&dataType=Survey%20(FNDDS)&pageSize=10`)
        .then((res)=>{
            console.log(res.data);
            setFoods(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Essen Screen</Text>
        </View>
    )
}

export default Essen
