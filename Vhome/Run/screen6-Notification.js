import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Notification({}) {
  return (
    <View style={styles.Container1}>
      <Text style={styles.Container2}>Không có dữ liệu</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container1: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  Container2: {marginTop: 10},
});
