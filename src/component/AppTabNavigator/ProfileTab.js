import { Icon ,Container,Content,Header,Left,Body,Right, Button} from 'native-base';
import React, { Component } from 'react';
import { View ,Image ,Text} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo'


export default class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="person" style={{color:tintColor}} />
        )
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
                       <Icon name="setting"/>
                     </Button>

                     </View>
                </View>
                </View>
                <View style={{paddingVertical:10,paddingHorizontal:10}}>
                <Text style={{fontWeight:'bold'}}>Chandra Mani</Text>
                <Text>Cricket | Badminton | Computer</Text>
                <Text>cm.com</Text>

                </View>
              </View>

            </Content>
        </Container>
    )
  }
}
