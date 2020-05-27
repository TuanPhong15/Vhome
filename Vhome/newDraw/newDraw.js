import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import newDraw1 from './newDraw1';

import newDraw2 from './newDraw2';
import newDraw3 from './newDraw3';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createDrawerNavigator();
function HeaderDraw() {
  return (
    <View>
      <View style={styles.container1}>
        <SafeAreaView style={styles.container2}>
          <Image
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/ava_user.png')}
            style={styles.container3}
          />
        </SafeAreaView>
        <View style={styles.container4}>
          <Text style={styles.container5}>Lưu Hà</Text>
        </View>
        <View style={styles.container6}>
          <Image
            style={styles.container7}
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/introductory_code.png')}
          />

          <Text style={styles.container8}>123456</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container9}>
          <View style={styles.container10}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/notification.png')}
              style={styles.container11}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container12}>Thông báo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container13}>
          <View style={styles.container14}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/history.png')}
              style={styles.container15}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container16}>Lịch sử</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container17}>
          <View style={styles.container18}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/Reward-Points.png')}
              style={styles.container19}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container20}>Điểm thưởng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container21}>
          <View style={styles.container22}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/criteria.png')}
              style={styles.container23}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container24}>Chính sách và cam kết</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container25}>
          <View style={styles.container26}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo_vhome_introduce.png')}
              style={styles.container27}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container28}>Giới thiệu về V-Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container29}>
          <View style={styles.container30}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/cskh.png')}
              style={styles.container31}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container32}>HOTLINE:0123456789</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container33}>
          <View style={styles.container34}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/language.png')}
              style={styles.container35}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container36}>Ngôn ngữ </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container37}>
          <View style={styles.container38}>
            <Image
              source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/log_out.png')}
              style={styles.container39}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.container40}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        drawerStyle={styles.container41}
        drawerContent={HeaderDraw}>
        <Stack.Screen
          name="newDraw1"
          component={newDraw1}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({tintColor}) => (
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png')}
                resizeMode="contain"
                style={styles.container42}
              />
            ),
          }}
        />
        <Stack.Screen
          name="newDraw2"
          component={newDraw2}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: () => (
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png')}
                resizeMode="contain"
                style={styles.container43}
              />
            ),
          }}
        />
        <Stack.Screen
          name="newDraw3"
          component={newDraw3}
          options={{
            drawerLabel: 'Setup',
            drawerIcon: ({tintColor = 'red'}) => (
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png')}
                resizeMode="contain"
                style={styles.container43}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container1: {backgroundColor: 'orange', height: screenHeight / 3.4},
  container2: {alignItems: 'center', height: 130},
  container3: {resizeMode: 'contain', height: '105%'},
  container4: {justifyContent: 'center', alignSelf: 'center'},
  container5: {fontSize: 20, color: 'white'},
  container6: {height: 45, alignItems: 'center'},
  container7: {resizeMode: 'contain', height: '90%', position: 'absolute'},
  container8: {fontSize: 18, color: '#F59031', top: 10, left: 10},
  container9: {flexDirection: 'row', marginTop: 30},
  container10: {height: 40},
  container11: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container12: {fontSize: 18, top: 2, left: 10},
  container13: {flexDirection: 'row', marginTop: 10},
  container14: {height: 40},
  container15: {flexDirection: 'row', marginTop: 10},
  container16: {fontSize: 18, top: 2, left: 10},
  container17: {flexDirection: 'row', marginTop: 10},
  container18: {height: 40},
  container19: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container20: {fontSize: 18, top: 2, left: 10},
  container21: {flexDirection: 'row', marginTop: 10},
  container22: {height: 40},
  container23: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container24: {fontSize: 18, top: 2, left: 10},
  container25: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container26: {height: 40},
  container27: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container28: {fontSize: 18, top: 2, left: 10},
  container29: {flexDirection: 'row', marginTop: 10},
  container30: {height: 40},
  container31: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container32: {fontSize: 18, top: 2, left: 10},
  container33: {flexDirection: 'row', marginTop: 10},
  container34: {height: 40},
  container35: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container36: {fontSize: 18, top: 2, left: 10},
  container37: {flexDirection: 'row', marginTop: 10},
  container38: {height: 40},
  container39: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container40: {fontSize: 18, top: 2, left: 10},
  container41: {
    backgroundColor: 'white',
    width: (3 * screenWidth) / 4,
  },
  container42: {width: 20, height: 20},
  container43: {width: 20, height: 20},
});
