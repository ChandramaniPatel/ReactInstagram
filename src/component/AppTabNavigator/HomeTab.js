
import { Container, Content, Icon ,Thumbnail} from 'native-base';
import React, { Component } from 'react';
import {View ,Text} from "react-native";
import CardComponent from '../CardComponent';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="ios-home" style={{color:tintColor}} />
        )
    }

  render() {
    // return (
    //     <View style={{backgroundColor : 'green',flex : 1}}>
    //     <Text>HomeTab</Text>
    //   </View>
    // )

    return(
        <Container>
          <Content> 
              <View style={{height : 100}}> 
                 <View style={{flex: 1, flexDirection : 'row',justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 7, }}>
                 <Text>Stories</Text>
                  <Text>Watch All</Text>
                 </View>
                 <View style={{flex:3}}>
                 <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P1.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P2.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P3.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P4.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P5.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P6.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P7.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P8.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P9.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P10.jpg")} />
                     <Thumbnail source={{marginHorizontal: '5',borderColor: 'pink',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P11.jpg")} />
                 </ScrollView>
 
                 </View>
              </View>
            <CardComponent imageSource = "11" likes = "999200 likes"></CardComponent>
            <CardComponent imageSource = "1" likes = "1200 likes"></CardComponent>
            <CardComponent imageSource = "2" likes = "2200 likes"></CardComponent>
            <CardComponent imageSource = "3" likes = "3200 likes"></CardComponent>
            <CardComponent imageSource = "4" likes = "4200 likes"></CardComponent>
            <CardComponent imageSource = "5" likes = "5200 likes"></CardComponent>
            <CardComponent imageSource = "6" likes = "6200 likes"></CardComponent>
            <CardComponent imageSource = "7" likes = "7200 likes"></CardComponent>
            <CardComponent imageSource = "8" likes = "8200 likes"></CardComponent>
            <CardComponent imageSource = "9" likes = "9200 likes"></CardComponent>
            <CardComponent imageSource = "10" likes = "22300 likes"></CardComponent>

          </Content> 
          </Container>
      );
  }
}
