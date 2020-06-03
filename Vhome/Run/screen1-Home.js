import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {Data} from '../database/Data';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.header}>
      <View style={{height: screenHeight / 4.4}}>
        <Image style={styles.containerI} source={Data.screen1.logo} />
      </View>
      <View style={styles.containerII} />
      <View style={styles.containerIII} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Đăng nhập')}
        style={styles.containnerIIIT}>
        <Image style={styles.containerIV} source={Data.screen1.customer} />
      </TouchableOpacity>
      <View style={styles.containerV} />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn2')}>
        <Image style={styles.containerVI} source={Data.screen1.employees} />
      </TouchableOpacity>
      <Text style={styles.footer}>V-HOME V1.0</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: screenWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  containerI: {marginBottom: 10, resizeMode: 'contain', height: '90%'},
  containerII: {
    backgroundColor: '#F59031',
    height: 1,
    width: (screenWidth * 3) / 3.5,
  },
  containerIII: {
    backgroundColor: '#F59031',
    width: 1,
    height: (screenWidth * 1) / 6,
  },
  containnerIIIT: {
    marginTop: -12,
  },
  containerIV: {width: 182.5, height: 53.75},
  containerV: {
    backgroundColor: '#F59031',
    width: 1,
    height: (screenWidth * 1) / 6,
  },
  containerVI: {width: 182.5, height: 53.75, marginTop: -1},
  footer: {
    top: screenHeight / 6,
    color: '#F59031',
    fontSize: 15,
  },
});
