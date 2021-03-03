import React,{useState} from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Form(){
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Wir brauchen noch ein paar Infos</Text>
            <View style={styles.holder}>
                <View style={styles.containerAge}>
                    <MaterialIcons name="date-range" size={24} color="black" />
                    <TouchableOpacity title="Wähle dein Alter" onPress={showDatePicker} ><Text style={styles.choseDate}>Wähle dein Geburtsdatum</Text></TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
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
    },
    choseDate:{
        color:"black",
        fontSize:18,
        fontWeight:"300",
        marginLeft:10,
    }
});

