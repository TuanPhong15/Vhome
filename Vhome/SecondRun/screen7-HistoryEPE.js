import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function History2({}) {
  return (
    <View style={style.container1}>
      <Text style={style.text}>Không có dữ liệu</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container1: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  text: {marginTop: 10},
});
