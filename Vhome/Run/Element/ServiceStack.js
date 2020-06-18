import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import TextTitle from './TextTitle';
import Services from '../screen5-Service';
import Notification from '../screen6-Notification';
import History from '../screen7-History';
import Reward from '../screen8-Reward';
import OpenDrawer from './OpenDrawer';
import OpenMapView from './OpenMapView'
export default function ServiceStack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home function"
        component={Services}
        options={{
          headerStyle: {
            backgroundColor: '#F59031',
          },
          headerTitle: props => <TextTitle {...props} />,
          headerLeft: props => <OpenDrawer {...props} />,
          headerRight: props => <OpenMapView {...props}/>,
        }}
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
