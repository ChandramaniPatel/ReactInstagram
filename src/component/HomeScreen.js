

import React ,{Component} from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import { Container, Content } from 'native-base';

 export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('AboutScreen')}
      />
    );
  }
}