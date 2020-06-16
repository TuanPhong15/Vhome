import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Data} from '../database/Data';
export default function SignUp({navigation}) {
  const [Tick, setTick] = useState(true);
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const repassRef = useRef(null);
  const introductionRef = useRef(null);
  const focusNextField = nextField => {
    nextField.current.focus();
  };
  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
        <Image source={Data.screen3.phone} style={styles.Container3} />
        <TextInput
          style={styles.Container4}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
          onSubmitEditing={() => focusNextField(nameRef)}
        />
      </View>
      <View style={styles.Container5}>
        <Image source={Data.screen3.user} style={styles.Container6} />
        <TextInput
          style={styles.Container7}
          placeholder="Họ và tên"
          ref={nameRef}
          onSubmitEditing={() => focusNextField(passRef)}
        />
      </View>
      <View style={styles.Container8}>
        <Image source={Data.screen3.pass} style={styles.Container9} />
        <TextInput
          onSubmitEditing={() => focusNextField(repassRef)}
          style={styles.Container10}
          placeholder="Mật khẩu"
          ref={passRef}
        />
      </View>
      <View style={styles.Container11}>
        <Image source={Data.screen3.repass} style={styles.Container12} />
        <TextInput style={styles.Container13} placeholder="Nhập lại mật khẩu" />
      </View>
      <View style={styles.Container14}>
        <Image source={Data.screen3.magiamgia} style={styles.Container15} />

        <TextInput
          style={styles.Container16}
          placeholder="Mã giới thiệu"
          ref={introductionRef}
        />
      </View>
      <View style={styles.Container17}>
        <TouchableOpacity
          style={styles.Container18}
          onPress={() => setTick(!Tick)}>
          <Image
            source={Tick ? Data.screen3.tick : Data.screen3.tick2}
            style={styles.Container19}
          />
        </TouchableOpacity>
        <Text style={styles.Container20}>
          Tôi đồng ý với các điều khoản và chính sách của V-Home
        </Text>
      </View>
      <View style={styles.Container21}>
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.registration}>
            <Text style={styles.text}>Đăng kí</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.Container23}>Bạn đã có tài khoản?</Text>

        <TouchableOpacity
          style={styles.touchable2}
          onPress={() => navigation.navigate('Home')}>
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
  Container24: {color: 'orange', fontSize: 15},
  registration: {
    width: (258 * 60) / 100,
    height: (86 * 60) / 100,
    backgroundColor: '#F59031',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 18, color: 'white'},
  touchable: {top: -25},
  touchable2: {top: -18, marginLeft: 120},
});
