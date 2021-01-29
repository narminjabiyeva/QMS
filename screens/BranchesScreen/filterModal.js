import React, {useState} from "react";
import { View,TextInput,StyleSheet ,TouchableOpacity,Image } from "react-native";

import { Txt } from '../../components/Txt';
import upArrow from "../../assets/images/upArrow.png" 



export const FilterModal = ({filterBy,children}) => { 
    
    
return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.filterBtn} onPress={() => filterBy()}>
            <Txt style={styles.filter}>filter by</Txt>
            <View style={styles.filterArrow}/>
        </TouchableOpacity>
        {children}
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
        alignItems: "flex-end",
        justifyContent: "flex-end",
        zIndex: 1
    },    
    modal:{
        width: 130,
        height: 130,
        backgroundColor: "#fff",
        marginRight:  15,
        marginBottom: 120,
        padding: 10
    },
    filterBtn :{
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        
      },
      filter: {
        color: "#21ADE3",
        fontSize: 18,
        
      },
      filterArrow: {
        width: 12,
        height: 12,
        bottom: 4,
        borderRightWidth: 2,
        borderRightColor: "#21ADE3",
        borderBottomWidth: 2,
        borderBottomColor: "#21ADE3",
        transform: [{ rotate: '45deg' }],
        marginHorizontal: 10
      }

});