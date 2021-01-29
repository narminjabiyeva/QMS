import React from "react";
import { TouchableOpacity, View, StyleSheet} from 'react-native';

import {Txt} from "./Txt"


export const Service = ({data,onPress}) => {
return (
 
      
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Txt style={styles.name}>{data.title}</Txt>
        <View style={styles.arrow}/>
      </TouchableOpacity>            
    
)
}

const styles = StyleSheet.create({
    container: {
      height: 60,
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
      marginVertical: 10,
      width: "90%",
      alignSelf: "center",
      paddingHorizontal: 20
    },
    name: {
        fontSize: 22,
        color: "#5E5F61"
    },
    arrow: {
      width: 15,
      height: 15,
      borderRightWidth: 3,
      borderRightColor: "#21ADE3",
      borderTopWidth: 3,
      borderTopColor: "#21ADE3",
      transform: [{ rotate: '45deg' }]
    
    }
  
  });
  