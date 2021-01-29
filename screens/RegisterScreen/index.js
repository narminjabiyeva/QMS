import React, {useState} from 'react';
import { StyleSheet,Image, View} from 'react-native';

import {Btn,} from "../../components/Btn"
import {Txt} from "../../components/Txt"
import {Field} from "../../components/Field"
import Logo from "../../assets/images/logo.png"
import email from "../../assets/images/email.png"
import password from "../../assets/images/password.png"


export const RegisterScreen = ({navigation}) => {

  
  const [fields, setFields] = useState({
    name: "",
    surname: "",
    fin: "",
    phone: "",
    email: "",
    password: "",
    roleName: "customer"
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
   
        <View
          style={styles.container}
        >
            <Image source={Logo} style={styles.logo}/>
            <Txt style={styles.header} weight="bold">register</Txt>
            
            <Field
             name="name"
             value={fields.name}
             handleFieldChange={handleFieldChange}
            />
            <Field
             name="surname"
             value={fields.surname}
             handleFieldChange={handleFieldChange}
            />
            <Field
             name="fin"
             value={fields.fin}
             handleFieldChange={handleFieldChange}
            />
            <Field
             name="phone"
             value={fields.phone}
             handleFieldChange={handleFieldChange}
            />
            <Field
             name="email"
             value={fields.email}
             handleFieldChange={handleFieldChange}
            />
            <Field 
             secure={true}
             name="password"
             value={fields.password}
             handleFieldChange={handleFieldChange}
            />
    
            <Btn
             title="register"
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
    width: 85,
    height: 95,
    marginVertical: 30,
    alignSelf: "flex-end",
    marginHorizontal: 40
  },
  btn: {
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "center"
  }
});
