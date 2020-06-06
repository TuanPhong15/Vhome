import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import {Data} from '../../database/Data';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function ContentDrawer({navigation}) {
  const [unhideModal, hideModal] = useState(false);
  const [unhideModal1, hideModal1] = useState(false);
  const [unhideModal2, hideModal2] = useState(false);
  const [unhideState, hideState] = useState(false);
  const [VietNamese, hideVietNamese] = useState(false);
  return (
    <View style={style.all}>
      <Modal isVisible={unhideModal} animationIn="fadeIn">
        <Image style={style.image1} source={Data.ContentDraw.box_policy} />

        <Text style={style.text1}>
          Đi đến xem chính sách tại: {'\n'}{' '}
          <Text style={style.text2}> http://appvhome.com.</Text>
        </Text>

        <View style={style.container1}>
          <TouchableOpacity style={style.touchableContinue}>
            <Text style={style.text3}>Tiếp tục </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.touchableCancel3}
            onPress={() => hideModal(!unhideModal)}>
            <Text style={style.text4}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={unhideModal1} animationIn="fadeIn">
        <SafeAreaView style={style.text5}>
          <View style={style.container2}>
            <View style={style.container3}>
              <Text style={style.text6}>Giới thiệu về V-Home</Text>

              <TouchableOpacity
                style={style.touchableCancel}
                onPress={() => hideModal1(!unhideModal1)}>
                <Image style={style.image2} source={Data.ContentDraw.close} />
              </TouchableOpacity>
            </View>
            <View style={style.container4} />

            <ScrollView>
              <Text style={style.text7}>
                V-Home là ứng dụng hỗ trợ khách {'\n'}hàng gọi các dịch vụ từ cơ
                bản đến {'\n'}phức tạp , trọng tâm là sửa chữa bảo{'\n'}dưỡng đồ
                điện tử-điện lạnh, thi công{'\n'}xây dựng và cho thuê máy móc.
                {'\n'}Giúp kết nối dịch vụ và khách hàng{'\n'}một cách hiệu quả.
                {'\n'}
                {'\n'}Đối với Đối tác:Đề cao tinh thần{'\n'}hợp tác cùng phát
                triển; cam kết trở{'\n'}thành:"Người đồng hành vạn năng -{'\n'}
                tin cậy,"mang đến cho đối tác sự hài {'\n'}lòng, an tâm khi hợp
                tác.{'\n'}
                {'\n'}Đối với Nhân Viên:Định hướng đào{'\n'}tạo từ bên trong,xây
                dựng môi{'\n'}trường làm việc chuyên nghiệp,năng{'\n'}động, sáng
                tạo và nhân văn;tạo{'\n'}điều kiện thu nhập và cơ hội phát{'\n'}
                triển công bằng cho tất cả nhân{'\n'}viên.{'\n'}
                {'\n'}Đối với Xã Hội: Hài hoà lợi ích doanh{'\n'}nghiệp với lợi
                ích xã hội;đóng góp{'\n'}tích cực vào các hoạt động hướng về
                {'\n'}cộng đồng, thể hiện tinh thần trách{'\n'}nhiệm công dân và
                niềm tự hào dân{'\n'}tộc.{' '}
              </Text>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
      <View style={style.container5}>
        <SafeAreaView style={style.safe1}>
          <Image source={Data.ContentDraw.ava_user} style={style.image3} />
        </SafeAreaView>
        <View style={style.container6}>
          <Text style={style.text8}>Lưu Hà</Text>
        </View>
        <View style={style.container7}>
          <Image
            style={style.image4}
            source={Data.ContentDraw.introductory_code}
          />
          <Text style={style.text9}>123456</Text>
        </View>
      </View>
      <ScrollView>
        <View style={style.container8}>
          <View style={style.container9}>
            <View style={style.container10}>
              <Image
                source={Data.ContentDraw.notification}
                style={style.image5}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Thông báo')}>
              <Text style={style.text10}>Thông báo</Text>
            </TouchableOpacity>
            <View style={style.container11}>
              <Image source={Data.ContentDraw.next} style={style.image6} />
            </View>
          </View>
          <View style={style.container12} />
        </View>
        <View style={style.container13}>
          <View style={style.container14}>
            <View style={style.container15}>
              <Image source={Data.ContentDraw.history} style={style.image7} />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Lịch sử')}>
              <Text style={style.text11}>Lịch sử</Text>
            </TouchableOpacity>
            <View style={style.container16}>
              <Image source={Data.ContentDraw.next} style={style.image8} />
            </View>
          </View>
          <View style={style.image9} />
        </View>
        <View style={style.container17}>
          <View style={style.container18}>
            <View style={style.container19}>
              <Image
                source={Data.ContentDraw.RewardPoint}
                style={style.image10}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Điểm thưởng')}>
              <Text style={style.text12}>Điểm thưởng</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container20} />
        </View>
        <View style={style.container21}>
          <View style={style.container22}>
            <View style={style.container23}>
              <Image source={Data.ContentDraw.criteria} style={style.image11} />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideModal(!unhideModal)}>
              <Text style={style.text13}>Chính sách và cam kết</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container24} />
        </View>

        <View style={style.container25}>
          <View style={style.container26}>
            <View style={style.container27}>
              <Image
                source={Data.ContentDraw.VHomeIntroduce}
                style={style.image12}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideModal1(!unhideModal1)}>
              <Text style={style.text14}>Giới thiệu về V-Home</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container28} />
        </View>
        <Modal isVisible={unhideModal2} animationIn="fadeIn">
          <Image style={style.image13} source={Data.ContentDraw.call_box3} />

          <Text style={style.text15}>+ 84 19008644</Text>

          <View style={style.container29}>
            <TouchableOpacity
              style={style.touchableCancel2}
              onPress={() => hideModal2(!unhideModal2)}>
              <Text style={style.text16}>Huỷ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.touchableCall}>
              <Text style={style.text17}>Gọi</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={style.container30}>
          <View style={style.container31}>
            <View style={style.container32}>
              <Image source={Data.ContentDraw.cskh} style={style.image14} />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideModal2(!unhideModal2)}>
              <Text style={style.text18}>HOTLINE: 19008644</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container33} />
        </View>

        <View style={style.container34}>
          <View style={style.container35}>
            <View style={style.container36}>
              <Image source={Data.ContentDraw.language} style={style.image16} />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideState(!unhideState)}>
              <Text style={style.text20}>Ngôn ngữ </Text>
            </TouchableOpacity>
            <View style={style.container37}>
              <Image
                source={
                  unhideState ? Data.ContentDraw.down2 : Data.ContentDraw.next
                }
                style={style.image15}
              />
            </View>
          </View>
          <View style={style.container38} />
        </View>

        <View>
          {unhideState && (
            <View style={style.container39}>
              <View style={style.container40}>
                <View style={style.container41} />

                <TouchableOpacity onPress={() => hideVietNamese(!VietNamese)}>
                  <Text style={style.text20}>Tiếng Việt</Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={VietNamese ? Data.ContentDraw.tick3 : null}
                    style={style.image17}
                  />
                </View>
              </View>
              <View style={style.container42} />
              <View style={style.container43}>
                <View style={style.container44} />
                <TouchableOpacity onPress={() => hideVietNamese(!VietNamese)}>
                  <Text style={style.text20}>Tiếng Anh</Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={VietNamese ? null : Data.ContentDraw.tick3}
                    style={style.image18}
                  />
                </View>
              </View>
              <View style={style.container45} />
            </View>
          )}
        </View>

        <View style={style.container46}>
          <View style={style.container47}>
            <View style={style.container48}>
              <Image source={Data.ContentDraw.log_out} style={style.image19} />
            </View>
            <TouchableOpacity style={style.touchable}>
              <Text style={style.text20}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container49} />
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  all: {flex: 1},
  image1: {
    alignSelf: 'center',
    width: (718 * 45) / 100,
    height: (260 * 45) / 100,
    borderRadius: 10,
  },
  text1: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
    fontStyle: 'italic',
    bottom: screenHeight / 2 - 15,
  },
  text2: {color: 'blue'},
  container1: {bottom: 35, flexDirection: 'row', alignSelf: 'center'},
  text3: {
    fontSize: 20,
  },
  touchableContinue: {
    right: screenWidth / 7,
  },
  text4: {fontSize: 20, color: '#F59031'},
  touchableCancel3: {left: screenWidth / 10},
  text5: {flex: 1},
  container2: {
    flexDirection: 'column',
    borderRadius: 15,
    alignItems: 'center',
    width: screenWidth - 25,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  container3: {flexDirection: 'row'},
  text6: {fontSize: 26, color: '#F59031', top: 5},
  image2: {
    height: (32 * 80) / 100,
    width: (32 * 80) / 100,
  },
  touchableCancel: {top: 6, left: screenWidth / 13},
  container4: {
    marginTop: 8,
    opacity: 0.2,
    height: 1,
    width: screenWidth - 25,
    backgroundColor: 'black',
  },
  text7: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 25,
    marginTop: 5,
  },
  container5: {backgroundColor: '#F59031', height: screenHeight / 3.4},
  safe1: {alignItems: 'center', height: 130},
  image3: {resizeMode: 'contain', height: '105%'},
  container6: {justifyContent: 'center', alignSelf: 'center'},
  text8: {fontSize: 20, color: 'white'},
  container7: {height: 45, alignItems: 'center'},
  image4: {resizeMode: 'contain', height: '90%', position: 'absolute'},
  text9: {fontSize: 18, color: '#F59031', top: 10, left: 10},
  container8: {flexDirection: 'column', marginTop: 20},
  container9: {flexDirection: 'row'},
  container10: {height: 40},
  image5: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text10: {fontSize: 18},
  container11: {height: 30},
  image6: {
    resizeMode: 'contain',
    height: '80%',
    left: screenWidth / 2,
  },
  container12: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container13: {flexDirection: 'column', marginTop: 20},
  container14: {flexDirection: 'row'},
  container15: {height: 40},
  image7: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text11: {fontSize: 18},
  container16: {height: 30},
  image8: {
    resizeMode: 'contain',
    height: '80%',
    left: screenWidth / 1.75,
  },
  image9: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container17: {flexDirection: 'column', marginTop: 20},
  container18: {flexDirection: 'row'},
  container19: {height: 40},
  image10: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text12: {fontSize: 18},
  container20: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container21: {flexDirection: 'column', marginTop: 20},
  container22: {flexDirection: 'row'},
  container23: {height: 40},
  image11: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text13: {fontSize: 18},
  container24: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container25: {flexDirection: 'column', marginTop: 20},
  container26: {flexDirection: 'row'},
  container27: {height: 40},
  image12: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text14: {fontSize: 18},
  container28: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  image13: {
    alignSelf: 'center',
    width: (718 * 45) / 100,
    height: (260 * 45) / 100,
    borderRadius: 10,
  },
  text15: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: '600',
    bottom: screenHeight / 2,
  },
  container29: {bottom: 35, flexDirection: 'row', alignSelf: 'center'},
  text16: {
    fontSize: 20,
    color: 'deepskyblue',
  },
  touchableCancel2: {
    right: screenWidth / 7,
  },
  text17: {
    fontSize: 20,
    fontWeight: '600',
    color: 'deepskyblue',
  },
  touchableCall: {
    left: screenWidth / 7,
  },
  container30: {flexDirection: 'column', marginTop: 20},
  container31: {flexDirection: 'row'},
  container32: {height: 40},
  image14: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text18: {fontSize: 18},
  container33: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container34: {flexDirection: 'column', marginTop: 20},
  container35: {flexDirection: 'row'},
  container36: {height: 40},
  text19: {fontSize: 18},
  container37: {height: 30},
  image15: {
    resizeMode: 'contain',
    height: '80%',
    left: screenWidth / 2,
  },
  container38: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container39: {flexDirection: 'column', marginTop: 20, left: 10},
  image16: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container40: {flexDirection: 'row'},
  text20: {fontSize: 18},
  image17: {
    left: screenWidth / 1.75,
    height: (42 * 9) / 10,
    width: (42 * 9) / 10,
  },
  container42: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },

  container43: {flexDirection: 'row', marginTop: 20},
  container44: {height: 40},
  image18: {
    left: screenWidth / 1.75,
    height: (42 * 9) / 10,
    width: (42 * 9) / 10,
  },
  container45: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container46: {flexDirection: 'column', marginTop: 20},
  container47: {
    flexDirection: 'row',
  },
  container48: {height: 40},
  image19: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container49: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  touchable: {top: 2, left: 10},
});
