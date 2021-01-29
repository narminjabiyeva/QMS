import React, { useState } from 'react';
import { StyleSheet,View, Image, FlatList,TouchableOpacity ,Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import { Service } from '../../components/Service';




export const CompanyScreen = ({route,navigation}) => {

  const { services,title } = route.params;
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    
  };

   
  const showDatePicker = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const takeAppointment = (item) => {
    showDatePicker('date');
    navigation.navigate("branches", {branches: item.branches, title: item.title});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Image source={{uri: "https://lh3.googleusercontent.com/-giN8Q_viK6eN4xqd9oXd1hcSq7RfbLA6TMEr_G8Kyx-OkBJGfqAQisoay7bGMZcrpc"}} style={styles.img}/>
            <Txt style={styles.name}>{title}</Txt>
      </View>
     
      <View >   

       <FlatList
        style={styles.services}
        data={services}
        renderItem={({item}) =>  <Service data={item} onPress={() => {takeAppointment(item)}}/>}
        keyExtractor={item => item.id}
       />

       
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"} 
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    
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
  img: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 16
  },
  services: {
    width: "100%",
    marginTop: 30,

  }
});
