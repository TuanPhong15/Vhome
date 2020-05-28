import React from 'react';
import {Button, TouchableHighlight, View, Image, Text} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import adr from '../database/adr.json';

export default function newDraw2({navigation}) {
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
          <Image style={{width: 32, height: 32}} source={{uri: adr.Draw2.f1}} />
        </TouchableHighlight>
      </View>
      <View
        styles={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',

          backgroundColor: 'white',
          marginTop: 720,
        }}>
        <Text style={{marginLeft: 150, marginTop: 130, fontSize: 30}}>
          Screen 2
        </Text>
        <Button
          title="Click here"
          onPress={() => navigation.navigate('newDraw3')}
          styles={{marginTop: 750, backgroundColor: 'red'}}
        />
      </View>
    </View>
  );
}
