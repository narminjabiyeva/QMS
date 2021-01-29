import React, { useState } from 'react';
import { StyleSheet,View, Image, FlatList,TouchableOpacity ,Button} from 'react-native';



import { Txt } from '../../components/Txt';
import logo from "../../assets/images/logo.png"
import { Btn } from "./Btn"

export const LandingPageScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <Txt style={styles.name} weight="bold">QUEUE MANAGEMENT SYSTEM</Txt>
        <Image style={styles.logo} source={logo} />
        <Btn title="login" style={{marginVertical: 10}} onPress={() => navigation.navigate("login")}/>
        <Btn title="register" style={{marginVertical: 10}} onPress={() => navigation.navigate("register")} />
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      marginTop: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff"
    },
    name: {
      color: "#818383",
      fontSize: 26,
      textAlign: "center"

    },
    logo:  {
      width: 140,
      height: 155,
      marginVertical: 100
    }
  });
  