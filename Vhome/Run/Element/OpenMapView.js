import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Data} from '../../database/Data';
export default function OpenMapView({navigation}) {
  return (
    <View style={style.header}>
      <TouchableOpacity
        style={style.touchable}
        onPress={() => navigation.navigate('Bản đồ')}>
        <Image style={style.image} source={Data.OpenDraw.menu2} />
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touchable: {marginLeft: 5, marginTop: -5},
  image: {width: 35, height: 35, tintColor: 'white'},
});
