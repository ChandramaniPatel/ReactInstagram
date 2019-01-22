import React ,{Component} from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions,createBottomTabNavigator } from 'react-navigation'; 
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import HomeTab from "./AppTabNavigator/HomeTab";
import LikeTab from "./AppTabNavigator/LikeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

// declare your all screens here for tabbar controller navigation
const TabNavigator = createBottomTabNavigator({
  HomeTab : HomeTab,
  SearchTab :  SearchTab,
  AddMediaTab :  AddMediaTab,
  LikeTab :  LikeTab,
  ProfileTab : ProfileTab,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
   tabBarOptions: {
    activeTintColor: 'magenta',
    inactiveTintColor: 'gray',
    showLabel : true,
    showIcon : true,
  },
}
)
 export default createAppContainer(TabNavigator);