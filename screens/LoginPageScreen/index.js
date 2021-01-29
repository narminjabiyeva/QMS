import React, {useState} from 'react';
import { StyleSheet,Image,Text,View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

import {Btn,} from "../../components/Btn"
import {Txt} from "../../components/Txt"
import {Field} from "../../components/Field"
import Logo from "../../assets/images/logo.png"
import email from "../../assets/images/email.png"
import password from "../../assets/images/password.png"


export const LoginPageScreen = ({navigation}) => {

  
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
    
  }; 

  const submitFields = () => {
    // validation and submit to store
    navigation.navigate("home")
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
       <Txt style={styles.header} weight="bold">log in</Txt>
         
         <Field
          img={email}
          name="email"
          value={fields.email}
          handleFieldChange={handleFieldChange}
         />
         <Field 
           secure={true}
           img={password}
           name="password"
           value={fields.password}
           handleFieldChange={handleFieldChange}
         />
    
         <Btn
          title="log in"
          style={styles.btn}
          onPress={() => submitFields()}/>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  header: {
    color: "#21ADE3",
    fontSize: 27,
    textTransform: "uppercase",
    textAlign: "left",
    marginHorizontal: 70,
    marginVertical: 40
  },
  logo: {
    width: 130,
    height: 145,
    marginVertical: 30,
    alignSelf: "center",
    
  },
  btn: {
    marginTop: 50,
    alignSelf: "center"
  }
});
