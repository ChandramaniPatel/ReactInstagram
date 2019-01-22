import { Icon } from 'native-base';
import React, { Component } from 'react'
import { View  ,Text} from 'react-native';

export default class SearchTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="ios-search" style={{color:tintColor}} />
        )
    }

  render() {
    return (
        <View style={{backgroundColor : '#AABBCC',flex : 1}}>
        <Text>SearchTab</Text>
      </View>
    )
  }
}
