import { Icon ,Container,Content,Header,Left,Body,Right, Button, Row} from 'native-base';
import React, { Component } from 'react';
import { View ,Image ,Text, Dimensions} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CardComponent from '../CardComponent';

var images = [
    require("../../assets/profile.jpg"),
    require("../../assets/red.jpg"),
    require("../../assets/redp.jpg"),
    require("../../assets/repu.jpg"),
    require("../../assets/tf2.jpg"),
    require("../../assets/swr.jpg"),
    require("../../assets/snp.jpg"),
    require("../../assets/sn.jpg"),
    require("../../assets/swt.jpg"),
    require("../../assets/inspired.jpg"),
    require("../../assets/Fearless.jpg"),
    require("../../assets/profile.jpg"),
    require("../../assets/profile.jpg"),
    require("../../assets/red.jpg"),
    require("../../assets/redp.jpg"),
    require("../../assets/repu.jpg"),
    require("../../assets/tf2.jpg"),
    require("../../assets/swr.jpg"),
    require("../../assets/snp.jpg"),
    require("../../assets/sn.jpg"),
    require("../../assets/swt.jpg"),
    require("../../assets/inspired.jpg"),
    require("../../assets/Fearless.jpg"),
    require("../../assets/profile.jpg"),
    require("../../assets/profile.jpg"),
    require("../../assets/red.jpg"),
    require("../../assets/redp.jpg"),
    require("../../assets/repu.jpg"),
    require("../../assets/tf2.jpg"),
    require("../../assets/swr.jpg"),
    require("../../assets/snp.jpg"),
    require("../../assets/sn.jpg"),
    require("../../assets/swt.jpg"),
    require("../../assets/inspired.jpg"),
    require("../../assets/Fearless.jpg"),
    require("../../assets/profile.jpg"),
    require("../../assets/profile.jpg"),
    require("../../assets/red.jpg"),
    require("../../assets/redp.jpg"),
    require("../../assets/repu.jpg"),
    require("../../assets/tf2.jpg"),
    require("../../assets/swr.jpg"),
    require("../../assets/snp.jpg"),
    require("../../assets/sn.jpg"),
    require("../../assets/swt.jpg"),
    require("../../assets/inspired.jpg"),
    require("../../assets/Fearless.jpg"),
    require("../../assets/profile.jpg"),
]

var {width,height} = Dimensions.get("window")

export default class ProfileTab extends Component {

  static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="person" style={{color:tintColor}} />
        )
    }
  constructor(props){
    super(props)

    this.state = {
      activeIndex:0
    }
  }
  segmentClicked = (index) =>{
    this.setState({
      activeIndex:index
    })
  }

  renderSectionOne = () => {
    return images.map((image,index) =>{
        
        return (
          <View key={index} style={[{width:(width)/3},{height:(width)/3},{marginBottom:2},
          index %3 !== 0 ? {paddingLeft:2} :{paddingLeft:0}
          ]}>
          <Image style = {{flex:1,width:undefined,height:undefined}} 
          source = {image}
          />

          </View>
        )

    })
  }

  renderSectionTwo = () => {
    return (
      <View>
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
      </View>
    )
  }

  renderSection = () =>{
    
    if(this.state.activeIndex == 0){
      return (
        <View style={{flexDirection:"row",flexWrap:"wrap"}}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if(this.state.activeIndex == 1){
      //{this.renderSectionTwo()}
      return (
      <View>
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
      </View>
    )

    }
  }

  render() {
    return (
        <Container style={{flex:1,backgroundColor:'white',}}>
           {/* setting header view  */}
            <Header>
                <Left><Icon name="md-person-add"  style={{color: "magenta",paddingLeft:10}}/></Left>
                <Body><Text>Chandra</Text></Body>
                <Right><EntypoIcon name="back-in-time"  style={{color: "magenta",paddingRight:10,fontSize:32}}/></Right>
            </Header>

            <Content>
              <View style={{paddingTop:10}}>
                <View style={{flexDirection : "row"}}>
                <View style={{flex:1,alignItems:"center"}}>  
                  <Image source={require("../../assets/profile.jpg")}  
                  style={{width:75,height:75,borderRadius:37.5}}
                  />
                </View>
                <View style={{flex:3}}>
                     <View style={{flexDirection : 'row',justifyContent:'space-around'}}>
                         <View style={{alignItems:"center"}} >
                         <Text>20</Text>
                         <Text style={{fontSize:10,color:'grey'}}>Posts</Text>
                         </View>
                         
                         <View style={{alignItems:"center"}} >
                         <Text>240</Text>
                         <Text style={{fontSize:10,color:'grey'}}>Followers</Text>
                         </View>

                         <View style={{alignItems:"center"}} >
                         <Text>540</Text>
                         <Text style={{fontSize:10,color:'grey'}}>Followings</Text>
                         </View>

                     </View>

                     <View style = {{flexDirection:"row",paddingTop:10}}>
                         <Button bordered dark style={{flex:3,marginLeft:10,justifyContent:"center",height:30}}>
                             <Text>Edit Profile</Text>
                         </Button>

                          <Button bordered dark style={{flex:1,marginRight:10, marginLeft:5,justifyContent:"center",height:30}}>
                              <Icon  style = {{marginTop:-5, justifyContent:"center"}}name="ios-settings"/>
                          </Button>

                     </View>
                 </View>
                </View>
                <View style={{paddingVertical:10,paddingHorizontal:10}}>
                    <Text style={{fontWeight:'bold'}}>Chandra Mani</Text>
                    <Text>Cricket | Badminton | Computer</Text>
                    <Text>www.cm.com/unplugged</Text>
                </View>
              </View>

              <View>

                <View style={{flexDirection: 'row',justifyContent:"space-around",borderTopWidth:1,borderTopColor:"#eae5e5"}}>
                
                <Button 
                  transparent 
                  onPress={()=>this.segmentClicked(0)}
                  active={this.state.activeIndex==0}
                >
                  <Icon name="ios-apps"
                    style={[this.state.activeIndex == 0 ? {} : {color: 'grey'}]}
                  />
                </Button>

                <Button 
                transparent 
                onPress={()=>this.segmentClicked(1)}
                active={this.state.activeIndex==1}
                >
                  <Icon name="ios-list"
                   style={[this.state.activeIndex == 1 ? {} : {color: 'grey'}]}
                  />
                </Button>

                <Button 
                transparent 
                onPress={()=>this.segmentClicked(2)}
                active={this.state.activeIndex==2}
                >
                  <Icon name="ios-people"
                   style={[this.state.activeIndex == 2 ? {} : {color: 'grey'}]}
                  />
                </Button>

                <Button 
                transparent 
                onPress={()=>this.segmentClicked(3)}
                active={this.state.activeIndex==3}
                >
                  <Icon name="ios-bookmark"
                   style={[this.state.activeIndex == 3 ? {} : {color: 'grey'}]}
                  />
                </Button>

                </View>
                {this.renderSection()}

              </View>

            </Content>
        </Container>
    )
  }
}
