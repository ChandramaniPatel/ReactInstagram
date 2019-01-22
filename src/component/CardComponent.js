import { View ,Image } from 'react-native';
import React, { Component } from 'react';
import {Card , CardItem , Thumbnail , Body , Left , Right,Button,Icon,Text} from 'native-base';
 
export default class CardComponent extends Component {
  render() {

    const images = {
        "1" : require("../assets/red.jpg"),
        "2" : require("../assets/redp.jpg"),
        "3" : require("../assets/repu.jpg"),
        "4" : require("../assets/tf2.jpg"),
        "5" : require("../assets/swr.jpg"),
        "6" : require("../assets/snp.jpg"),
        "7" : require("../assets/sn.jpg"),
        "8" : require("../assets/swt.jpg"),
        "9" : require("../assets/inspired.jpg"),
        "10" : require("../assets/Fearless.jpg"),
        "11" : require("../assets/profile.jpg"),
    }

    return (
      <Card>
          <CardItem>
              <Left>
                  <Thumbnail source={require("../assets/profile.jpg")}/>
                <Body>
                    <Text>Chandra</Text>
                    <Text note>Jan 22,2019 </Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardBody>
          <Image source = {images[this.props.imageSource]} style={ {height :200,width:null,flex : 1 }}/>
          </CardItem>
          <CardItem style={{height : 45}}>
              <Left>
                  <Button transparent>
                  <Icon name="ios-heart" style={{color: "black"}}/>
                  </Button>
                  <Button transparent>
                  <Icon name="ios-chatbubbles" style={{color: "black"}}/>
                  </Button>
                  <Button transparent>
                  <Icon name="ios-send" style={{color: "black"}}/>
                  </Button>
              </Left>
          </CardItem>
          <CardItem>
            <Text>{this.props.likes}</Text>
          </CardItem>
          <CardItem>
              <Body>
                  <Text> 
                      <Text style={{fontWeight : "900"}}>Chandra </Text>
                  Great tutorial. I am having a small problem with the icons inside buttons. The icons are left aligned inside the button. Even justifyContent: "center" does not solve the issue. Any suggestions on how to sol
                  By the way, I have been following this video series and I found it really helpful as a beginner in React Native. Thanks a lot!
                  </Text>
              </Body>
          </CardItem> 
      </Card>
    )
  }
}
