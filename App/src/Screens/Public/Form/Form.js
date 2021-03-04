import React,{useState} from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Form(){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate,setSelectedDate]= useState("Wähle dein Alter");

    const [styleMale,setStyleMale] = useState([styles.maleContainer,"grey"]);
    const [styleFemale,setStyleFemale] = useState([styles.femaleContainer,"grey"]);

    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        const options = {  year: 'numeric', month: 'short', day: 'numeric' };
        setSelectedDate(date.toLocaleDateString('de-DE', options));
        hideDatePicker();
    };
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
            <Text style={styles.title}>Wir brauchen noch ein paar Infos</Text>
            <View style={styles.holder}>
                <View style={styles.containerAge}>
                    <MaterialIcons name="date-range" size={24} color="black" />
                    <TouchableOpacity onPress={showDatePicker} ><Text style={styles.choseDate}>{selectedDate.toString()}</Text></TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View style={styles.containerGender}>
                    <View style={styles.genderSelector}>
                        <TouchableOpacity style={styleMale[0]} onPress={changeToMale}><FontAwesome5 name="male" size={24} color={styleMale[1]}/></TouchableOpacity>
                        <TouchableOpacity style={styleFemale[0]} onPress={changeToFemale}><FontAwesome5 name="female" size={24} color={styleFemale[1]} /></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerWeight}>
                    <FontAwesome5 name="weight" size={24} color="black" />
                </View>
                <View style={styles.containerHeight}>
                    <MaterialCommunityIcons name="human-male-height-variant" size={24} color="black" />
                </View>
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
        fontWeight: 'bold',
        fontSize: 22,
        marginTop:80,
        marginBottom:40,
    },
    btn:{
        borderRadius:20,
        backgroundColor:"#f1654c",
        height:40,
        padding:12,
        width:320,
        marginTop:10,
        marginBottom:10,
        alignItems:"center"
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
    choseDate:{
        color:"black",
        fontSize:18,
        fontWeight:"300",
        marginLeft:10,
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
        borderColor:"white",
        borderWidth:1,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#eb3b3b",
    },
    maleContainerSelected:{
        borderRadius:10,
        borderColor:"white",
        borderWidth:1,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#0cb5f2",
        marginEnd:5,
    },
});

