//test Home cu~
import React, {Component, useState} from 'react';
import {
  AppRegistry,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerActions,
} from '@react-navigation/drawer';
import adr from '../database/adr.json';
import flatListData2 from '../SecondRun/flatListData5EPE';
import {useNavigation} from '@react-navigation/native';
const Slack = createDrawerNavigator();
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
class FlatlistItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View
          style={{
            backgroundColor: '#F59031',
            width: (screenWidth * 11) / 12,
            height: 45,
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20, marginLeft: 10}}>
            {this.props.item.title}
          </Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 20, marginTop: 10}}>
              <Image
                style={{resizeMode: 'contain', height: '150%'}}
                source={{uri: adr.sc5E.f1}}
              />
            </View>
            <View style={{width: 130}}>
              <Text style={{fontSize: 18, marginTop: 15, left: 7}}>
                {this.props.item.user}
              </Text>
            </View>
            <View style={{height: 20, marginTop: 10, marginLeft: 10}}>
              <Image
                style={{resizeMode: 'contain', height: '150%'}}
                source={{uri: adr.sc5E.f2}}
              />
            </View>

            <Text style={{fontSize: 18, marginTop: 10, left: 5}}>
              {this.props.item.phone}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 20, marginTop: 20}}>
              <Image
                style={{resizeMode: 'contain', height: '150%'}}
                source={{uri: adr.sc5E.f3}}
              />
            </View>
            <View />
            <View style={{width: 140}}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 25,
                  marginRight: 10,
                  marginLeft: 7,
                }}>
                {this.props.item.time}
                <Text style={{fontSize: 18}}> {this.props.item.date}</Text>
              </Text>
            </View>
            <View style={{height: 20, marginTop: 20, marginLeft: 6}}>
              <Image
                style={{resizeMode: 'contain', height: '150%'}}
                source={{uri: adr.sc5E.f4}}
              />
            </View>
            <Text style={{fontSize: 18, marginTop: 25, left: 5}}>
              {this.props.item.price}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 20, marginTop: 20}}>
              <Image
                style={{resizeMode: 'contain', height: '170%'}}
                source={{uri: adr.sc5E.f5}}
              />
            </View>
            <Text style={{fontSize: 18, marginTop: 25, marginLeft: 7}}>
              {this.props.item.address}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default function Services2({navigation}) {
  const [online, setOnline] = useState(true);

  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row', width: screenWidth}}>
        <View style={{width: 100}}>
          <TouchableOpacity onPress={() => setOnline(!online)}>
            <Image
              style={{
                resizeMode: 'contain',
                width: '65%',
                left: screenWidth - 80,
                top: 10,
              }}
              source={online ? {uri: adr.sc5E.f6} : {uri: adr.sc5E.f7}}
            />
          </TouchableOpacity>
          {online ? (
            <Text style={{fontSize: 20, left: 20, color: 'grey', bottom: 22}}>
              Online
            </Text>
          ) : (
            <Text style={{fontSize: 20, left: 20, color: 'grey', bottom: 22}}>
              Offline
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          opacity: 0.5,
          width: (screenWidth * 15) / 16,
          height: 1,
          backgroundColor: 'black',
          alignSelf: 'center',
        }}
      />
      <FlatList
        style={{alignSelf: 'center'}}
        data={flatListData2}
        renderItem={({item, index}) => {
          return <FlatlistItem item={item} index={index} />;
        }}
      />
    </View>
  );
}
