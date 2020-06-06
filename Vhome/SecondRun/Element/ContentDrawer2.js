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
import {Data} from '../../database/Data';
import Modal from 'react-native-modal';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function ContentDrawer2({navigation}) {
  const [unhideModalSV, hideModalSV] = useState(false);
  const [unhideModalSV1, hideModalSV1] = useState(false);

  const [unhideModalSV2, hideModalSV2] = useState(false);
  const [VietNameseSV, hideVietNameseSV] = useState(false);
  const [unhideStateSV, hideStateSV] = useState(false);
  return (
    <View style={style.all}>
      <Modal isVisible={unhideModalSV} animationIn="fadeIn">
        <Image style={style.image1} source={Data.ContentDraw2.box_policy} />

        <Text style={style.text1}>
          Đi đến xem chính sách tại: {'\n'}{' '}
          <Text style={style.text2}> http://appvhome.com.</Text>
        </Text>

        <View style={style.container1}>
          <TouchableOpacity style={style.touchableContinue}>
            <Text style={style.text3}>Tiếp tục </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.touchableCancel}
            onPress={() => hideModalSV(!unhideModalSV)}>
            <Text style={style.text4}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={unhideModalSV1} animationIn="fadeIn">
        <SafeAreaView style={style.safe1}>
          <View style={style.container2}>
            <View style={style.row}>
              <Text style={style.text5}>Giới thiệu về V-Home</Text>

              <TouchableOpacity
                style={style.touchableClose}
                onPress={() => hideModalSV1(!unhideModalSV1)}>
                <Image style={style.image2} source={Data.ContentDraw2.close} />
              </TouchableOpacity>
            </View>
            <View style={style.container4} />

            <ScrollView>
              <Text style={style.text6}>
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
      <Modal isVisible={unhideModalSV2} animationIn="fadeIn">
        <Image style={style.image3} source={Data.ContentDraw2.call_box3} />

        <Text style={style.text7}>+ 84 19008644</Text>

        <View style={style.container1}>
          <TouchableOpacity
            style={style.touchableForText8}
            onPress={() => hideModalSV2(!unhideModalSV2)}>
            <Text style={style.text8}>Huỷ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.touchableForText9}>
            <Text style={style.text9}>Gọi</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={style.container6}>
        <SafeAreaView style={style.container7}>
          <Image source={Data.ContentDraw2.ava_provider} style={style.image4} />
        </SafeAreaView>
        <View style={style.container8}>
          <Text style={style.text10}>Nguyễn Tuấn Anh</Text>
        </View>
        <View style={style.container9}>
          <Image
            style={style.image5}
            source={Data.ContentDraw2.introductory_code}
          />
          <Text style={style.text11}>0</Text>
        </View>
      </View>
      <ScrollView scrollToOverflowEnabled="false">
        <View style={style.container10}>
          <View style={style.row}>
            <View style={style.height}>
              <Image
                source={Data.ContentDraw2.notification}
                style={style.image6}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Thông báo')}>
              <Text style={style.text13}>Thông báo</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container13} />
        </View>
        <View style={style.container14}>
          <View style={style.row}>
            <View style={style.height}>
              <Image source={Data.ContentDraw2.history} style={style.image7} />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Lịch sử')}>
              <Text style={style.text13}>Lịch sử</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container17} />
        </View>
        <View style={style.container18}>
          <View style={style.row}>
            <View style={style.height}>
              <Image
                source={Data.ContentDraw2.RewardPoint}
                style={style.image8}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => navigation.navigate('Điểm thưởng')}>
              <Text style={style.text13}>Điểm thưởng</Text>
            </TouchableOpacity>
          </View>

          <View style={style.container21} />
        </View>
        <View style={style.container22}>
          <View style={style.row}>
            <View style={style.container24}>
              <Image source={Data.ContentDraw2.evaluate} style={style.image9} />
            </View>
            <TouchableOpacity style={style.touchable2}>
              <Text style={style.text14}>Đánh giá</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container25} />
        </View>
        <View style={style.container26}>
          <View style={style.row}>
            <View style={style.height}>
              <Image
                source={Data.ContentDraw2.criteria}
                style={style.image10}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideModalSV(!unhideModalSV)}>
              <Text style={style.text13}>Chính sách và cam kết</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container29} />
        </View>
        <View style={style.container30}>
          <View style={style.row}>
            <View style={style.height}>
              <Image
                source={Data.ContentDraw2.VHomeIntroduce}
                style={style.image11}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideModalSV1(!unhideModalSV1)}>
              <Text style={style.text13}>Giới thiệu về V-Home</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container33} />
        </View>
        <View style={style.container34}>
          <View style={style.row}>
            <View style={style.height}>
              <Image source={Data.ContentDraw2.cskh} style={style.image12} />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideModalSV2(!unhideModalSV2)}>
              <Text style={style.text13}>HOTLINE:0123456789</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container29} />
        </View>
        <View style={style.container26}>
          <View style={style.row}>
            <View style={style.height}>
              <Image
                source={Data.ContentDraw2.language}
                style={style.image10}
              />
            </View>
            <TouchableOpacity
              style={style.touchable}
              onPress={() => hideStateSV(!unhideStateSV)}>
              <Text style={style.text13}>Ngôn ngữ </Text>
            </TouchableOpacity>
            <View style={style.height30}>
              <Image
                source={
                  unhideStateSV
                    ? Data.ContentDraw2.down2
                    : Data.ContentDraw2.next
                }
                style={style.image13}
              />
            </View>
          </View>
          <View style={style.container33} />
        </View>

        <View>
          {unhideStateSV && (
            <View style={style.container35}>
              <View style={style.row}>
                <View style={style.height} />

                <TouchableOpacity
                  onPress={() => hideVietNameseSV(!VietNameseSV)}>
                  <Text style={style.text13}>Tiếng Việt</Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={VietNameseSV ? Data.ContentDraw2.tick3 : null}
                    style={style.image14}
                  />
                </View>
              </View>
              <View style={style.container33} />
              <View style={style.container36}>
                <View style={style.height} />
                <TouchableOpacity
                  onPress={() => hideVietNameseSV(!VietNameseSV)}>
                  <Text style={style.text13}>Tiếng Anh</Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={VietNameseSV ? null : Data.ContentDraw2.tick3}
                    style={style.image14}
                  />
                </View>
              </View>
              <View style={style.container33} />
            </View>
          )}
        </View>
        <View style={style.container26}>
          <View style={style.row}>
            <View style={style.height}>
              <Image source={Data.ContentDraw2.log_out} style={style.image12} />
            </View>
            <TouchableOpacity style={style.touchable}>
              <Text style={style.text13}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
          <View style={style.container33} />
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
  touchableCancel: {left: screenWidth / 10},
  safe1: {flex: 1},
  container2: {
    flexDirection: 'column',
    borderRadius: 15,
    alignItems: 'center',
    width: screenWidth - 25,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  text5: {fontSize: 26, color: '#F59031', top: 5},
  image2: {
    height: (32 * 80) / 100,
    width: (32 * 80) / 100,
  },
  touchableClose: {left: screenWidth / 13, top: 6},
  container4: {
    marginTop: 8,
    opacity: 0.2,
    height: 1,
    width: screenWidth - 25,
    backgroundColor: 'black',
  },
  text6: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 25,
    marginTop: 5,
  },
  image3: {
    alignSelf: 'center',
    width: (718 * 45) / 100,
    height: (260 * 45) / 100,
    borderRadius: 10,
  },
  text7: {
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: '600',
    bottom: screenHeight / 2,
  },
  text8: {
    fontSize: 20,

    color: 'deepskyblue',
  },
  touchableForText8: {right: screenWidth / 7},
  text9: {
    fontSize: 20,
    fontWeight: '600',
    color: 'deepskyblue',
  },
  touchableForText9: {
    left: screenWidth / 7,
  },
  container6: {backgroundColor: '#F59031', height: screenHeight / 3.4},
  container7: {alignItems: 'center', height: 130},
  image4: {resizeMode: 'contain', height: '105%'},
  container8: {justifyContent: 'center', alignSelf: 'center'},
  text10: {fontSize: 20, color: 'white'},
  container9: {height: 45, alignItems: 'center'},
  image5: {resizeMode: 'contain', height: '90%', position: 'absolute'},
  text11: {fontSize: 18, color: '#F59031', top: 10, left: 10},
  container10: {flex: 1, flexDirection: 'column', marginTop: 20},
  image6: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container13: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container14: {flexDirection: 'column', marginTop: 20},
  image7: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container17: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container18: {flexDirection: 'column', marginTop: 20},
  image8: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container21: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container22: {flexDirection: 'column', marginTop: 20},
  text13: {fontSize: 18},
  touchable: {top: 2, left: 10},
  container24: {height: 38, left: 5},
  image9: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  text14: {fontSize: 18},
  touchable2: {top: 2, left: 20},
  container25: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container26: {flexDirection: 'column', marginTop: 20},
  image10: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container29: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container30: {flexDirection: 'column', marginTop: 20},
  image11: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  container33: {
    width: (11 * screenWidth) / 12,
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.45,
  },
  container34: {flexDirection: 'column', marginTop: 20},
  row: {flexDirection: 'row'},
  height: {height: 40},
  image12: {
    justifyContent: 'flex-end',
    resizeMode: 'contain',
    height: '70%',
  },
  height30: {height: 30},
  image13: {
    resizeMode: 'contain',
    height: '80%',
    left: screenWidth / 2,
  },
  container35: {flexDirection: 'column', marginTop: 20, left: 10},
  image14: {
    left: screenWidth / 1.75,
    height: (42 * 9) / 10,
    width: (42 * 9) / 10,
  },
  container36: {flexDirection: 'row', marginTop: 20},
});
