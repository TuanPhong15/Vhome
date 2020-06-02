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
import Modal from 'react-native-modal';
import adr from '../database/adr.json';
export default function Pass({navigation}) {
  const [ModalVisibility, setModalVisibility] = useState(false);
  const goBack = () => {
    setModalVisibility(!ModalVisibility), navigation.navigate('Home');
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 0.5,
          borderColor: '#000',
          height: 55,
          borderRadius: 35,
          marginLeft: 30,
          marginRight: 30,
          marginTop: -70,
        }}>
        <Image
          //We are showing the Image from online
          source={{uri: adr.sc4E.f1}}
          style={{
            padding: 9,
            margin: 15,
            height: 28,
            width: 28,
            resizeMode: 'stretch',
          }}
        />

        <TextInput
          style={{flex: 1, fontSize: 18}}
          placeholder="Số điện thoại nhân viên"
          keyboardType="phone-pad"
        />
      </View>

      <View style={{height: 160, width: 160}}>
        <TouchableOpacity onPress={() => setModalVisibility(!ModalVisibility)}>
          <Image
            source={{uri: adr.sc4E.f2}}
            style={{resizeMode: 'contain', height: '100%', width: '100%'}}
          />
        </TouchableOpacity>
      </View>
      <Text style={{color: 'grey', fontSize: 18}}>
        Bạn chưa nhận được mật khẩu.
      </Text>

      <TouchableOpacity>
        <Text style={{color: 'orange', fontSize: 17, marginTop: 10}}>
          Gửi lại mã xác nhận
        </Text>
      </TouchableOpacity>
      <Modal isVisible={ModalVisibility}>
        <Image
          style={{
            resizeMode: 'contain',
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
          source={{uri: adr.sc4E.f3}}
        />

        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            position: 'absolute',
            alignSelf: 'center',
          }}>
          Yêu cầu của bạn đã được gửi thành {'\n'} công,bạn sẽ nhận được mật
          khẩu mới {'\n'} trong thời gian sớm nhất, có thể việc {'\n'}này sẽ mất
          vài phút.
        </Text>

        <TouchableOpacity onPress={goBack}>
          <Text
            style={{
              fontSize: 20,
              position: 'absolute',
              alignSelf: 'center',
              left: 50,
              bottom: -110,
            }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              position: 'absolute',
              alignSelf: 'center',
              right: 50,
              bottom: -110,
            }}>
            Gọi hỗ trợ
          </Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
