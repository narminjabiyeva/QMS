import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingPageScreen} from "../screens/LandingPageScreen";
import { LoginPageScreen} from "../screens/LoginPageScreen";
import {CompanyScreen} from "../screens/CompanyScreen";
import {RegisterScreen,} from "../screens/RegisterScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {BranchesScreen} from "../screens/BranchesScreen";
import {TicketScreen} from "../screens/TicketScreen";
import {SettingScreen} from "../screens/SettingScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {AppointmentsScreen} from "../screens/AppointmentsScreen";



const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator headerMode ="none">
    <Screen name="landing" component={LandingPageScreen} />
    <Screen name="home" component={HomeScreen} />
    <Screen name="login" component={LoginPageScreen} />
    <Screen name="register" component={RegisterScreen} />
    <Screen name="company" component={CompanyScreen} />    
    <Screen name="branches" component={BranchesScreen} />    
    <Screen name="ticket" component={TicketScreen} />    
    <Screen name="setting" component={SettingScreen} />    
    <Screen name="profile" component={ProfileScreen} />   
    <Screen name="appointments" component={AppointmentsScreen} />    
  </Navigator>
);
