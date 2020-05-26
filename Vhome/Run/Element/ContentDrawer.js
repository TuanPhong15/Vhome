import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function ContentDrawer({navigation}) {
  const [unhideModal, hideModal] = useState(false);
  const [unhideModal1, hideModal1] = useState(false);
  const [unhideModal2, hideModal2] = useState(false);
  const [unhideState, hideState] = useState(false);
  const [VietNamese, hideVietNamese] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Modal isVisible={unhideModal} animationIn="fadeIn">
        <Image
          style={{
            alignSelf: 'center',
            width: (718 * 45) / 100,
            height: (260 * 45) / 100,
            borderRadius: 10,
          }}
          source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box_policy.png')}
        />

        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            position: 'absolute',
            alignSelf: 'center',
            fontStyle: 'italic',
            bottom: screenHeight / 2 - 15,
          }}>
          Đi đến xem chính sách tại: {'\n'}{' '}
          <Text style={{color: 'blue'}}> http://appvhome.com.</Text>
        </Text>

        <View style={{bottom: 35, flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                right: screenWidth / 7,
              }}>
              Tiếp tục{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => hideModal(!unhideModal)}>
            <Text
              style={{fontSize: 20, left: screenWidth / 10, color: '#F59031'}}>
              Huỷ
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal isVisible={unhideModal1} animationIn="fadeIn">
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'column',
              borderRadius: 15,
              alignItems: 'center',
              width: screenWidth - 25,
              alignSelf: 'center',
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 26, color: '#F59031', top: 5}}>
                Giới thiệu về V-Home
              </Text>

              <TouchableOpacity onPress={() => hideModal1(!unhideModal1)}>
                <Image
                  style={{
                    left: screenWidth / 13,
                    height: (32 * 80) / 100,
                    width: (32 * 80) / 100,
                    top: 6,
                  }}
                  source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 8,
                opacity: 0.2,
                height: 1,
                width: screenWidth - 25,
                backgroundColor: 'black',
              }}
            />

            <ScrollView>
              <Text
                style={{
                  fontSize: 20,
                  color: 'grey',
                  marginBottom: 25,
                  marginTop: 5,
                }}>
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
      <View style={{backgroundColor: '#F59031', height: screenHeight / 3.4}}>
        <SafeAreaView style={{alignItems: 'center', height: 130}}>
          <Image
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/ava_user.png')}
            style={{resizeMode: 'contain', height: '105%'}}
          />
        </SafeAreaView>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Text style={{fontSize: 20, color: 'white'}}>Lưu Hà</Text>
        </View>
        <View style={{height: 45, alignItems: 'center'}}>
          <Image
            style={{resizeMode: 'contain', height: '90%', position: 'absolute'}}
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/introductory_code.png')}
          />
          <Text style={{fontSize: 18, color: '#F59031', top: 10, left: 10}}>
            123456
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/notification.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Thông báo')}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>Thông báo</Text>
            </TouchableOpacity>
            <View style={{height: 30}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/next.png')}
                style={{
                  resizeMode: 'contain',
                  height: '80%',
                  left: screenWidth / 2,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/history.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Lịch sử')}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>Lịch sử</Text>
            </TouchableOpacity>
            <View style={{height: 30}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/next.png')}
                style={{
                  resizeMode: 'contain',
                  height: '80%',
                  left: screenWidth / 1.75,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/Reward-Points.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Điểm thưởng')}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>Điểm thưởng</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/criteria.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity onPress={() => hideModal(!unhideModal)}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>
                Chính sách và cam kết
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>

        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo_vhome_introduce.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity onPress={() => hideModal1(!unhideModal1)}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>
                Giới thiệu về V-Home
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>
        <Modal isVisible={unhideModal2} animationIn="fadeIn">
          <Image
            style={{
              alignSelf: 'center',
              width: (718 * 45) / 100,
              height: (260 * 45) / 100,
              borderRadius: 10,
            }}
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/call_box3.png')}
          />

          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              position: 'absolute',
              alignSelf: 'center',
              fontWeight: '600',
              bottom: screenHeight / 2,
            }}>
            + 84 19008644
          </Text>

          <View style={{bottom: 35, flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => hideModal2(!unhideModal2)}>
              <Text
                style={{
                  fontSize: 20,
                  right: screenWidth / 7,
                  color: 'deepskyblue',
                }}>
                Huỷ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  left: screenWidth / 7,
                  fontWeight: '600',
                  color: 'deepskyblue',
                }}>
                Gọi
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/cskh.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity onPress={() => hideModal2(!unhideModal2)}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>
                HOTLINE: 19008644
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>

        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/language.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity onPress={() => hideState(!unhideState)}>
              <Text style={{fontSize: 18, top: 2, left: 10}}>Ngôn ngữ </Text>
            </TouchableOpacity>
            <View style={{height: 30}}>
              <Image
                source={
                  unhideState
                    ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/down2.png')
                    : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/next.png')
                }
                style={{
                  resizeMode: 'contain',
                  height: '80%',
                  left: screenWidth / 2,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>

        <View>
          {unhideState && (
            <View style={{flexDirection: 'column', marginTop: 20, left: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 40}} />

                <TouchableOpacity onPress={() => hideVietNamese(!VietNamese)}>
                  <Text style={{fontSize: 18, top: 2, left: 10}}>
                    Tiếng Việt
                  </Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={
                      VietNamese
                        ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')
                        : null
                    }
                    style={{
                      left: screenWidth / 1.75,
                      height: (42 * 9) / 10,
                      width: (42 * 9) / 10,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: (11 * screenWidth) / 12,
                  height: 1,
                  backgroundColor: 'grey',
                  opacity: 0.45,
                }}
              />
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{height: 40}} />
                <TouchableOpacity onPress={() => hideVietNamese(!VietNamese)}>
                  <Text style={{fontSize: 18, top: 2, left: 10}}>
                    Tiếng Anh
                  </Text>
                </TouchableOpacity>
                <View>
                  <Image
                    source={
                      VietNamese
                        ? null
                        : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')
                    }
                    style={{
                      left: screenWidth / 1.75,
                      height: (42 * 9) / 10,
                      width: (42 * 9) / 10,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: (11 * screenWidth) / 12,
                  height: 1,
                  backgroundColor: 'grey',
                  opacity: 0.45,
                }}
              />
            </View>
          )}
        </View>

        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{height: 40}}>
              <Image
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/log_out.png')}
                style={{
                  justifyContent: 'flex-end',
                  resizeMode: 'contain',
                  height: '70%',
                }}
              />
            </View>
            <TouchableOpacity>
              <Text style={{fontSize: 18, top: 2, left: 10}}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: (11 * screenWidth) / 12,
              height: 1,
              backgroundColor: 'grey',
              opacity: 0.45,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
