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
export default function SignIn({navigation}) {
  const [PasswordVisibility, setPasswordVisibility] = useState(true);

  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
        <Image source={{uri: adr.sc2.f1}} style={styles.Container3} />
      </View>
      <View style={styles.Container4}>
        <View style={styles.Container5}>
          <Image source={{uri: adr.sc2.f2}} style={styles.Container6} />
        </View>

        <TextInput
          style={styles.Container7}
          placeholder="Số điện thoại"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.Container8}>
        <View style={styles.Container9}>
          <Image source={{uri: adr.sc2.f3}} style={styles.Container10} />
        </View>
        <TextInput
          secureTextEntry={PasswordVisibility}
          style={styles.Container11}
          placeholder="Mật khẩu"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Container12}
          onPress={() => setPasswordVisibility(!PasswordVisibility)}>
          <Image
            source={PasswordVisibility ? {uri: adr.sc2.f4} : {uri: adr.sc2.f5}}
            style={styles.Container13}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Container14}>
        <TouchableOpacity onPress={() => navigation.navigate('ServiceDraw')}>
          <Image source={{uri: adr.sc2.f6}} style={styles.Container15} />
        </TouchableOpacity>
      </View>
      <View style={styles.Container16}>
        <View style={styles.Container17}>
          <TouchableOpacity onPress={() => navigation.navigate('Đăng ký')}>
            <Text style={styles.Container18}>Đăng kí ngay</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.Container19}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Lấy lại mật khẩu')}>
          <Text style={styles.Container20}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <Text style={styles.Container21}>19008644</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Container2: {
    position: 'absolute',
  },
  Container3: {
    marginBottom: 600,
    resizeMode: 'contain',
    height: '25%',
  },
  Container4: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  Container5: {
    position: 'absolute',
    left: 45,
    bottom: 15,
    height: 50,
    width: 35,
    padding: 3,
  },
  Container6: {
    resizeMode: 'contain',
    height: '85%',
    width: '85%',
  },
  Container7: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 17,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 45,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 25,
    marginBottom: 20,
  },
  Container8: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  Container9: {
    position: 'absolute',
    left: 45,
    top: 5,
    height: 40,
    width: 35,
    padding: 3,
  },
  Container10: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
  },
  Container11: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 17,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 45,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 25,
  },
  Container12: {
    position: 'absolute',
    right: 40,
    height: 40,
    width: 35,
    padding: 2,
  },
  Container13: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  Container14: {
    position: 'relative',
    height: 140,
    width: 140,
  },
  Container15: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  Container16: {
    position: 'relative',
    alignItems: 'center',
  },
  Container17: {
    left: 85,
  },
  Container18: {fontSize: 16, color: '#F59031'},
  Container19: {marginTop: -20, right: 50, color: 'grey', fontSize: 16},
  Container20: {
    top: 20,
    color: '#F59031',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  Container21: {top: 150, color: '#F59031', fontSize: 14},
});
