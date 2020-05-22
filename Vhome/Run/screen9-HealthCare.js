//screen 9 cũ
import React, { Component, useState } from 'react';
import { AppRegistry, FlatList, View, Image, TouchableOpacity, ScrollView, Text, SafeAreaView, TextInput, StyleSheet, Button, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Modal from "react-native-modal";
import moment from 'moment'

import DateTimePickerModal from "react-native-modal-datetime-picker"

import { createStackNavigator } from "@react-navigation/stack";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function HealthCare({ navigation }) {
    const [modal, hideModal] = useState(false)
    const [modal2, hideModal2] = useState(false)

    const [screenOne, setScreenOne] = useState(true)
    const [screenTwo, setScreenTwo] = useState(true)
    const [isVisible, Visible] = useState(false)
    // c
    
    const [isVisibleDate, VisibleDate] = useState(false)
    const [service, setService] = useState('DV cung cấp nước sạch')
    // const currentTime = (new Date()).getTime()
    const currentTime = moment().format('HH:mm');
    const currentDate = moment().format('D/MM/YYYY ');
    const [chosenTime, setChosenTime] = useState(currentTime)
    const [chosenDate, setChosenDate] = useState(currentDate)
    handlePickerTime = (time) => {

        Visible(false),
            setChosenTime(moment(time).format('HH:mm'))

    }
    handlePickerDate = (date) => {

        VisibleDate(false),
            setChosenDate(moment(date).format('D/MM/YYYY '))

    }

    hidePickerTime = () => {

        Visible(false)

    }
    hidePickerDate = () => {

        VisibleDate(false)

    }
    showPickerTime = () => {

        Visible(true)

    }
    showPickerDate = () => {

        VisibleDate(true)

    }
    return (
        <View style={{ alignSelf: 'center' }}>
            <Modal isVisible={modal}
                animationOut={'fadeOut'}
                animationIn={'fadeIn'}
                animationInTiming={10}

                style={{ alignSelf: 'center' }}>

                {(screenOne) ?
                    (<View>
                        <View style={{ flexDirection: 'column', borderRadius: 15, width: screenWidth / 1.1, height: screenHeight / 1.8, backgroundColor: 'white' }}
                        >

                            <View style={{ flexDirection: 'row' }}>


                                <TouchableOpacity>
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center',
                                        borderTopLeftRadius: 15,
                                        width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                        height: 50, backgroundColor: 'white'
                                    }}>
                                        <Text style={{ color: "orange", fontSize: 19 }}>Bước 1</Text>
                                    </View></TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center',
                                        width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                        height: 50, backgroundColor: 'orange'
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 19 }}>Bước 2</Text>

                                    </View></TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{
                                        justifyContent: 'center', alignItems: 'center',
                                        width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50,
                                        backgroundColor: 'orange'
                                    }}>
                                        <Text style={{ color: "white", fontSize: 19 }}>Bước 3</Text>
                                    </View></TouchableOpacity>
                                <View style={{ borderTopRightRadius: 15, width: screenWidth / 8.8, height: 50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => hideModal(!modal)} >
                                        <Image style={{ width: 32 * 80 / 100, height: 32 * 80 / 100 }}
                                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View></View>


                            </View>

                            <View>

                                <View style={{ alignItems: 'center', marginTop: 20 }}>
                                    <Text style={{ color: 'black', fontSize: 19, fontWeight: '600' }}>Thông tin khách hàng</Text>

                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{
                                        position: 'relative',
                                        alignSelf: 'stretch',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            position: 'absolute',
                                            left: 20, bottom: 15,
                                            height: 50,
                                            width: 35,
                                            padding: 3
                                        }} ><Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/user.png')}
                                            style={{
                                                resizeMode: 'contain',
                                                height: '85%',
                                                width: '85%',
                                            }}></Image></View>

                                        <TextInput style={{
                                            marginTop: 20, marginLeft: 10, marginRight: 10,
                                            fontSize: 18,
                                            alignSelf: 'stretch',
                                            height: 45,
                                            paddingRight: 45,
                                            paddingLeft: 50,
                                            borderWidth: 1,
                                            paddingVertical: 0,
                                            borderColor: 'grey',
                                            borderRadius: 25, marginBottom: 20
                                        }}
                                            placeholder='Họ và tên'
                                            keyboardType='numbers-and-punctuation'

                                        />
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{
                                        position: 'relative',
                                        alignSelf: 'stretch',
                                        justifyContent: 'center'
                                    }}>

                                        <View style={{
                                            position: 'absolute',
                                            left: 20, bottom: 15,
                                            height: 50,
                                            width: 35,
                                            padding: 3
                                        }} ><Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/phone.png')}
                                            style={{
                                                resizeMode: 'contain',
                                                height: '85%',
                                                width: '85%',
                                            }}></Image></View>

                                        <TextInput style={{
                                            marginTop: 2, marginLeft: 10, marginRight: 10,
                                            fontSize: 18,
                                            alignSelf: 'stretch',
                                            height: 45,
                                            paddingRight: 45,
                                            paddingLeft: 50,
                                            borderWidth: 1,
                                            paddingVertical: 0,
                                            borderColor: 'grey',
                                            borderRadius: 25, marginBottom: 20
                                        }}
                                            placeholder='Số điện thoại'
                                            keyboardType='numeric'
                                        />
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={{
                                        position: 'relative',
                                        alignSelf: 'stretch',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            position: 'absolute',
                                            left: 20, bottom: 15,
                                            height: 50,
                                            width: 35,
                                            padding: 3
                                        }} ><Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/location2.png')}
                                            style={{
                                                resizeMode: 'contain',
                                                height: '85%',
                                                width: '85%',
                                            }}></Image></View>
                                        <TextInput style={{
                                            marginTop: 2, marginLeft: 10, marginRight: 10,
                                            fontSize: 18,
                                            alignSelf: 'stretch',
                                            height: 45,
                                            paddingRight: 45,
                                            paddingLeft: 50,
                                            borderWidth: 1,
                                            paddingVertical: 0,
                                            borderColor: 'grey',
                                            borderRadius: 25, marginBottom: 20
                                        }}
                                            placeholder='Địa chỉ'
                                        />
                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: -40, backgroundColor: 'orange', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                            <TouchableOpacity onPress={() => setScreenOne(!screenOne)}><Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>Tiếp theo</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    ) : (<View>
                        {(screenTwo) ?

                            (
                                <View>
                                    <View style={{ flexDirection: 'column', borderRadius: 15, width: screenWidth / 1.1, height: screenHeight / 1.8, backgroundColor: 'white' }}
                                    >

                                        <View style={{ flexDirection: 'row' }}>


                                            <TouchableOpacity onPress={() => setScreenOne(!screenOne)}>
                                                <View style={{
                                                    justifyContent: 'center', alignItems: 'center',
                                                    borderTopLeftRadius: 15,
                                                    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                                    height: 50, backgroundColor: 'orange'
                                                }}>
                                                    <Text style={{ color: "white", fontSize: 19 }}>Bước 1</Text>
                                                </View></TouchableOpacity>

                                            <TouchableOpacity>
                                                <View style={{
                                                    justifyContent: 'center', alignItems: 'center',
                                                    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                                    height: 50, backgroundColor: 'white'
                                                }}>
                                                    <Text style={{ color: "orange", fontSize: 19 }}>Bước 2</Text>

                                                </View></TouchableOpacity>
                                            <TouchableOpacity>
                                                <View style={{
                                                    justifyContent: 'center', alignItems: 'center',
                                                    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50,
                                                    backgroundColor: 'orange'
                                                }}>
                                                    <Text style={{ color: "white", fontSize: 19 }}>Bước 3</Text>
                                                </View></TouchableOpacity>
                                            <View style={{ borderTopRightRadius: 15, width: screenWidth / 8.8, height: 50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={() => hideModal(!modal)} >
                                                    <Image style={{ width: 32 * 80 / 100, height: 32 * 80 / 100 }}
                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}></Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View></View>


                                        </View>
                                        <DateTimePickerModal
                                            locale="en_GB" mode='time'
                                            isVisible={isVisible}
                                            onConfirm={handlePickerTime}
                                            onCancel={hidePickerTime}
                                            headerTextIOS={'Chọn giờ'}
                                            cancelTextIOS={'Đóng'}
                                            confirmTextIOS={'Xác nhận'}
                                            is24Hour={true}	>
                                        </DateTimePickerModal>
                                        <DateTimePickerModal
                                            locale="vi_VN"
                                            mode='date'
                                            isVisible={isVisibleDate}
                                            onConfirm={handlePickerDate}
                                            onCancel={hidePickerDate}
                                            headerTextIOS={'Chọn ngày'}
                                            cancelTextIOS={'Đóng'}
                                            confirmTextIOS={'Xác nhận'}
                                            is24Hour={true}	>
                                        </DateTimePickerModal>

                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: screenWidth / 1.1, height: screenHeight / 2.3 }}>

                                            <Image style={{ left: screenWidth / 10, height: 42 * 8 / 10, width: 42 * 8 / 10, position: 'absolute', }}
                                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/calendar.png')}></Image>
                                            <Image style={{ resizeMode: 'contain', width: '90%' }}

                                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box.png')}></Image>
                                            <View><TouchableOpacity onPress={showPickerTime}><Text style={{ position: 'absolute', right: screenWidth / 2.2, fontSize: 20, top: -10 }} >{chosenTime}</Text></TouchableOpacity></View>
                                            <View><TouchableOpacity onPress={showPickerDate}><Text style={{ position: 'absolute', right: screenWidth / 7, fontSize: 20, top: -10 }} >{chosenDate}</Text></TouchableOpacity></View>

                                        </View>

                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center', top: -40, backgroundColor: 'orange', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                        <TouchableOpacity onPress={() => setScreenTwo(!screenTwo)}><Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>Tiếp theo</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>) : (
                                <View>
                                    <View style={{ flexDirection: 'column', borderRadius: 15, width: screenWidth / 1.1, height: screenHeight / 1.8, backgroundColor: 'white' }}
                                    >

                                        <View style={{ flexDirection: 'row' }}>


                                            <TouchableOpacity>
                                                <View style={{
                                                    justifyContent: 'center', alignItems: 'center',
                                                    borderTopLeftRadius: 15,
                                                    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                                    height: 50, backgroundColor: 'orange'
                                                }}>
                                                    <Text style={{ color: "white", fontSize: 19 }}>Bước 1</Text>
                                                </View></TouchableOpacity>

                                            <TouchableOpacity onPress={() => setScreenTwo(!screenTwo)}>
                                                <View style={{
                                                    justifyContent: 'center', alignItems: 'center',
                                                    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3,
                                                    height: 50, backgroundColor: 'orange'
                                                }}>
                                                    <Text style={{ color: 'white', fontSize: 19 }}>Bước 2</Text>

                                                </View></TouchableOpacity>
                                            <TouchableOpacity >
                                                <View style={{
                                                    justifyContent: 'center', alignItems: 'center',
                                                    width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50,
                                                    backgroundColor: 'white'
                                                }}>
                                                    <Text style={{ color: "orange", fontSize: 19 }}>Bước 3</Text>
                                                </View></TouchableOpacity>
                                            <View style={{ borderTopRightRadius: 15, width: screenWidth / 8.8, height: 50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity onPress={() => hideModal(!modal)} >
                                                    <Image style={{ width: 32 * 80 / 100, height: 32 * 80 / 100 }}
                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close2.png')}></Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View></View>


                                        </View>

                                        <View style={{ flexDirection: 'column', alignItems: 'center' }}><Text style={{ fontWeight: '600', fontSize: 18, top: 15 }}>
                                            Bạn gặp phải vấn đề gì ?
                                            </Text>
                                            <View style={{ width: screenWidth / 1.1, alignItems: 'center', top: 20 }}>
                                                <Image style={{ resizeMode: 'contain', width: '90%' }}
                                                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box.png')}></Image>
                                                <View style={{ flexDirection: 'row', position: 'absolute' }}>
                                                    <View style={{ width: 220 }}><TouchableOpacity onPress={() => hideModal2(!modal2)} >
                                                        <Text style={{ top: 35, left: -25, fontSize: 20 }}>{service}</Text>
                                                    </TouchableOpacity></View>
                                                    <Image style={{ top: 30, left: 10 }}
                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/list.png')}></Image>
                                                </View>
                                            </View>
                                            <Modal style={{ justifyContent: 'flex-end' }}
                                                isVisible={modal2}
                                                animationIn={'slideInUp'}
                                                animationOutTiming={1600}
                                                animationOut={'slideOutDown'}>
                                                <View style={{ height: screenHeight / 2.5, width: screenWidth / 1.1, backgroundColor: 'white', flexDirection: 'column', alignItems: 'center' }}>
                                                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                                                        <Text style={{ fontSize: 22, fontWeight: '600' }}>Chọn dịch vụ</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ width: 320 }}>

                                                            <Text style={{ fontSize: 20, marginTop: 25, textAlign: 'left' }}
                                                                onPress={() => { setService('DV Cung cấp nước sạch'), hideModal2(!modal2) }} >DV Cung cấp nước sạch</Text>
                                                        </View>
                                                        {
                                                            (service === 'DV Cung cấp nước sạch') &&
                                                            (
                                                                <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -20 }}>
                                                                    <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                                                        }
                                                    </View>
                                                    <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ width: 320 }}>
                                                            <Text style={{ fontSize: 20, marginTop: 25 }}
                                                                onPress={() => { setService('Sửa chữa tại nhà'), hideModal2(!modal2) }} >Sửa chữa tại nhà</Text>
                                                        </View>
                                                        {
                                                            (service === 'Sửa chữa tại nhà') &&
                                                            (
                                                                <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -20 }}>
                                                                    <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                                                        }
                                                    </View>
                                                    <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ width: 320 }}>

                                                            <Text style={{ fontSize: 20, marginTop: 25 }}
                                                                onPress={() => { setService('DV Bảo vệ môi trường'), hideModal2(!modal2) }} >DV Bảo vệ môi trường</Text>
                                                        </View>
                                                        {
                                                            (service === 'DV Bảo vệ môi trường') &&
                                                            (
                                                                <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -20 }}>
                                                                    <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                                                        }
                                                    </View>
                                                    <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <View style={{ width: 320 }}>

                                                            <Text style={{ fontSize: 20, marginTop: 25 }}
                                                                onPress={() => { setService('Chăm sóc sức khoẻ'), hideModal2(!modal2) }} >Chăm sóc sức khoẻ</Text>
                                                        </View>
                                                        {
                                                            (service === 'Chăm sóc sức khoẻ') &&
                                                            (
                                                                <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -20 }}>
                                                                    <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                                                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                                                        }
                                                    </View>
                                                    <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                                                </View>
                                            </Modal>
                                            <TextInput style={{
                                                marginTop: 20, marginLeft: 10, marginRight: 10,
                                                fontSize: 20,
                                                alignSelf: 'stretch',
                                                height: 125,
                                                paddingRight: 20,
                                                paddingLeft: 20,
                                                borderWidth: 1,
                                                paddingTop: 10, paddingBottom: 10,

                                                borderColor: 'grey',
                                                borderRadius: 10
                                            }} multiline={true}
                                            keyboardType={'numbers-and-punctuation'}
                                                placeholder='Địa chỉ'
                                            ></TextInput>

                                        </View>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center', top: -40, backgroundColor: 'orange', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                                        <TouchableOpacity onPress={() => hideModal(!modal)}><Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>End</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                    </View>)
                }




            </Modal>
            <Image style={{ width: screenWidth - 10, resizeMode: 'contain' }}
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/cham-soc-suc-khoe.png')}></Image>
            <Text style={{ alignSelf: 'center', fontSize: 18, textDecorationStyle: 'solid', top: -20 }}>Chăm sóc sức khoẻ</Text>
            <TouchableOpacity onPress={() => hideModal(!modal)}>
                <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/call_service.png')}
                    style={{ alignSelf: 'center', width: 258 * 65 / 100, height: 86 * 65 / 100, top: screenHeight - 500 }}></Image>
            </TouchableOpacity>
        </View>
    )
}