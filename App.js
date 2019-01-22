 
import { Text , View } from 'react-native';
import React, { Component } from 'react';
import HomeScreen from "./src/component/HomeScreen" ;
import AboutScreen from "./src/component/AboutScreen";
import MainScreen from "./src/component/MainScreen";

import AddMediaTab from "./src/component/AppTabNavigator/AddMediaTab";
import HomeTab from "./src/component/AppTabNavigator/HomeTab";
import LikeTab from "./src/component/AppTabNavigator/LikeTab";
import SearchTab from "./src/component/AppTabNavigator/SearchTab";
import ProfileTab from "./src/component/AppTabNavigator/ProfileTab";


// For navigaton controller
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";


 

// declare your all screens here for navigation controller
const AppNavigator = createStackNavigator({
  HomeScreen:  {screen: HomeScreen},
  AboutScreen: {screen: AboutScreen},
  MainScreen: {screen: MainScreen},
});



// create a stack using createAppContainer and export this like below
export default createAppContainer(AppNavigator);

// the below code is for Tabbar controller
// //  declare your all screens here for tabbar controller
// const TabNavigator = createBottomTabNavigator({
//   HomeTab : HomeTab,
//   SearchTab :  SearchTab,
//   AddMediaTab :  AddMediaTab,
//   LikeTab :  LikeTab,
//   ProfileTab : ProfileTab
// });

// export default createAppContainer(TabNavigator);
