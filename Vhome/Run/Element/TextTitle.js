import React from 'react';
import adr from '../../database/adr.json';
import {View, Image, TextInput, StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default function TextTitle() {
  return (
    <View style={styles.Container1}>
      <TextInput placeholder="Tìm kiếm dịch vụ" style={styles.Container2} />
      <View style={styles.Container3}>
        <Image source={{uri: adr.Title.f1}} style={styles.Container4} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  Container2: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    width: screenWidth - 78,
    height: 42,
    paddingRight: 45,
    paddingLeft: 45,
    marginTop: -2,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 25,
    backgroundColor: 'white',
  },
  Container3: {
    position: 'absolute',
    left: 23,
    top: 1,
    height: 50,
    width: 35,
    padding: 3,
  },
  Container4: {
    resizeMode: 'contain',
    height: '85%',
    width: '85%',
  },
});
