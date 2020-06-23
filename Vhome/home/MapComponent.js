import React from 'react';
// import {StyleSheet} from 'react-native';
// import MapView, {Maker, Callout} from 'react-native-maps';
import MapView from 'react-native-maps';
// import {Marker} from 'react-native-maps';
// import {Data} from '../database/Data';

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
      showsUserLocation={true}>
      {/* <Marker
        flat={true}
        coordinate={20.97598113336549}
        image={Data.map_view.location}
      /> */}
    </MapView>
  );
}
