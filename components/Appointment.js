import React from "react";
import {Image, TouchableOpacity, View, StyleSheet,TouchableWithoutFeedback} from 'react-native';

import {Txt} from "./Txt"
import {Btn} from "./Btn"
import dlt from "../assets/images/delete.png" 
export const Appointment = ({data,edit}) => {
return (
 
    <View>
    <View style={styles.container}>
        <TouchableOpacity style={styles.delete}>
            <Image style={styles.img} source={dlt}/>
        </TouchableOpacity>
       
        <View style={styles.app}>
            <Txt style={styles.date}>{data.date}</Txt>
            <Txt style={styles.service} weight="medium">{data.service}</Txt>
            <Txt style={styles.branch}>{data.branch}</Txt>
        </View>
        
    </View>
    {
             data.status == "current" &&
             <View style={styles.currentContainer}>
                 <View  style={styles.current}>
                     <Txt  style={styles.currentTxt}>there are last {"3"} person on your turn</Txt>
                     <View style={styles.btns}>
                        <TouchableOpacity style={styles.btn}>
                           <View >
                               <Txt  style={styles.title}>cancel</Txt>
                            </View>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.btn} onPress={edit} >
                           <View >
                               <Txt  style={styles.title}>edit</Txt>
                            </View>
                     </TouchableOpacity> 
                     </View>
                     
                 </View>
             </View>
        }
    </View>
  
)
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "space-between",  
      marginVertical: 20    
    },
    delete: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#21ADE3",
        alignItems:"center",
        justifyContent: "center"
    },
    img: {
        width: 13,
        height: 13
    },
    app: {
        backgroundColor: "#21ADE3",
        width: "80%",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    service: { 
        fontSize: 18,
        color: "#fff"
    },
    date: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 10
    },
    branch: {
        color: "#fff",
        fontSize: 14
    },
    currentContainer: {
       borderLeftColor: "#21ADE3",
       borderLeftWidth: 3,
       width: "70%",
       alignSelf: "flex-end",
       marginHorizontal: 20,
       paddingLeft: 15
    },
    current: {
       paddingVertical: 5,
       backgroundColor: "#21ADE3",
       borderRadius: 5,
       paddingHorizontal: 15
    
    },
    currentTxt: {
        fontSize: 13,
        color: "#fff"
    },
    btn: {
        backgroundColor: "#fff",
        width: "30%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",        
    },
    title: {
        color: "#21ADE3"
    },
    btns: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5
    }
  
  });
  