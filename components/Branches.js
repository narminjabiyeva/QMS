import React from "react";
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';

import {Txt} from "./Txt"

export const Branches = ({branches,onPress}) => {
return (
 
    <TouchableOpacity style={styles.container} onPress={onPress}>                 
        <Image style={styles.img} source={{uri: "https://lh3.googleusercontent.com/-giN8Q_viK6eN4xqd9oXd1hcSq7RfbLA6TMEr_G8Kyx-OkBJGfqAQisoay7bGMZcrpc"}}/>
        
        <View style={{width: "50%",paddingLeft: 10}}>
          <Txt style={styles.name}>{branches.title}</Txt>
        <TouchableOpacity>
          <Txt style={styles.showMap}>Show in the map</Txt>
        </TouchableOpacity>
        </View>
        
        <View style={styles.circle}>
        <View style={styles.rectangle}/>
            <Txt style={styles.place}>{branches.place}</Txt>
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
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      
      elevation: 6,
      marginVertical: 15,
      width: "90%",
      alignSelf: "center"
      
    },
    place: {
      color: "#fff",
      fontSize: 50,
      position: "absolute",
      left: "30%",
      top: "20%"
    },
    img: {
        width: 70,
        height: 70
      },
    name: {
        fontSize: 20,
        
    },
    showMap: {
      marginTop: 5,
      fontSize:12,
      fontStyle: "italic"
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
  