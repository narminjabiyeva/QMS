import React from "react";
import {Image, TouchableOpacity, View, StyleSheet,TouchableWithoutFeedback} from 'react-native';

import {Txt} from "./Txt"
import arrow from "../assets/images/arrow.png"

export const Company = ({data,onPress}) => {
return (
 
    
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.img} source={{uri: data.logo}}/>
        <Txt style={styles.name}>{data.title}</Txt>
        <View style={styles.circle}>
        <View style={styles.rectangle}/>
          <Image source={arrow} style={styles.arrow}/>
        </View> 
      </TouchableOpacity>
    
  
)
}

const styles = StyleSheet.create({
    container: {
      height: 100,
      flexDirection: "row",
      backgroundColor: '#fff',
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 15,
      width: "90%",
      alignSelf: "center", 
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      
      elevation: 6,
      
    },
    img: {
      width: 70,
      height: 70
    },
    name: {
        fontSize: 20,
        textAlign: "center",
        paddingLeft: 30,
        width: "50%"
    },
    rectangle: {
       width: 50,
       height: "100%",
       backgroundColor: "#21ADE3",
       alignSelf: "flex-end"
    },
    circle: {
      position: "relative",
        width: 95,
        height: "100%",
        borderRadius: 50,
        backgroundColor: "#21ADE3",
    },
    arrow: {
      position: "absolute",
      width: 40,
      height: 60,
      top: 20,
      left: 30
    }
  
  });
  