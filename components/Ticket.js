import React from 'react';
import {  StyleSheet,View,  } from 'react-native';

import {Txt} from "../components/Txt"





export const Ticket = ({data}) => {


  return (
        <View style={styles.ticket}>
           
            <Txt style={styles.ticketNo} weight="bold">Ticket {data.ticket}</Txt>
           
           <View style={styles.container}>
             <View style={styles.userDataWrapper}>
              <Txt style={styles.userDataName}>name :</Txt>
              <Txt style={styles.userData}>{data.name}</Txt>
            </View>
            <View style={styles.userDataWrapper}>
              <Txt style={styles.userDataName}>surname :</Txt>
              <Txt style={styles.userData}>{data.surname}</Txt>
            </View>
            <View style={styles.userDataWrapper}>
              <Txt style={styles.userDataName}>services :</Txt>
              <Txt style={styles.userData}>{data.services}</Txt>
            </View>
            <View style={styles.userDataWrapper}>
              <Txt style={styles.userDataName}>branch :</Txt>
              <Txt style={styles.userData}>{data.branch}</Txt>
            </View>
            <View style={styles.userDataWrapper}>
              <Txt style={styles.userDataName}>time :</Txt>
              <Txt style={styles.userData}>{data.time}</Txt>
            </View>

            <View style={styles.userDataWrapper}>
              <Txt style={styles.userDataName}>place :</Txt>
              <Txt style={styles.userData}>{data.place}</Txt>
            </View>
           </View>

        </View>    
    );
}

const styles = StyleSheet.create({
  
  ticket: {
     
     marginHorizontal: 70,
     alignItems: "center",
     justifyContent: "center"
  },
 
 ticketNo: {
   fontSize: 24,
   color: "#21ADE3",
   alignItems: "center",
   justifyContent: "center",
   textAlign: "center",
   alignSelf: "center",
   
 },
 container: {
    justifyContent: "space-evenly",
    height: "60%",
    marginTop: 20
 },
 userData: {
   paddingVertical:5,
   borderBottomColor: '#21ADE3',
   borderBottomWidth: 1 ,
   width: "80%",
   paddingHorizontal: 10
 },
 userDataName: {
  color: "#21ADE3",
  fontSize: 11

 },
 userDataWrapper: {
   flexDirection: "row",
   alignItems: "center",
   justifyContent: "space-between",
   marginVertical: 10
   
 }
});
