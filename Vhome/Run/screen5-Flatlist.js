// sreeen 5 cũ dùng dàn trang thông thường
import React, { Component, useState } from 'react';
import { AppRegistry, FlatList, View, Image, TouchableOpacity, ScrollView, Text, SafeAreaView, TextInput, StyleSheet, Button, Dimensions, Alert } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default function Services({ navigation }) {
    return (
 <View style={{flexDirection:'column'}}>
            <View style={{ flexDirection: 'row',alignSelf:'center'}}>
                
                <TouchableOpacity onPress={() => navigation.navigate('HealthCare')}>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 6,
                     marginRight: 6, marginTop: 16, borderTopLeftRadius: 15, borderTopRightRadius: 15, 
                     borderBottomRightRadius: 15, borderBottomLeftRadius: 15}}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/cham-soc-suc-khoe.png')}></Image>
                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'black', 
                    height: screenWidth / 7, width: screenWidth / 2.2, position: 'absolute', marginLeft: 6, 
                    marginRight: 6, opacity: 0.8, alignSelf: 'flex-end', borderBottomRightRadius: 15, 
                    borderBottomLeftRadius: 15, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', 
                            fontSize: 20, textAlign: 'center', fontWeight: '400'
                        }}>Chăm sóc sức khoẻ</Text>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Environment')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{
                            height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 6,
                            marginRight: 6, marginTop: 16, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                            borderBottomRightRadius: 15, borderBottomLeftRadius: 15
                        }}
                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/bao-ve-moi-truong.png')}></Image>
                        <View style={{
                            flex: 1, flexDirection: 'column', backgroundColor: 'black',
                            height: screenWidth / 7, width: screenWidth / 2.2, position: 'absolute', marginLeft: 6,
                            marginRight: 6, opacity: 0.8, alignSelf: 'flex-end', borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15, justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white', alignSelf: 'center',
                                fontSize: 20, textAlign: 'center', fontWeight: '400'
                            }}>DV bảo vệ môi trường</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                <TouchableOpacity onPress={() => navigation.navigate('Electric')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{
                            height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 6,
                            marginRight: 6, marginTop: 16, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                            borderBottomRightRadius: 15, borderBottomLeftRadius: 15
                        }}
                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/thong-tac-bon-cau.png')}></Image>
                        <View style={{
                            flex: 1, flexDirection: 'column', backgroundColor: 'black',
                            height: screenWidth / 7, width: screenWidth / 2.2, position: 'absolute', marginLeft: 6,
                            marginRight: 6, opacity: 0.8, alignSelf: 'flex-end', borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15, justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white', alignSelf: 'center',
                                fontSize: 20, textAlign: 'center', fontWeight: '400'
                            }}>DV Điện/Nước</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('fixHome')}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{
                            height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 6,
                            marginRight: 6, marginTop: 16, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                            borderBottomRightRadius: 15, borderBottomLeftRadius: 15
                        }}
                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/thong-tac-chau-rua-bat.png')}></Image>
                        <View style={{
                            flex: 1, flexDirection: 'column', backgroundColor: 'black',
                            height: screenWidth / 7, width: screenWidth / 2.2, position: 'absolute', marginLeft: 6,
                            marginRight: 6, opacity: 0.8, alignSelf: 'flex-end', borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15, justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white', alignSelf: 'center',
                                fontSize: 20, textAlign: 'center', fontWeight: '400'
                            }}>DV Sửa Nhà</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        )
    
}

