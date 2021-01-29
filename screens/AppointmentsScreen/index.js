import React, {useState} from 'react';
import { StyleSheet,Image,View, TouchableOpacity,FlatList} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Txt} from "../../components/Txt"
import sun from "../../assets/images/sun.png"
import {BottomNav} from "../../components/BottomNav"
import {Appointment} from "../../components/Appointment"


const APPOINTMENTS = [
  {
    id : 1,
    date: "01.09 2020 12pm",
    service: "Valyuta tənzimlənməsi",
    branch: "Nərimanov filialı",
    status: "done",
  },
  {
    id : 2,
    date: "01.09 2020 12pm",
    service: "Valyuta tənzimlənməsi",
    branch: "Nərimanov filialı",
    status: "done",
  },
  {
    id : 3,
    date: "22.11 2020 12pm",
    service: "Valyuta tənzimlənməsi",
    branch: "Nərimanov filialı",
    status: "current",
  },
  {
    id : 4,
    date: "23.11 2020 12pm",
    service: "Valyuta tənzimlənməsi",
    branch: "Nərimanov filialı",
    status: "next",
  },
  {
    id : 5,
    date: "01.12 2020 12pm",
    service: "Valyuta tənzimlənməsi",
    branch: "Nərimanov filialı",
    status: "next",
  },
]

export const AppointmentsScreen = ({navigation}) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  
  const appointments = APPOINTMENTS.filter((item) => item.status !== "done");
  const history = APPOINTMENTS.filter((item) => item.status == "done")
  
  const [app,setApp] = useState(true); // app=true, his=false
  const [data,setData] = useState(appointments)
  
  const clickHandler = (b) => {
    setApp(b);
    const data = b ? appointments : history ; 
      
    setData(data)
  }
  
  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    
  };
  
  const showDatePicker = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
   
  
  return (
    
    <View style={styles.container}>
       
    <View style={styles.header}>
      <Txt style={styles.greeting}>Good morning, {"Narmin"}</Txt>
      <Image source={sun} style={styles.img}/>
    </View>
   
    <View style={styles.btns}>
      <View style={app ? btnClickedStyle: btnStyle}>
        <TouchableOpacity onPress={() => clickHandler(true)}>
         <Txt style={[styles.btnName,{color: app? "#fff" : "#AEBCDB"}]}>appointments</Txt>
        </TouchableOpacity>
      </View>
      
      <View style={app ? btnStyle : btnClickedStyle}>
        <TouchableOpacity onPress={() => clickHandler(false)}>
          <Txt style={[styles.btnName,{color: app? "#AEBCDB" : "#fff"}]}>history</Txt>
        </TouchableOpacity>        
      </View>
    </View>
    <FlatList
        data={data}
        renderItem={({item}) => <Appointment data={item} edit={showDatePicker}/>}                                
        keyExtractor={item => item.id}
        />
     
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
const btnClickedStyle = {
  backgroundColor: "#21ADE3",
  
  shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    
    elevation: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "50%", 
}
const btnStyle = {
  backgroundColor: "#fff",
  color: "#000",
  paddingVertical: 15,
  paddingHorizontal: 20,
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  borderBottomColor: "#858687",
  borderBottomWidth: 1
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
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
  btns: {
    flexDirection: "row",
    alignItems: "center",
  },
 
  btnName: {
    fontSize: 20,
  }
});
