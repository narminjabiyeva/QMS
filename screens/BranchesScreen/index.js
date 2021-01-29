import React, { useState } from 'react';
import { StyleSheet,View, Image, FlatList,TouchableOpacity ,Button} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import { Branches } from '../../components/Branches';
import {FilterModal} from "./filterModal"



export const BranchesScreen = ({route,navigation}) => {

  const { branches, title } = route.params;
  const [filter,setFilter] = useState(false)

  const handleTicket = () => {
    navigation.navigate("ticket");
  }

  const filterBy = () => {
    setFilter(!filter)
  } 

  const filterByFree = () => {
    setFilter(false)
  }
  const filterByClosest = () => {
    setFilter(false)
  }

  const filterByName = () => {
    setFilter(false)
  }
  return (
    <View style={styles.container}>
        <View style={{flex: 1}}>
        
      <View style={styles.header}>
            <Image source={{uri: "https://lh3.googleusercontent.com/-giN8Q_viK6eN4xqd9oXd1hcSq7RfbLA6TMEr_G8Kyx-OkBJGfqAQisoay7bGMZcrpc"}} style={styles.img}/>
            <Txt style={styles.name}>{title}</Txt>
      </View>
     
       <FlatList
        style={styles.services}
        data={branches}
        renderItem={({item}) => 
                                   <Branches branches={item} onPress={handleTicket}/>
                                }
        keyExtractor={item => item.id}
      />

      
      <TouchableOpacity style={styles.filterBtn} onPress={() => filterBy()} visibility={!filter}>
        <Txt style={styles.filter}>filter by</Txt>
        <View style={styles.filterArrow}/>
      </TouchableOpacity>

      <BottomNav navigation={navigation}/>
      </View>
      {
          filter &&
           <FilterModal filterBy={filterBy}>
             <TouchableOpacity style={styles.fltrBy} onPress={() => filterByClosest()}>
               <Txt style={styles.fltrName}>closest to me</Txt>
             </TouchableOpacity>
             <TouchableOpacity style={styles.fltrBy} onPress={() => filterByName()}>
               <Txt style={styles.fltrName}>by name</Txt>
             </TouchableOpacity>
             <TouchableOpacity style={styles.fltrBy} onPress={() => filterByFree()}>
               <Txt style={styles.fltrName}>most free</Txt>
             </TouchableOpacity>
           </FilterModal>
        }
      
    </View>
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 26,
    color: "#fff",
 },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16
  },
  services: {
    width: "100%",
    marginTop:30,
  },
  filterBtn :{
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    marginBottom: 120
  },
  filter: {
    color: "#21ADE3",
    fontSize: 18,
    marginHorizontal: 10,
   
  },
  filterArrow: {
    width: 12,
    height: 12,
    top: 4,
    borderLeftWidth: 2,
    borderLeftColor: "#21ADE3",
    borderTopWidth: 2,
    borderTopColor: "#21ADE3",
    transform: [{ rotate: '45deg' }]
  },
  fltrBy: {
    marginVertical: 5
  },
  fltrName: {
    color: "rgba(42, 56, 79, 0.71)",
    fontSize: 14
  }
});
