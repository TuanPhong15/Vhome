import React, { Component, useState } from 'react';
import { AppRegistry, FlatList, View, Image, TouchableOpacity, ScrollView, Text, SafeAreaView, TextInput, StyleSheet, Button, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import moment from 'moment'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker"

export default function Environment() {
    const [modal, hideModal] = useState(false)
    const [modal2, hideModal2] = useState(false)

    const [screenOne, setScreenOne] = useState(true)
    const [screenTwo, setScreenTwo] = useState(true)
    const [isVisible, Visible] = useState(false)
    const [chosenTime, setChosenTime] = useState('23:57')
    const [isVisibleDate, VisibleDate] = useState(false)
    const [chosenDate, setChosenDate] = useState('25th March 2020')
    const [showImage1, setShowImage1] = useState(true)
    const [service, setService] = useState('DV cung cấp nước sạch')


    handlePickerTime = (time) => {

        Visible(false),
            setChosenTime(moment(time).format('HH:mm'))

    }
    handlePickerDate = (date) => {

        VisibleDate(false),
            setChosenDate(moment(date).format('Do MMMM YYYY '))

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


                        <View style={{ width: screenWidth / 1.1, alignItems: 'center', top: 10 }}>
                            <Image style={{ resizeMode: 'contain', width: '90%' }}
                                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box.png')}></Image>
                            <View style={{ flexDirection: 'row', position: 'absolute' }}>
                                <TouchableOpacity onPress={() => hideModal2(!modal2)} >
                                    <Text style={{ top: 35, left: -25, fontSize: 20 }}>{service}</Text>
                                </TouchableOpacity>
                                <Image style={{ top: 30, left: 30 }}
                                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/list.png')}></Image>
                            </View>
                        </View>

                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', top: -40, backgroundColor: 'orange', height: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                        <TouchableOpacity onPress={() => setScreenTwo(!screenTwo)}><Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>Tiếp theo</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                <Modal style={{ justifyContent: 'flex-end' }}
                    isVisible={modal2}
                    animationIn={'slideInUp'}
                    animationOutTiming={1600}
                    animationOut={'slideOutDown'}>
                    <View style={{ height: screenHeight / 3, width: screenWidth, backgroundColor: 'white', flexDirection: 'column',alignItems:'center' }}>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: 22,fontWeight:'600' }}>Chọn dịch vụ</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 25,textAlign:'left'}}
                                onPress={() => { setService('DV Cung cấp nước sạch'), hideModal2(!modal2) }} >DV Cung cấp nước sạch</Text>
                            {
                                (service==='DV Cung cấp nước sạch') &&
                                (
                                    <View style={{marginLeft:screenWidth/5.5,position:'absolute',right:-60}}>
                                        <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                            }
                        </View>
                        <View style={{height:1,width:350,backgroundColor:'grey',marginTop:10}}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 25 }}
                                onPress={() => { setService('Sửa chữa tại nhà'), hideModal2(!modal2)}} >Sửa chữa tại nhà</Text>
                            {
                                (service === 'Sửa chữa tại nhà') &&
                                (
                                    <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -60 }}>
                                        <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                            }
                        </View>
                        <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 25 }}
                                onPress={() => { setService('DV Bảo vệ môi trường'), hideModal2(!modal2) }} >DV Bảo vệ môi trường</Text>
                            {
                                (service === 'DV Bảo vệ môi trường') &&
                                (
                                    <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -60 }}>
                                        <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                            }
                        </View>
                        <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 25 }}
                                onPress={() => { setService('Chăm sóc sức khoẻ'), hideModal2(!modal2) }} >Chăm sóc sức khoẻ</Text>
                            {
                                (service === 'Chăm sóc sức khoẻ') &&
                                (
                                    <View style={{ marginLeft: screenWidth / 5.5, position: 'absolute', right: -60 }}>
                                        <Image style={{ tintColor: 'skyblue', height: 42 * 8 / 10, width: 42 * 8 / 10, marginTop: 25 }}
                                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}></Image></View>)
                            }
                        </View>
                        <View style={{ height: 1, width: 350, backgroundColor: 'grey', marginTop: 10 }}></View>
                    </View>
                </Modal>


            </Modal>

            <TouchableOpacity onPress={() => hideModal(!modal)} >
                <Text>Button</Text>
            </TouchableOpacity>
        </View>

    )
}