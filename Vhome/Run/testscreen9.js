//screen 9 cũ
import React, { Component, useState } from 'react';
import { AppRegistry, FlatList, View, Image, TouchableOpacity, ScrollView, Text, SafeAreaView, TextInput, StyleSheet, Button, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Modal from "react-native-modal";

import { createStackNavigator } from "@react-navigation/stack";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function HealthCare({ navigation }) {
    const [modal, hideModal] = useState(false)
    const [screenOne, setScreenOne] = useState(false)
    return (
        <View style={{ alignSelf: 'center' }}>
            <Modal isVisible={modal}
                animationOut={'fadeOut'}
                animationIn={'fadeIn'}
                animationInTiming={10}

                style={{ alignSelf: 'center' }}>
                <View style={{ flexDirection: 'column', borderRadius: 15, width: screenWidth / 1.1, height: screenHeight / 1.8, backgroundColor: 'white' }}
                >
                    <View style={{ flexDirection: 'row' }}>


                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 15, width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50, backgroundColor: 'white' }}>
                                <Text style={{ color: "orange", fontSize: 19 }}>Bước 1</Text>
                            </View></TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center', width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50, backgroundColor: 'orange'
                            }}>
                                <Text style={{ color: "white", fontSize: 19 }}>Bước 2</Text>

                            </View></TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: (screenWidth / 1.1 - screenWidth / 8.8) / 3, height: 50, backgroundColor: 'orange' }}>
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
                    <TouchableOpacity onPress={() => setScreenOne(!screenOne)}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>Tiếp theo</Text>
                    </TouchableOpacity>
                </View>
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