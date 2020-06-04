import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Notification2({}) {
  return (
    <View style={style.header}>
      <Text style={style.text}>Không có dữ liệu</Text>
    </View>
  );
}
const style = StyleSheet.create({
  header: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  text: {marginTop: 10},
});
