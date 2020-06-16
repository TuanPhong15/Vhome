import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Data} from '../database/Data';
export default function SignIn2({navigation}) {
  const [PasswordVisibility, setPasswordVisibility] = useState(true);
  // const passRef = React.createRef('pass');
  // const focusNextField = nextField => {
  //   this.refs[nextField].focus();
  // };
  return (
    <View style={style.all}>
      <View style={style.container1}>
        <Image source={Data.screen2.logo} style={style.image1} />
      </View>
      <View style={style.container2}>
        <View style={style.container3}>
          <Image source={Data.screen2.phone} style={style.image2} />
        </View>

        <TextInput
          style={style.textinput}
          placeholder="Số điện thoại nhân viên"
          keyboardType="numeric"
          // onSubmitEditing={focusNextField('pass')}
        />
      </View>

      <View style={style.container4}>
        <View style={style.container5}>
          <Image source={Data.screen2.pass} style={style.image3} />
        </View>
        <TextInput
          // ref={passRef}
          secureTextEntry={PasswordVisibility}
          style={style.textinput2}
          placeholder="Mật khẩu"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={style.touchable}
          onPress={() => setPasswordVisibility(!PasswordVisibility)}>
          <Image
            source={
              PasswordVisibility ? Data.screen2.showpass : Data.screen2.hidepass
            }
            style={style.image4}
          />
        </TouchableOpacity>
      </View>
      <View style={style.container6}>
        <TouchableOpacity
          style={style.touchable2}
          onPress={() => navigation.navigate('ServiceDraw2')}>
          <View style={style.login}>
            <Text style={style.textLogin}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.container7}>
        <View style={style.container8}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp2')}>
            <Text style={style.text}>Đăng kí ngay</Text>
          </TouchableOpacity>
        </View>
        <Text style={style.text2}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity
          style={style.touchable2}
          onPress={() => navigation.navigate('forgetPass2')}>
          <Text style={style.text3}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <Text style={style.text4}>19008644</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container1: {
    position: 'absolute',
  },
  image1: {
    marginBottom: 600,
    resizeMode: 'contain',
    height: '25%',
  },
  container2: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  container3: {
    position: 'absolute',
    left: 45,
    bottom: 15,
    height: 50,
    width: 35,
    padding: 3,
  },
  image2: {
    resizeMode: 'contain',
    height: '85%',
    width: '85%',
  },
  textinput: {
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
  container4: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  container5: {
    position: 'absolute',
    left: 45,
    top: 5,
    height: 40,
    width: 35,
    padding: 3,
  },
  image3: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
  },
  textinput2: {
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
  touchable: {
    position: 'absolute',
    right: 40,
    height: 40,
    width: 35,
    padding: 2,
  },
  image4: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  container6: {
    position: 'relative',
    height: 140,
    width: 140,
  },
  image5: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  container7: {position: 'relative', alignItems: 'center'},
  container8: {left: 85},
  text: {fontSize: 16, color: 'orange'},
  text2: {marginTop: -20, right: 50, color: 'grey', fontSize: 16},
  text3: {
    color: 'orange',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  touchable2: {
    top: 20,
  },
  text4: {top: 150, color: 'orange', fontSize: 14},
  login: {
    height: (86 * 60) / 100,
    width: (256 * 60) / 100,
    backgroundColor: '#F59031',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {color: 'white', fontSize: 16},
});
