import React, { useState } from 'react';
import { ScrollView, StyleSheet,View, Image, FlatList } from 'react-native';


import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import { Btn } from '../../components/Btn';

import { Ticket } from '../../components/Ticket';
import {NotModal} from "./NotModal"

const DATA = {
  name: "Narmin",
  surname: "Jabiyeva",
  services: "Valyuta tenzimlemesi",
  branch: "Nerimanov filialı",
  time : "22 november 12pm-1am",
  place: "14",
  ticket: "T24"
  
}


export const TicketScreen = ({navigation}) => {
   const [modal,setModal] = useState(false)

   const showModal = () => {
     setModal(true);
   }

   const sendNot = () => {
     setModal(false);
     navigation.navigate("appointments")
   }

  return (
    <View style={styles.container}>
       
      <View style={{flex: 1,position: "relative"}}>
        <View style={styles.header}>
            <Image source={{uri: "https://lh3.googleusercontent.com/-giN8Q_viK6eN4xqd9oXd1hcSq7RfbLA6TMEr_G8Kyx-OkBJGfqAQisoay7bGMZcrpc"}} style={styles.img}/>
            <View>
              <Txt style={styles.name}>{DATA.services} </Txt>
              <Txt style={styles.filial}>{DATA.branch}</Txt>
            </View>
            
        </View>
     
        <Ticket data={DATA}/>
         
        <Btn title="Agree and Take" style={styles.btn} onPress={showModal}/>
        <BottomNav navigation={navigation}/>
      </View>
        {
          modal && <NotModal sentNot={sendNot}/>
        }
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  header: { 
    backgroundColor: "#21ADE3",
   alignItems: "center",
   flexDirection: "row",
   height: 70,
   width: "100%",
   paddingHorizontal: 16
  },
  name: {
    fontSize: 22,
    color: "#fff",
 },
 filial: {
  fontSize: 16,
  color: "#fff",
 },
  img: {    
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
 btn: {
  marginVertical:30,
  alignSelf: "center",
  marginHorizontal: 70
 }
});
