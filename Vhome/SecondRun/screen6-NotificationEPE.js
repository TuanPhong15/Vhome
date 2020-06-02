import React, {Component, useState} from 'react';
import {
  AppRegistry,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from 'react-native';
import adr from '../database/adr.json';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Notification2({}) {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <Text style={{marginTop: 10}}>Không có dữ liệu</Text>
    </View>
  );
}
