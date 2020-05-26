import React, {Component} from 'react';
import {View, Image, TouchableHighlight, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

export default class drawHeader extends Component {
  render() {
    return (
      <View style={styles.Container1}>
        <TouchableHighlight
          style={styles.Container2}
          // eslint-disable-next-line no-undef
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            style={styles.Container3}
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container1: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Container2: {marginLeft: 10, marginTop: 20},
  Container3: {width: 32, height: 32},
});
