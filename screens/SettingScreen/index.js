import React, { useState } from 'react';
import { StyleSheet,View, Image, FlatList,TouchableOpacity ,Button} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";


import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png"




export const SettingScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
       
        <View  style={styles.header}>
          <Txt style={styles.greeting}>Good morning, {"Narmin"}</Txt>
          <Image source={sun} style={styles.img}/>
        </View>

        <Txt style={styles.name} weight="bold">Settings</Txt>

        <View style={styles.links}>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle}>Language alternatives</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle}>Dark mode</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle}>Change password</Txt>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle}>Number and email exchanges</Txt>
          </TouchableOpacity>
        </View>     
     
          <BottomNav navigation={navigation}/> 
      
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 40
    },
    header: {
      backgroundColor: "#21ADE3",
      height: 70,
      alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection: "row",
      paddingHorizontal: 40,
      width: "100%"
    },
    greeting: {
      fontSize: 24,
      color: "#fff"
    },
    img: {
      width: 40,
      height: 40,
    },
    name: {
      color: "#21ADE3",
      fontSize: 26,
      textTransform: "uppercase",
      marginVertical: 30,
      marginHorizontal: 20
    },
    links :{
      paddingHorizontal: 20,
      paddingVertical: 30
    },
    link: {
      backgroundColor: '#fff',
      justifyContent: "center",
      marginVertical: 15,
      borderColor: "#21ADE3",
      borderWidth: 1,
      paddingVertical: 15,
      borderRadius: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: "center"

    },
    linkTitle: {
      fontSize: 18,
      color: "#5E5F61"
    },
    downArrow: {
      width: 10,
      height: 10,
      borderRightWidth: 2,
      borderRightColor: "#5E5F61",
      borderBottomWidth: 2,
      borderBottomColor: "#5E5F61",
      transform: [{ rotate: '45deg' }]
    }
   
  });
  