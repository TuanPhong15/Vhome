import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {Data} from '../database/Data';
import langs from '../languages/langs';

export default function SignIn({navigation}) {
  const [PasswordVisibility, setPasswordVisibility] = useState(true);
  const [userPhone, setUserPhone] = useState('');
  const [userPass, setUserPass] = useState('');
  const passRef = useRef(null);
  const focusNextField = nextField => {
    nextField.current.focus();
  };
  const CheckInput = () => {
    if (userPhone === '') {
      Alert.alert(langs.errorUsernameIsNull);
    } else if (userPass === '') {
      Alert.alert(langs.errorUsernameIsNull);
    } else if (
      userPhone.trim().length >= 10 &&
      userPhone.trim().length <= 11 &&
      !isNaN(userPhone) &&
      userPhone[0] === '0' &&
      userPass.trim().length >= 5 &&
      userPass.trim().length <= 15
    ) {
      navigation.navigate('ServiceDraw');
    } else {
      Alert.alert(langs.errorPhonenumberIncorrect);
    }
  };
  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
        <Image source={Data.screen2.logo} style={styles.Container3} />
      </View>
      <View style={styles.Container4}>
        <View style={styles.Container5}>
          <Image source={Data.screen2.phone} style={styles.Container6} />
        </View>

        <TextInput
          style={styles.Container7}
          onSubmitEditing={() => focusNextField(passRef)}
          keyboardType="numbers-and-punctuation"
          returnKeyType="go"
          onChangeText={text => {
            setUserPhone(text);
          }}
          placeholder={langs.phonenumber}
        />
      </View>

      <View style={styles.Container8}>
        <View style={styles.Container9}>
          <Image source={Data.screen2.pass} style={styles.Container10} />
        </View>
        <TextInput
          ref={passRef}
          secureTextEntry={PasswordVisibility}
          style={styles.Container11}
          placeholder={langs.password}
          returnKeyType="done"
          onChangeText={text => {
            setUserPass(text);
          }}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Container12}
          onPress={() => setPasswordVisibility(!PasswordVisibility)}>
          <Image
            source={
              PasswordVisibility ? Data.screen2.showpass : Data.screen2.hidepass
            }
            style={styles.Container13}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Container14}>
        <TouchableOpacity style={styles.touchable} onPress={CheckInput}>
          <View style={styles.login}>
            <Text style={styles.textLogin}>{langs.login}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Container16}>
        <View style={styles.Container17}>
          <TouchableOpacity onPress={() => navigation.navigate('Đăng ký')}>
            <Text style={styles.Container18}>{langs.register}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.Container19}>{langs.notRegister}</Text>
        <TouchableOpacity
          style={styles.touchable2}
          onPress={() => navigation.navigate('Lấy lại mật khẩu')}>
          <Text style={styles.Container20}>{langs.forgotPassword}</Text>
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
    alignItems: 'center',
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
    color: '#F59031',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  touchable2: {
    top: 20,
  },
  Container21: {top: 150, color: '#F59031', fontSize: 14},
  login: {
    height: (86 * 60) / 100,
    width: (256 * 60) / 100,
    backgroundColor: '#F59031',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {color: 'white', fontSize: 16},
  touchable: {marginTop: 20},
});
