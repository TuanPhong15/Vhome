import React from 'react';
import {View, Image, Text} from 'react-native';
import adr from '../database/adr.json';
export default function fixHome() {
  return (
    <View>
      <Text>scren11 neeeeeeeee</Text>
      <Image source={{uri: adr.sc11.f1}} />
    </View>
  );
}
