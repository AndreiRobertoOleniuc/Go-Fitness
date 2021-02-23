import React,{useEffect,useState} from "react";
import { StyleSheet, Text, View, Button,TextInput } from "react-native";
import Axios from "axios";

function HomeScreen({ navigation }) {
  const [gender,setGender] = useState(true);
  const [weight,setWeight] = useState(0.0);
  const [height,setHeight] = useState(0.0);
  const [age,setAge] = useState(0);
  const[response,setResponse]= useState(0);
  const getData = async ()=>{
    const body = [11.0,2.0,6.0,2.0,1.0,2.0];
    Axios.post(`http://localhost:8080/api/public/getCalorie?gender=${gender}&weight=${weight}&height=${height}&age=${age}`,body)
    .then((res)=>{
      console.log(res.data);
      setResponse(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const changeGender= ()=>{
    setGender(!gender);
  }
  const changeWeight =(e)=>{
    setWeight(parseFloat(e.target.value));
  }
  const changeHeight = (e) =>{
    setHeight(parseFloat(e.target.value));
  }
  const changeAge = (e) =>{
    setAge(parseFloat(e.target.value));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{response}</Text>
      <Button 
        title={gender ? "Male":"Female"}
        onPress={changeGender}
      />
      <TextInput
        style={{ 
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1,
          placeholderTextColor: 'gray',
        }}
        placeholder="Weight"
        onChange={changeWeight}
      />
      <TextInput
        style={{ 
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1,
          placeholderTextColor: 'gray',
        }}
        placeholder="Height"
        onChange={changeHeight}
      />
      <TextInput
        style={{ 
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1,
          placeholderTextColor: 'gray',
        }}
        placeholder="Age"
        onChange={changeAge}
      />
      <Button 
        title="Calculate"
        onPress={getData}
      />
    </View>
  );
}

export default HomeScreen;
