import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import langs from '../languages/langs';
import combineReducers from '../redux/reducer/index';
import {Dimensions, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Map from '../home/MapComponent';
import OpenMapView from '../Run/Element/OpenMapView';
import HomeScreen from './screen1-Home';
import SignIn from './screen2-SignIn';
import SignIn2 from '../SecondRun/screen2-SignInEPE';
import SignUp from './screen3-SignUp';
import SignUp2 from '../SecondRun/screen3-SignUpEPE';
import Pass from './screen4-forgetPass';
import Pass2 from '../SecondRun/screen4-forgetPassEPE';
import HealthCare from './screen9-HealthCare';
import Environment from './screen10-Environment';
import Electric from './screen11-Electric';
import fixHome from './screen12-fixHome';
import ContentDrawer2 from '../SecondRun/Element/ContentDrawer2';
import ContentDrawer from './Element/ContentDrawer';
import ServiceStack2 from '../SecondRun/Element/ServiceStack2';
import ServiceStack from './Element/ServiceStack';
const screenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();
const Slack = createDrawerNavigator();
let store = createStore(combineReducers);

function ServiceDraw() {
  return (
    <Slack.Navigator
      drawerStyle={styles.DrawerStyle2}
      drawerContent={props => <ContentDrawer {...props} />}>
      <Slack.Screen name="allServices" component={ServiceStack} />
    </Slack.Navigator>
  );
}
function ServiceDraw2() {
  return (
    <Slack.Navigator
      drawerStyle={styles.DrawerStyle}
      drawerContent={props => <ContentDrawer2 {...props} />}>
      <Slack.Screen name="allServices" component={ServiceStack2} />
    </Slack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bản đồ"
            component={Map}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Bản đồ 2"
            component={OpenMapView}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: true,
            }}
          />
          <Stack.Screen
            name={langs.login}
            component={SignIn}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="SignIn2"
            component={SignIn2}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
              title: 'Đăng nhập',
            }}
          />
          <Stack.Screen
            name="Đăng ký"
            component={SignUp}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="SignUp2"
            component={SignUp2}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
              title: 'Đăng ký',
            }}
          />
          <Stack.Screen
            name="Lấy lại mật khẩu"
            component={Pass}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="forgetPass2"
            component={Pass2}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerTintColor: 'white',
              headerBackTitleVisible: false,
              title: 'Lấy lại mật khẩu',
            }}
          />

          <Stack.Screen
            name="ServiceDraw"
            component={ServiceDraw}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ServiceDraw2"
            component={ServiceDraw2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HealthCare"
            component={HealthCare}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerBackTitleVisible: false,
              headerTintColor: 'white',
              headerTitle: 'Chăm sóc sức khoẻ',
            }}
          />
          <Stack.Screen
            name="Environment"
            component={Environment}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerBackTitleVisible: false,
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="Electric"
            component={Electric}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerBackTitleVisible: false,
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="fixHome"
            component={fixHome}
            options={{
              headerStyle: {
                backgroundColor: '#F59031',
              },
              headerBackTitleVisible: false,
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  DrawerStyle: {
    backgroundColor: 'white',
    width: (11 * screenWidth) / 12,
  },
  DrawerStyle2: {
    backgroundColor: 'white',
    width: (11 * screenWidth) / 12,
  },
});
