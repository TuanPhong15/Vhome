import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import langs from '../languages/langs';
import {connect} from 'react-redux';

function Notification({}) {
  return (
    <View style={styles.Container1}>
      <Text style={styles.Container2}>{langs.notification}</Text>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    language: state.config.language,
  };
};
export default connect(
  mapStateToProps,
  null,
)(Notification);
const styles = StyleSheet.create({
  Container1: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  Container2: {marginTop: 10},
});
