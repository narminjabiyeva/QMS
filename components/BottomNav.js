import React from 'react';
import { StyleSheet,View,Image,TouchableOpacity } from 'react-native';
import profile from "../assets/images/email.png"
import home from "../assets/images/home.png"
import settings from "../assets/images/settings.png"


export const BottomNav = ({navigation}) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("profile")} >
              <View style={styles.circle}>
                  <Image source={profile} style={styles.img}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <View style={styles.homeCircle}>
                  <Image source={home} style={styles.img}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("setting")}>
              <View style={styles.circle}>
                  <Image source={settings} style={styles.img}/>
              </View>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 5,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    position: "absolute",
    bottom: 20,
    borderRadius: 5,
    zIndex: 0
    
  
  },
  circle: {
     width: 30,
     height: 30,
     borderRadius: 15,
     backgroundColor: "#21ADE3",
     justifyContent: "center",
     alignItems: "center"
  },
  homeCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#21ADE3",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 20,
    height: 21,
  }
});
