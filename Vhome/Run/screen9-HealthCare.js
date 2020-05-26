//screen 9 cũ
import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import moment from 'moment';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function HealthCare() {
  const [modal, hideModal] = useState(false);
  const [modal2, hideModal2] = useState(false);

  const [screenOne, setScreenOne] = useState(true);
  const [screenTwo, setScreenTwo] = useState(true);
  const [isVisible, Visible] = useState(false);
  // c

  const [isVisibleDate, VisibleDate] = useState(false);
  const [service, setService] = useState('DV cung cấp nước sạch');
  // const currentTime = (new Date()).getTime()
  const currentTime = moment().format('HH:mm');
  const currentDate = moment().format('D/MM/YYYY ');
  const [chosenTime, setChosenTime] = useState(currentTime);
  const [chosenDate, setChosenDate] = useState(currentDate);
  handlePickerTime = time => {
    Visible(false), setChosenTime(moment(time).format('HH:mm'));
  };
  handlePickerDate = date => {
    VisibleDate(false), setChosenDate(moment(date).format('D/MM/YYYY '));
  };

  hidePickerTime = () => {
    Visible(false);
  };
  hidePickerDate = () => {
    VisibleDate(false);
  };
  showPickerTime = () => {
    Visible(true);
  };
  showPickerDate = () => {
    VisibleDate(true);
  };
  return (
    <View style={styles.Container1}>
      <Modal
        isVisible={modal}
        animationOut={'fadeOut'}
        animationIn={'fadeIn'}
        animationInTiming={10}
        style={styles.Container2}>
        {screenOne ? (
          <View>
            <View style={styles.Container3}>
              <View style={styles.Container4}>
                <TouchableOpacity>
                  <View style={styles.Container5}>
                    <Text style={styles.Container6}>Bước 1</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.Container7}>
                    <Text style={styles.Container8}>Bước 2</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.Container9}>
                    <Text style={styles.Container10}>Bước 3</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.Container11}>
                  <TouchableOpacity onPress={() => hideModal(!modal)}>
                    <Image
                      style={styles.Container12}
                      source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View />
              </View>

              <View>
                <View style={styles.Container13}>
                  <Text style={styles.Container14}>Thông tin khách hàng</Text>
                </View>
                <View style={styles.Container15}>
                  <View style={styles.Container16}>
                    <View style={styles.Container17}>
                      <Image
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/user.png')}
                        style={styles.Container18}
                      />
                    </View>

                    <TextInput
                      style={styles.Container19}
                      placeholder="Họ và tên"
                      keyboardType="numbers-and-punctuation"
                    />
                  </View>
                </View>
                <View style={styles.Container20}>
                  <View style={styles.Container21}>
                    <View style={styles.Container22}>
                      <Image
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/phone.png')}
                        style={styles.Container23}
                      />
                    </View>

                    <TextInput
                      style={styles.Container24}
                      placeholder="Số điện thoại"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.Container25}>
                  <View style={styles.Container26}>
                    <View style={styles.Container27}>
                      <Image
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/location2.png')}
                        style={styles.Container28}
                      />
                    </View>
                    <TextInput
                      style={styles.Container29}
                      placeholder="Địa chỉ"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.Container30}>
              <TouchableOpacity onPress={() => setScreenOne(!screenOne)}>
                <Text style={styles.Container31}>Tiếp theo</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            {screenTwo ? (
              <View>
                <View style={styles.Container32}>
                  <View style={styles.Container33}>
                    <TouchableOpacity onPress={() => setScreenOne(!screenOne)}>
                      <View style={styles.Container34}>
                        <Text style={styles.Container35}>Bước 1</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={styles.Container36}>
                        <Text style={styles.Container37}>Bước 2</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.Container38}>
                        <Text style={styles.Container39}>Bước 3</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.Container40}>
                      <TouchableOpacity onPress={() => hideModal(!modal)}>
                        <Image
                          style={styles.Container41}
                          source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View />
                  </View>
                  <DateTimePickerModal
                    locale="en_GB"
                    mode="time"
                    isVisible={isVisible}
                    onConfirm={handlePickerTime}
                    onCancel={hidePickerTime}
                    headerTextIOS={'Chọn giờ'}
                    cancelTextIOS={'Đóng'}
                    confirmTextIOS={'Xác nhận'}
                    is24Hour={true}
                  />
                  <DateTimePickerModal
                    locale="vi_VN"
                    mode="date"
                    isVisible={isVisibleDate}
                    onConfirm={handlePickerDate}
                    onCancel={hidePickerDate}
                    headerTextIOS={'Chọn ngày'}
                    cancelTextIOS={'Đóng'}
                    confirmTextIOS={'Xác nhận'}
                    is24Hour={true}
                  />

                  <View style={styles.Container42}>
                    <Image
                      style={styles.Container43}
                      source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/calendar.png')}
                    />
                    <Image
                      style={styles.Container44}
                      source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box.png')}
                    />
                    <View>
                      <TouchableOpacity onPress={showPickerTime}>
                        <Text style={styles.Container45}>{chosenTime}</Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity onPress={showPickerDate}>
                        <Text style={styles.Container46}>{chosenDate}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={styles.Container47}>
                  <TouchableOpacity onPress={() => setScreenTwo(!screenTwo)}>
                    <Text style={styles.Container48}>Tiếp theo</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.Container49}>
                  <View style={styles.Container50}>
                    <TouchableOpacity>
                      <View style={styles.Container51}>
                        <Text style={styles.Container52}>Bước 1</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setScreenTwo(!screenTwo)}>
                      <View style={styles.Container53}>
                        <Text style={styles.Container54}>Bước 2</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={styles.Container55}>
                        <Text style={styles.Container56}>Bước 3</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.Container57}>
                      <TouchableOpacity onPress={() => hideModal(!modal)}>
                        <Image
                          style={styles.Container58}
                          source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View />
                  </View>

                  <View style={styles.Container59}>
                    <Text style={styles.Container60}>
                      Bạn gặp phải vấn đề gì ?
                    </Text>
                    <View style={styles.Container61}>
                      <Image
                        style={styles.Container62}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box.png')}
                      />
                      <View style={styles.Container63}>
                        <View style={styles.Container64}>
                          <TouchableOpacity onPress={() => hideModal2(!modal2)}>
                            <Text style={styles.Container65}>{service}</Text>
                          </TouchableOpacity>
                        </View>
                        <Image
                          style={styles.Container66}
                          source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/list.png')}
                        />
                      </View>
                    </View>
                    <Modal
                      style={styles.Container67}
                      isVisible={modal2}
                      animationIn={'slideInUp'}
                      animationOutTiming={1600}
                      animationOut={'slideOutDown'}>
                      <View style={styles.Container68}>
                        <View style={styles.Container69}>
                          <Text style={styles.Container70}>Chọn dịch vụ</Text>
                        </View>
                        <View style={styles.Container71}>
                          <View style={styles.Container72}>
                            <Text
                              style={styles.Container73}
                              onPress={() => {
                                setService('DV Cung cấp nước sạch'),
                                  hideModal2(!modal2);
                              }}>
                              DV Cung cấp nước sạch
                            </Text>
                          </View>
                          {service === 'DV Cung cấp nước sạch' && (
                            <View style={styles.Container74}>
                              <Image
                                style={styles.Container75}
                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}
                              />
                            </View>
                          )}
                        </View>
                        <View style={styles.Container76} />
                        <View style={styles.Container77}>
                          <View style={styles.Container78}>
                            <Text
                              style={styles.Container79}
                              onPress={() => {
                                setService('Sửa chữa tại nhà'),
                                  hideModal2(!modal2);
                              }}>
                              Sửa chữa tại nhà
                            </Text>
                          </View>
                          {service === 'Sửa chữa tại nhà' && (
                            <View style={styles.Container80}>
                              <Image
                                style={styles.Container81}
                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}
                              />
                            </View>
                          )}
                        </View>
                        <View style={styles.Container82} />
                        <View style={styles.Container83}>
                          <View style={styles.Container84}>
                            <Text
                              style={styles.Container85}
                              onPress={() => {
                                setService('DV Bảo vệ môi trường'),
                                  hideModal2(!modal2);
                              }}>
                              DV Bảo vệ môi trường
                            </Text>
                          </View>
                          {service === 'DV Bảo vệ môi trường' && (
                            <View style={styles.Container86}>
                              <Image
                                style={styles.Container87}
                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}
                              />
                            </View>
                          )}
                        </View>
                        <View style={styles.Container88} />
                        <View style={styles.Container89}>
                          <View style={styles.Container90}>
                            <Text
                              style={styles.Container91}
                              onPress={() => {
                                setService('Chăm sóc sức khoẻ'),
                                  hideModal2(!modal2);
                              }}>
                              Chăm sóc sức khoẻ
                            </Text>
                          </View>
                          {service === 'Chăm sóc sức khoẻ' && (
                            <View style={styles.Container92}>
                              <Image
                                style={styles.Container93}
                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}
                              />
                            </View>
                          )}
                        </View>
                        <View style={styles.Container94} />
                      </View>
                    </Modal>
                    <TextInput
                      style={styles.Container95}
                      multiline={true}
                      keyboardType={'numbers-and-punctuation'}
                      placeholder="Địa chỉ"
                    />
                  </View>
                </View>

                <View style={styles.Container96}>
                  <TouchableOpacity onPress={() => hideModal(!modal)}>
                    <Text style={styles.Container97}>End</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        )}
      </Modal>
      <Image
        style={styles.Container98}
        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/cham-soc-suc-khoe.png')}
      />
      <Text style={styles.Container99}>Chăm sóc sức khoẻ</Text>
      <TouchableOpacity onPress={() => hideModal(!modal)}>
        <Image
          source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/call_service.png')}
          style={styles.Container100}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Container1: {alignSelf: 'center'},
  Container2: {alignSelf: 'center'},
  Container3: {
    flexDirection: 'column',
    borderRadius: 15,
    width: screenWidth / 1.1,
    height: screenHeight / 1.8,
    backgroundColor: 'white',
  },
  Container4: {flexDirection: 'row'},
  Container5: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: 'white',
  },
  Container6: {color: 'orange', fontSize: 19},
  Container7: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: '#F59031',
  },
  Container8: {color: 'white', fontSize: 19},
  Container9: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: '#F59031',
  },
  Container10: {color: 'white', fontSize: 19},
  Container11: {
    borderTopRightRadius: 15,
    width: screenWidth / 8.8,
    height: 50,
    backgroundColor: '#F59031',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container12: {width: (32 * 80) / 100, height: (32 * 80) / 100},
  Container13: {alignItems: 'center', marginTop: 20},
  Container14: {color: 'black', fontSize: 19, fontWeight: '600'},
  Container15: {alignItems: 'center'},
  Container16: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  Container17: {
    position: 'absolute',
    left: 20,
    bottom: 15,
    height: 50,
    width: 35,
    padding: 3,
  },
  Container18: {
    resizeMode: 'contain',
    height: '85%',
    width: '85%',
  },
  Container19: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 50,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 25,
    marginBottom: 20,
  },
  Container20: {alignItems: 'center'},
  Container21: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  Container22: {
    position: 'absolute',
    left: 20,
    bottom: 15,
    height: 50,
    width: 35,
    padding: 3,
  },
  Container23: {
    resizeMode: 'contain',
    height: '85%',
    width: '85%',
  },
  Container24: {
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 50,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 25,
    marginBottom: 20,
  },
  Container25: {alignItems: 'center'},
  Container26: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  Container27: {
    position: 'absolute',
    left: 20,
    bottom: 15,
    height: 50,
    width: 35,
    padding: 3,
  },
  Container28: {
    resizeMode: 'contain',
    height: '85%',
    width: '85%',
  },
  Container29: {
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 50,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 25,
    marginBottom: 20,
  },
  Container30: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
    backgroundColor: '#F59031',
    height: 50,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  Container31: {fontSize: 20, color: 'white', fontWeight: '600'},
  Container32: {
    flexDirection: 'column',
    borderRadius: 15,
    width: screenWidth / 1.1,
    height: screenHeight / 1.8,
    backgroundColor: 'white',
  },
  Container33: {
    flexDirection: 'row',
  },

  Container34: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: '#F59031',
  },
  Container35: {color: 'white', fontSize: 19},
  Container36: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: 'white',
  },
  Container37: {color: 'orange', fontSize: 19},
  Container38: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: '#F59031',
  },
  Container39: {color: 'white', fontSize: 19},
  Container40: {
    borderTopRightRadius: 15,
    width: screenWidth / 8.8,
    height: 50,
    backgroundColor: '#F59031',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container41: {
    width: (32 * 80) / 100,
    height: (32 * 80) / 100,
  },
  Container42: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 1.1,
    height: screenHeight / 2.3,
  },
  Container43: {
    left: screenWidth / 10,
    height: (42 * 8) / 10,
    width: (42 * 8) / 10,
    position: 'absolute',
  },
  Container44: {resizeMode: 'contain', width: '90%'},
  Container45: {
    position: 'absolute',
    right: screenWidth / 2.2,
    fontSize: 20,
    top: -10,
  },
  Container46: {
    position: 'absolute',
    right: screenWidth / 7,
    fontSize: 20,
    top: -10,
  },
  Container47: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
    backgroundColor: '#F59031',
    height: 50,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  Container48: {fontSize: 20, color: 'white', fontWeight: '600'},
  Container49: {
    flexDirection: 'column',
    borderRadius: 15,
    width: screenWidth / 1.1,
    height: screenHeight / 1.8,
    backgroundColor: 'white',
  },
  Container50: {flexDirection: 'row'},
  Container51: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: '#F59031',
  },
  Container52: {color: 'white', fontSize: 19},
  Container53: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: '#F59031',
  },
  Container54: {color: 'white', fontSize: 19},
  Container55: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
    height: 50,
    backgroundColor: 'white',
  },
  Container56: {color: 'orange', fontSize: 19},
  Container57: {
    borderTopRightRadius: 15,
    width: screenWidth / 8.8,
    height: 50,
    backgroundColor: '#F59031',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container58: {
    width: (32 * 80) / 100,
    height: (32 * 80) / 100,
  },
  Container59: {flexDirection: 'column', alignItems: 'center'},
  Container60: {fontWeight: '600', fontSize: 18, top: 15},
  Container61: {
    width: screenWidth / 1.1,
    alignItems: 'center',
    top: 20,
  },
  Container62: {resizeMode: 'contain', width: '90%'},
  Container63: {flexDirection: 'row', position: 'absolute'},
  Container64: {width: 220},
  Container65: {top: 35, left: -25, fontSize: 20},
  Container66: {top: 30, left: 10},
  Container67: {justifyContent: 'flex-end'},
  Container68: {
    height: screenHeight / 2.5,
    width: screenWidth / 1.1,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Container69: {alignItems: 'center', marginTop: 10},
  Container70: {fontSize: 22, fontWeight: '600'},
  Container71: {flexDirection: 'row'},
  Container72: {width: 320},
  Container73: {
    fontSize: 20,
    marginTop: 25,
    textAlign: 'left',
  },
  Container74: {
    marginLeft: screenWidth / 5.5,
    position: 'absolute',
    right: -20,
  },
  Container75: {
    tintColor: 'skyblue',
    height: (42 * 8) / 10,
    width: (42 * 8) / 10,
    marginTop: 25,
  },
  Container76: {
    height: 1,
    width: 350,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  Container77: {flexDirection: 'row'},
  Container78: {width: 320},
  Container79: {fontSize: 20, marginTop: 25},
  Container80: {
    marginLeft: screenWidth / 5.5,
    position: 'absolute',
    right: -20,
  },
  Container81: {
    tintColor: 'skyblue',
    height: (42 * 8) / 10,
    width: (42 * 8) / 10,
    marginTop: 25,
  },
  Container82: {
    height: 1,
    width: 350,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  Container83: {flexDirection: 'row'},
  Container84: {width: 320},
  Container85: {fontSize: 20, marginTop: 25},
  Container86: {
    marginLeft: screenWidth / 5.5,
    position: 'absolute',
    right: -20,
  },
  Container87: {
    tintColor: 'skyblue',
    height: (42 * 8) / 10,
    width: (42 * 8) / 10,
    marginTop: 25,
  },
  Container88: {
    height: 1,
    width: 350,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  Container89: {flexDirection: 'row'},
  Container90: {width: 320},
  Container91: {fontSize: 20, marginTop: 25},
  Container92: {
    marginLeft: screenWidth / 5.5,
    position: 'absolute',
    right: -20,
  },
  Container93: {
    tintColor: 'skyblue',
    height: (42 * 8) / 10,
    width: (42 * 8) / 10,
    marginTop: 25,
  },
  Container94: {
    height: 1,
    width: 350,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  Container95: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    alignSelf: 'stretch',
    height: 125,
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,

    borderColor: 'grey',
    borderRadius: 10,
  },
  Container96: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -40,
    backgroundColor: '#F59031',
    height: 50,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  Container97: {fontSize: 20, color: 'white', fontWeight: '600'},
  Container98: {width: screenWidth - 10, resizeMode: 'contain'},
  Container99: {
    alignSelf: 'center',
    fontSize: 18,
    textDecorationStyle: 'solid',
    top: -20,
  },
  Container100: {
    alignSelf: 'center',
    width: (258 * 65) / 100,
    height: (86 * 65) / 100,
    top: screenHeight - 500,
  },
});
