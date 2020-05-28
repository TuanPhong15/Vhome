import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import adr from '../database/adr.json';

export default function SignUp({navigation}) {
  const [Tick, setTick] = useState(true);
  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
        <Image
          //We are showing the Image from online
          source={{uri: adr.sc3.f1}}
          style={styles.Container3}
        />
        <TextInput
          style={styles.Container4}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.Container5}>
        <Image source={{uri: adr.sc3.f2}} style={styles.Container6} />
        <TextInput style={styles.Container7} placeholder="Họ và tên" />
      </View>
      <View style={styles.Container8}>
        <Image source={{uri: adr.sc3.f3}} style={styles.Container9} />
        <TextInput style={styles.Container10} placeholder="Mật khẩu" />
      </View>
      <View style={styles.Container11}>
        <Image source={{uri: adr.sc3.f4}} style={styles.Container12} />
        <TextInput style={styles.Container13} placeholder="Nhập lại mật khẩu" />
      </View>
      <View style={styles.Container14}>
        <Image source={{uri: adr.sc3.f5}} style={styles.Container15} />

        <TextInput style={styles.Container16} placeholder="Mã giới thiệu" />
      </View>
      <View style={styles.Container17}>
        <TouchableOpacity
          style={styles.Container18}
          onPress={() => setTick(!Tick)}>
          <Image
            source={Tick ? {uri: adr.sc3.f6} : {uri: adr.sc3.f7}}
            style={styles.Container19}
          />
        </TouchableOpacity>
        <Text style={styles.Container20}>
          Tôi đồng ý với các điều khoản và chính sách của V-Home
        </Text>
      </View>
      <View style={styles.Container21}>
        <TouchableOpacity>
          <Image source={{uri: adr.sc3.f8}} style={styles.Container22} />
        </TouchableOpacity>
        <Text style={styles.Container23}>Bạn đã có tài khoản?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.Container24}>Về đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  Container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 46,
    borderRadius: 25,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 60,
  },
  Container3: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  Container4: {flex: 1, fontSize: 18},
  Container5: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 46,
    borderRadius: 25,
    marginLeft: 30,
    marginRight: 30,
  },
  Container6: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  Container7: {flex: 1, fontSize: 18},
  Container8: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 46,
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
  },
  Container9: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  Container10: {flex: 1, fontSize: 18},
  Container11: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 46,
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
  },
  Container12: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  Container13: {flex: 1, fontSize: 18},
  Container14: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 46,
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 20,
    marginRight: 30,
  },
  Container15: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  Container16: {flex: 1, fontSize: 18},
  Container17: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 48,
    marginTop: -20,
  },
  Container18: {
    position: 'relative',
  },
  Container19: {
    resizeMode: 'contain',
    height: '18%',
  },
  Container20: {fontSize: 18, color: 'grey'},
  Container21: {
    alignItems: 'center',
    height: 80,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Container22: {resizeMode: 'contain', height: '80%'},
  Container23: {fontSize: 15, marginLeft: -120, color: 'grey'},
  Container24: {marginLeft: 120, top: -18, color: 'orange', fontSize: 15},
});
