import React, {Component, useState} from 'react';
import {
  AppRegistry,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import adr from '../database/adr.json';
export default function SignIn2({navigation}) {
  const [PasswordVisibility, setPasswordVisibility] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          position: 'absolute',
        }}>
        <Image
          source={{uri: adr.sc2E.f1}}
          style={{
            marginBottom: 600,
            resizeMode: 'contain',
            height: '25%',
          }}
        />
      </View>
      <View
        style={{
          position: 'relative',
          alignSelf: 'stretch',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            left: 45,
            bottom: 15,
            height: 50,
            width: 35,
            padding: 3,
          }}>
          <Image
            source={{uri: adr.sc2E.f2}}
            style={{
              resizeMode: 'contain',
              height: '85%',
              width: '85%',
            }}
          />
        </View>

        <TextInput
          style={{
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
          }}
          placeholder="Số điện thoại nhân viên"
          keyboardType="numeric"
        />
      </View>

      <View
        style={{
          position: 'relative',
          alignSelf: 'stretch',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            left: 45,
            top: 5,
            height: 40,
            width: 35,
            padding: 3,
          }}>
          <Image
            source={{uri: adr.sc2E.f3}}
            style={{
              resizeMode: 'contain',
              height: '80%',
              width: '80%',
            }}
          />
        </View>
        <TextInput
          secureTextEntry={PasswordVisibility}
          style={{
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
          }}
          placeholder="Mật khẩu"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: 'absolute',
            right: 40,
            height: 40,
            width: 35,
            padding: 2,
          }}
          onPress={() => setPasswordVisibility(!PasswordVisibility)}>
          <Image
            source={
              PasswordVisibility ? {uri: adr.sc2E.f4} : {uri: adr.sc2E.f5}
            }
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'relative',
          height: 140,
          width: 140,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ServiceDraw2')}>
          <Image
            source={{uri: adr.sc2E.f6}}
            style={{
              resizeMode: 'contain',
              height: '100%',
              width: '100%',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{position: 'relative', alignItems: 'center'}}>
        <View style={{left: 85}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp2')}>
            <Text style={{fontSize: 16, color: 'orange'}}>Đăng kí ngay</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: -20, right: 50, color: 'grey', fontSize: 16}}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('forgetPass2')}>
          <Text
            style={{
              top: 20,
              color: 'orange',
              fontSize: 16,
              textDecorationLine: 'underline',
            }}>
            Quên mật khẩu
          </Text>
        </TouchableOpacity>
        <Text style={{top: 150, color: 'orange', fontSize: 14}}>19008644</Text>
      </View>
    </View>
  );
}
