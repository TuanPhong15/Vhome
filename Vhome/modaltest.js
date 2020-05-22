
import React, { Component } from 'react';
import {
  AppRegistry, FlatList, Dimensions, StyleSheet, Text, View, Image, Keyboard, Alert, TouchableOpacity
} from 'react-native';
import Button from 'react-native-button'
const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;
class FlatlistItem extends Component {
  constructor(props) {
    super(props)

  }
  render() {

    return (
      <View style={{ flexDirection: 'column',alignItems:'center' }}>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>


          <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2,marginLeft:8, marginRight:8, marginTop:0}}>
            <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
              source={{ uri: this.props.item.image }}></Image>
              
              
              </View>




        </View></View>
  

    )
  }
}
export default class flatlistonclick extends Component {
  render() {
    return (
      

      <View>

        <FlatList
          style={{  }}
          numColumns={2}
          horizontal={false}
          data={flatListdata}
          renderItem={({ item, index }) => {
            return (
              <FlatlistItem item={item} index={index}></FlatlistItem>
            )
          }}></FlatList>

      </View>
    )
  }
}