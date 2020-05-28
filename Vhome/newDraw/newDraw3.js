import React from 'react';
import {
  TouchableHighlight,
  Dimensions,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
import adr from '../database/adr.json';

export default function newDraw3({navigation}) {
  return (
    <View>
      <View style={style.container}>
        <TouchableHighlight
          style={style.container2}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image style={style.container3} source={{uri: adr.Draw3.f1}} />
        </TouchableHighlight>
      </View>
      <View styles={style.container4}>
        <Text style={style.container5}>Screen 3</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.creater({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container2: {marginLeft: 10, marginTop: 20},
  container3: {width: 32, height: 32},
  container4: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: screenWidth,
    backgroundColor: 'white',
  },
  container5: {marginLeft: 180, marginTop: 180, fontSize: 20},
});
