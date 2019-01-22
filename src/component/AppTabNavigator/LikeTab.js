import { Icon } from 'native-base';
import React, { Component } from 'react'
import { View  ,Text} from 'react-native'

export default class LikeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="ios-heart" style={{color:tintColor}} />
        )
    }

  render() {
    return (
        <View style={{backgroundColor : 'blue',flex : 1}}>
        <Text>LikeTab</Text>
      </View>
    )
  }
}
