import { Icon } from 'native-base';
import React, { Component } from 'react'
import { View  ,Text} from 'react-native'

export default class AddMediaTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="ios-add-circle" style={{color:tintColor}} />
        )
    }

  render() {
    return (
      <View style={{backgroundColor : 'red',flex : 1}}>
        <Text>AddMediaTab</Text>
      </View>
    )
  }
}
