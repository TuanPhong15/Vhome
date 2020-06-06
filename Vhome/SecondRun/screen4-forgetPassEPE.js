/* eslint-disable no-sequences */
import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {Data} from '../database/Data';
export default function Pass({navigation}) {
  const [ModalVisibility, setModalVisibility] = useState(false);
  const goBack = () => {
    setModalVisibility(!ModalVisibility), navigation.navigate('Home');
  };
  return (
    <View style={style.header}>
      <View style={style.container1}>
        <Image
          //We are showing the Image from online
          source={Data.screen4E.phone}
          style={style.image1}
        />

        <TextInput
          style={style.textinput}
          placeholder="Số điện thoại nhân viên"
          keyboardType="phone-pad"
        />
      </View>

      <View style={style.container2}>
        <TouchableOpacity onPress={() => setModalVisibility(!ModalVisibility)}>
          <Image
            source={Data.screen4E.password_retrieval}
            style={style.image2}
          />
        </TouchableOpacity>
      </View>
      <Text style={style.text}>Bạn chưa nhận được mật khẩu.</Text>

      <TouchableOpacity>
        <Text style={style.text2}>Gửi lại mã xác nhận</Text>
      </TouchableOpacity>
      <Modal isVisible={ModalVisibility}>
        <Image style={style.image3} source={Data.screen4E.box_vhome} />

        <Text style={style.text3}>
          Yêu cầu của bạn đã được gửi thành {'\n'} công,bạn sẽ nhận được mật
          khẩu mới {'\n'} trong thời gian sớm nhất, có thể việc {'\n'}này sẽ mất
          vài phút.
        </Text>

        <TouchableOpacity onPress={goBack}>
          <Text style={style.text4}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.text5}>Gọi hỗ trợ</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
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
  },
  image1: {
    padding: 9,
    margin: 15,
    height: 28,
    width: 28,
    resizeMode: 'stretch',
  },
  textinput: {flex: 1, fontSize: 18},
  container2: {height: 160, width: 160},
  image2: {resizeMode: 'contain', height: '100%', width: '100%'},
  text: {color: 'grey', fontSize: 18},
  text2: {color: 'orange', fontSize: 17, marginTop: 10},
  image3: {
    resizeMode: 'contain',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  text3: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  text4: {
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    left: 50,
    bottom: -110,
  },
  text5: {
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    right: 50,
    bottom: -110,
  },
});
