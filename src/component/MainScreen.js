
import React, { Component } from 'react';
import {
     View ,
     Text ,
     StyleSheet 
    } from 'react-native';

import { Icon, TabHeading } from 'native-base';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from "react-navigation";

import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import HomeTab from "./AppTabNavigator/HomeTab";
import LikeTab from "./AppTabNavigator/LikeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";
import TabNavigator from './TabNavigator';

  
 class MainScreen extends Component {
     
  static navigationOptions = {
        // We want differnt herade for different tab So commenting below code and making header=nil

        // headerLeft : <Icon name="ios-camera" style={ {color: "magenta" , paddingLeft:10} } />,
        // title:"Instagram", 
        // headerRight: <Icon name="ios-send" style={ {color: "magenta" , paddingRight:10} } />,

        header : null

    } 
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1}}>
       
          <TabNavigator/>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#33FFCC',
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center'
     }
    });
    
    

export default MainScreen;