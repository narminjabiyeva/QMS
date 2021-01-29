import React, {useState} from "react";
import { View,TextInput,StyleSheet ,TouchableOpacity,Image } from "react-native";

import { Txt } from '../../components/Txt';
import calendar from "../../assets/images/calendar.png"


export const NotModal = ({sentNot}) => { 
    
    const [show, setShow] = useState(false);

    const notifyMe = () => {
        setShow(!show)
    }
    
    
return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
           <Txt style={styles.headerTxt} weight="bold">Sucsess your place is {"15th"}</Txt>
           <Image style={styles.img} source={calendar}/>
        </View>
        <Txt style={styles.info}>You can redeem your ticket from {"12pm to 1am "}. {"3rd"} person is currently in row</Txt>
        <TouchableOpacity style={styles.notify} onPress={notifyMe}>
            <Txt style={styles.notText}>Notify me</Txt>
        </TouchableOpacity>
        {
            show &&
             <View style={styles.dropDown}>
               <TouchableOpacity style={styles.dropItem} onPress={sentNot}>
                <Txt style={styles.notText}>When I am 3th in line</Txt>
               </TouchableOpacity>
               <TouchableOpacity style={styles.dropItem} onPress={sentNot}>
                <Txt style={styles.notText}>When there is 30 minutes left</Txt>
               </TouchableOpacity>
               <TouchableOpacity style={styles.dropItem} onPress={sentNot}>
                <Txt style={styles.notText}>Custome</Txt>
               </TouchableOpacity>
        
             </View>
        }
     </View>    
    </View>
)
};

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        top: 0,
        bottom: 0,
        left:0 ,
        right: 0,
        backgroundColor: "rgba(0, 15, 35, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        paddingHorizontal: 20
    },    
    modal:{
        width: "100%",
        height: "27%",
        backgroundColor: "#fff",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        borderBottomColor: "#21ADE3",
        borderBottomWidth: 1,
        marginHorizontal: 40,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15
    },
    headerTxt: {
        color: "#21ADE3",
        fontSize: 18
    },
    img: {
        width: 22,
        height: 22,
    },
    info: {
        color: "#5E5F61",
        fontSize: 18,
        lineHeight: 22,
        paddingHorizontal: 40,
        marginVertical: 15
    },
    notify: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderColor:"#21ADE3",
        borderWidth: 1,
        marginHorizontal: 40,
        borderRadius: 15 ,
    },
    notText: {
        color: "rgba(33, 173, 227, 0.70)",
        fontSize: 13,
    },
    dropDown: {
        backgroundColor: "#fff",
        marginHorizontal: 50,
        zIndex: 1,
        
    },
    dropItem: {
      paddingVertical: 6,
      paddingHorizontal: 15,
    }

});