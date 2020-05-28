import React from 'react';
import {TouchableHighlight, Dimensions, View, Image} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import adr from '../database/adr.json';

const screenWidth = Dimensions.get('window').width;

export default function newDraw1({navigation}) {
  return (
    <View>
      <View
        style={{
          height: 90,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableHighlight
          style={{marginLeft: 10, marginTop: 20}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image style={{width: 32, height: 32}} source={{uri: adr.Draw1.f1}} />
        </TouchableHighlight>
      </View>

      <View style={{flexDirection: 'column'}}>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: -17}}>
          <View
            style={{
              height: screenWidth / 2.2,
              width: screenWidth / 2.2,
              marginRight: 8,
            }}>
            <Image
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
              source={{uri: adr.Draw1.f2}}
            />
          </View>

          <View
            style={{
              height: screenWidth / 2.2,
              width: screenWidth / 2.2,
              marginLeft: 8,
            }}>
            <Image
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
              source={{uri: adr.Draw1.f3}}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 16, alignSelf: 'center'}}>
          <View
            style={{
              height: screenWidth / 2.2,
              width: screenWidth / 2.2,
              marginRight: 8,
            }}>
            <Image
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
              source={{uri: adr.Draw1.f4}}
            />
          </View>

          <View
            style={{
              height: screenWidth / 2.2,
              width: screenWidth / 2.2,
              marginLeft: 8,
            }}>
            <Image
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
              source={{uri: adr.Draw1.f5}}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 16, alignSelf: 'center'}}>
          <View
            style={{
              height: screenWidth / 2.2,
              width: screenWidth / 2.2,
              marginRight: 8,
            }}>
            <Image
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
              source={{uri: adr.Draw1.f6}}
            />
          </View>

          <View
            style={{
              height: screenWidth / 2.2,
              width: screenWidth / 2.2,
              marginLeft: 8,
            }}>
            <Image
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
              source={{uri: adr.Draw1.f7}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
