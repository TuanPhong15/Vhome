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
import adr from '../database/adr.json';

export default function Pass({navigation}) {
  const [ModalVisibility, setModalVisibility] = useState(false);
  const goBack = () => {
    // eslint-disable-next-line no-sequences
    setModalVisibility(!ModalVisibility), navigation.navigate('Home');
  };
  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
        <Image
          //We are showing the Image from online
          source={{uri: adr.sc4.f1}}
          style={styles.Container3}
        />

        <TextInput
          style={styles.Container4}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.Container5}>
        <TouchableOpacity onPress={() => setModalVisibility(!ModalVisibility)}>
          <Image source={{uri: adr.sc4.f2}} style={styles.Container6} />
        </TouchableOpacity>
      </View>
      <Text style={styles.Container7}>Bạn chưa nhận được mật khẩu.</Text>

      <TouchableOpacity>
        <Text style={styles.Container8}>Gửi lại mã xác nhận</Text>
      </TouchableOpacity>
      <Modal isVisible={ModalVisibility}>
        <Image style={styles.Container9} source={{uri: adr.sc4.f3}} />

        <Text style={styles.Container10}>
          Yêu cầu của bạn đã được gửi thành {'\n'} công,bạn sẽ nhận được mật
          khẩu mới {'\n'} trong thời gian sớm nhất, có thể việc {'\n'}này sẽ mất
          vài phút.
        </Text>

        <TouchableOpacity onPress={goBack}>
          <Text style={styles.Container11}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Container12}>Gọi hỗ trợ</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container2: {
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
  Container3: {
    padding: 9,
    margin: 15,
    height: 28,
    width: 28,
    resizeMode: 'stretch',
  },
  Container4: {flex: 1, fontSize: 18},
  Container5: {height: 160, width: 160},
  Container6: {resizeMode: 'contain', height: '100%', width: '100%'},
  Container7: {color: 'grey', fontSize: 18},
  Container8: {color: 'orange', fontSize: 17, marginTop: 10},
  Container9: {
    resizeMode: 'contain',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  Container10: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
  },
  Container11: {
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    left: 50,
    bottom: -110,
  },
  Container12: {
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    right: 50,
    bottom: -110,
  },
});
