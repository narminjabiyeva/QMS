import React, {useState,} from 'react';
import { StyleSheet,View } from 'react-native';
import {AppLoading} from "expo";


import {loadFonts} from "./styles/fonts";
import {RootNav} from "./navigation"


export default function App() {

  const [loaded,setLoaded] = useState(false);
  if(!loaded){
    return <AppLoading
            startAsync={loadFonts}
            onFinish={()=> setLoaded(true)}
            onError={()=>console.log("rejected")}
    />
  }

  return (

          <RootNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});