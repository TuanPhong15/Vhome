import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function History({}) {
  return (
    <View style={styles.container1}>
      <Text style={styles.container2}>Không có dữ liệu</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  container2: {marginTop: 10},
});
