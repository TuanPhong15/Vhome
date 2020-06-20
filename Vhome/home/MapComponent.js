import React from 'react';
// import {StyleSheet} from 'react-native';
// import MapView, {Maker, Callout} from 'react-native-maps';
import MapView from 'react-native-maps';
export default function Map() {
  return (
    <MapView
      style={{flex: 1}}
      region={{
        latitude: 20.97598113336549,
        longitude: 105.84446830548454,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    />
  );
}
