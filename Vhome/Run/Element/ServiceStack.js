import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const Stack = createStackNavigator();
import TextTitle from './TextTitle';
import Services from '../screen5-Service';
import Notification from '../screen6-Notification';
import History from '../screen7-History';
import Reward from '../screen8-Reward';
import OpenDrawer from './OpenDrawer';
// import OpenMapView from './OpenMapView';
import {Data} from '../../database/Data';

export default function ServiceStack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home function"
        component={Services}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#F59031',
          },
          headerTitle: props => <TextTitle {...props} />,
          headerLeft: props => <OpenDrawer {...props} />,
          headerRight: () => (
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Bản đồ')}>
              <Image style={style.map} source={Data.OpenDraw.map} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Thông báo"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: '#F59031',
          },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Lịch sử"
        component={History}
        options={{
          headerStyle: {
            backgroundColor: '#F59031',
          },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Điểm thưởng"
        component={Reward}
        options={{
          headerStyle: {
            backgroundColor: '#F59031',
          },
          headerBackTitleVisible: false,
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}
const style = StyleSheet.create({
  touchable: {marginRight: 5, marginTop: -10},
  map: {width: 30, height: 30, tintColor: 'white'},
});
