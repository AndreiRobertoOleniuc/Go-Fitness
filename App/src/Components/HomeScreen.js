import React,{useEffect,useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Axios from "axios";

function HomeScreen({ navigation }) {
  const[response,setResponse]= useState(0);
  useEffect(() => {
    getData();
  }, []);
  const getData = async ()=>{
    const body = [11.0,2.0,6.0,2.0,1.0,2.0];
    Axios.post(`http://localhost:8080/api/public/getCalorie?gender=true&weight=61.5&height=170.0&age=18.0`,body)
    .then((res)=>{
      console.log(res.data);
      setResponse(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{response}</Text>
    </View>
  );
}

export default HomeScreen;
