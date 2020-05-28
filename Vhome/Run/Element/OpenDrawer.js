import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import adr from '../../database/adr.json';
export default function OpenDrawer() {
  const {openDrawer} = useNavigation();

  return (
    <View
      style={{
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{marginLeft: 5, marginTop: -5}}
        onPress={openDrawer}>
        <Image
          style={{width: 35, height: 35, tintColor: 'white'}}
          source={{uri: adr.OpenDraw.f1}}
        />
      </TouchableOpacity>
    </View>
  );
}
