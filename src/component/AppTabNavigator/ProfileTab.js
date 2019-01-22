import { Icon } from 'native-base';
import React, { Component } from 'react'
import { View  ,Text} from 'react-native'

export default class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="person" style={{color:tintColor}} />
        )
    }

  render() {
    return (
        <View style={{backgroundColor : 'magenta',flex : 1}}>
        <Text>ProfileTab</Text>
      </View>
    )
  }
}
