
import { Container, Content, Icon ,Thumbnail ,Header,Left,Body,Right} from 'native-base';
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
    return(
        <Container>
           {/* setting header view  */}
            <Header>
                <Left><Icon name="ios-camera"  style={{color: "magenta",paddingLeft:10}}/></Left>
                <Body><Text>Instagram</Text></Body>
                <Right><Icon name="ios-send"  style={{color: "magenta",paddingRight:10}}/></Right>
            </Header>
          <Content> 
              <View style={{height : 100}}> 
                 <View style={{flex: 1, flexDirection : 'row',justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 10, }}>
                 <Text style={{fontWeight: 'bold'}}>Stories</Text>
                    <View style={{flexDirection : 'row', alignItems : 'center'}}>
                    <Icon name="md-play" style = {{fontSize : 14}}/>
                       <Text style={{fontWeight: 'bold'}}> Watch All</Text>
                    </View>
                 </View>
                 <View style={{flex:3}}>
                 <ScrollView 
                     horizontal = {true} 
                     showsHorizontalScrollIndicator = {false}
                     contentContainerStyle={
                         {
                             alignItems : "center",
                             paddingStart : 5,
                             paddingEnd : 5
                         }
                     }

                 >
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P1.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P2.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P3.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P4.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P5.png")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P6.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P7.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P8.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P9.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
                     source= {require("../../assets/ProfilePics/P10.jpg")} />
                     <Thumbnail style={{marginHorizontal: 5,borderColor: 'magenta',borderWidth: 2,}}
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
