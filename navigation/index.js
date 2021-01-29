import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginPageScreen} from "../screens/LoginPageScreen";
import {CompanyScreen} from "../screens/CompanyScreen";
import {RegisterScreen,} from "../screens/RegisterScreen";
import {HomeScreen} from "../screens/HomeScreen";
import { HomeStack } from "./HomeStack";


const { Navigator, Screen } = createStackNavigator();

export const RootNav = () => (
    <NavigationContainer >
      <Navigator headerMode ="none"> 
      <Screen name="HomeStack" component={HomeStack} />
      </Navigator>
    </NavigationContainer>
  );
