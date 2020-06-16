/* eslint-disable no-sequences */
//fix eslint xong loi
import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Data} from '../database/Data';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function SignUp2({navigation}) {
  const [Tick, setTick] = useState(true);
  const [Job, setJob] = useState('Hút bể phốt');
  // const [Job2, setJob2] = useState('Thông tắc cống');
  // const [Job3, setJob3] = useState('Sửa chữa điều hoà');
  // const [Job4, setJob4] = useState('Khoan cắt bê tông');
  // const [Job5, setJob5] = useState('Chăm sóc sức khoẻ');
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(true);
  // const [Tick, setTick] = useState(true);
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const repassRef = useRef(null);
  const introductionRef = useRef(null);
  const focusNextField = nextField => {
    nextField.current.focus();
  };
  return (
    <View style={style.header}>
      <View style={style.container1}>
        <Image source={Data.screen3E.phone} style={style.image1} />
        <TextInput
          style={style.textinput}
          placeholder="Số điện thoại nhân viên"
          keyboardType="phone-pad"
          onSubmitEditing={() => focusNextField(nameRef)}
        />
      </View>
      <View style={style.container2}>
        <Image source={Data.screen3E.user} style={style.image2} />
        <TextInput
          style={style.textinput}
          placeholder="Họ và tên"
          onSubmitEditing={() => focusNextField(passRef)}
          ref={nameRef}
        />
      </View>
      <View style={style.container3}>
        <Image source={Data.screen3E.pass} style={style.image3} />
        <TextInput
          ref={passRef}
          onSubmitEditing={() => focusNextField(repassRef)}
          style={style.textinput}
          placeholder="Mật khẩu"
          secureTextEntry="true"
        />
      </View>
      <View style={style.container3}>
        <Image source={Data.screen3E.repass} style={style.image2} />
        <TextInput
          // ref={repassRef}
          // onSubmitEditing={() => focusNextField(introductionRef)}
          onSubmitEditing={() => {
            setShow(!show), setShow2(!show2);
          }}
          style={style.textinput}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry="true"
        />
      </View>
      {show && (
        <View style={style.container4}>
          <View style={style.container5}>
            <TouchableOpacity
              style={style.touchable7}
              onPress={() => {
                setJob('Sửa bồn rửa bát'), setShow(!show), setShow2(!show2);
                // focusNextField(introductionRef);
              }}>
              <Text style={style.text}>Sửa bồn rửa bát</Text>
            </TouchableOpacity>
            <View style={style.container6} />
            <TouchableOpacity
              style={style.touchable}
              onPress={() => {
                setJob('Thông tắc cống'), setShow(!show), setShow2(!show2);
              }}>
              <Text style={style.text}>Thông tắc cống</Text>
            </TouchableOpacity>
            <View style={style.container7} />

            <TouchableOpacity
              style={style.touchable2}
              onPress={() => {
                setJob('Thông tắc bồn cầu'), setShow(!show), setShow2(!show2);
              }}>
              <Text style={style.text}>Thông tắc bồn cầu</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={style.container8}>
        <Image source={Data.screen3E.supplies} style={style.image4} />

        <View>
          <TouchableOpacity
            style={style.touchable0}
            onPress={() => {
              setShow(!show), setShow2(!show2);
            }}>
            <Text style={style.text}>{Job}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {show2 && (
        <View>
          <View style={style.container9}>
            <Image source={Data.screen3E.magiamgia} style={style.image5} />

            <TextInput
              style={style.textinput}
              placeholder="Mã giới thiệu"
              ref={introductionRef}
            />
          </View>
          <View style={style.container10}>
            <TouchableOpacity
              style={style.touchable3}
              onPress={() => setTick(!Tick)}>
              <Image
                source={Tick ? Data.screen3E.tick : Data.screen3E.tick2}
                style={style.image6}
              />
            </TouchableOpacity>
            {/* <Image source={(PasswordVisibility) ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/showpass.png') : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/hidepass.png')} */}

            <Text style={style.text2}>
              Tôi đồng ý với các điều khoản và chính sách của V-Home
            </Text>
          </View>
        </View>
      )}

      <View style={style.container11}>
        <TouchableOpacity style={style.touchable4}>
          <View style={style.registration}>
            <Text style={style.text5}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
        <Text style={style.text3}>Bạn đã có tài khoản?</Text>

        <TouchableOpacity
          style={style.touchable5}
          onPress={() => navigation.navigate('SignIn2')}>
          <Text style={style.text4}>Về đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  container1: {
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
  image1: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  textinput: {flex: 1, fontSize: 18},
  container2: {
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
  image2: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  container3: {
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
  image3: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  container4: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container5: {
    width: screenWidth - 60,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderTopColor: 'white',
    top: 42,
    height: screenHeight / 5.8,
    position: 'absolute',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
  touchable0: {
    marginLeft: screenWidth / 8,
  },
  container6: {
    backgroundColor: 'grey',
    top: 45,
    width: screenWidth - 60,
    height: 1,
  },
  touchable: {top: 58, left: 30},
  container7: {
    backgroundColor: 'grey',
    top: 70,
    width: screenWidth - 60,
    height: 1,
  },
  touchable2: {top: 82, left: 30},
  container8: {
    flexDirection: 'row',
    // justifyContent: 'center',
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
  image4: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    position: 'absolute',
  },
  container9: {
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
  image5: {
    padding: 9,
    margin: 15,
    height: 23,
    width: 23,
    resizeMode: 'stretch',
  },
  container10: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 48,
    marginTop: 20,
  },
  touchable3: {
    position: 'relative',
  },
  image6: {
    resizeMode: 'contain',
    height: '28%',
  },
  text2: {fontSize: 18, color: 'grey'},
  container11: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: screenHeight / 1.35,
  },
  image7: {
    resizeMode: 'contain',
    height: '80%',
  },
  text3: {fontSize: 15, marginLeft: -120, color: 'grey'},
  text4: {color: 'orange', fontSize: 15},
  touchable5: {marginLeft: 120, top: -20},
  touchable4: {bottom: 35},
  touchable7: {bottom: -35, left: 30},
  registration: {
    width: (258 * 60) / 100,
    height: (86 * 60) / 100,
    backgroundColor: '#F59031',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable6: {bottom: 20},
  text5: {fontSize: 18, color: 'white'},
});
