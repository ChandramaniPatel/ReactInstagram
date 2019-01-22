import React, { Component } from 'react'
import {View ,Text,Button} from  "react-native"
import { Icon } from 'native-base';

export default class AboutScreen extends Component {
  // static navigationOptions = {
  //   title: 'About',
  // };

//   componentWillUnmount() {
//     navigationOptions = {
//         headerLeft : <Icon name="ios-camera" style={ {paddingLeft:40} } />,
//         title:"Instagram", 
//         headerRight: <Icon name="ios-send" style={ {paddingRight:10} } />,
//     }
// } 

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "About",
      headerRight: (
        <Button
          onPress={()=> alert("clicked")}
          title="*"
          color="red"
        />
      ),
      // headerLeft: (
      //   <Button
      //     onPress={()=> alert("clicked")}
      //     title="*"
      //     color="blue"
      //   />
      // )
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to  Main Screen"
        onPress={() => navigate('MainScreen')}
      />
    );
  }
}
