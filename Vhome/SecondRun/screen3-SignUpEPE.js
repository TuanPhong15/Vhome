import React, { Component, useState } from 'react';
import { AppRegistry, View, Image, TouchableOpacity, Text, Dimensions, TextInput, StyleSheet, Button, TouchableNativeFeedbackComponent } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function SignUp2({ navigation }) {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [Tick, setTick] = useState(true)
    const [Job, setJob] = useState('Hút bể phốt')
    const [Job2, setJob2] = useState('Thông tắc cống')
    const [Job3, setJob3] = useState('Sửa chữa điều hoà')
    const [Job4, setJob4] = useState('Khoan cắt bê tông')
    const [Job5, setJob5] = useState('Chăm sóc sức khoẻ')
    const [show, setShow] = useState(false)
    const [show2,setShow2]=useState(true)
    return (
        <View style={{
            flex: 1, flexDirection: 'column', backgroundColor: 'white',
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderColor: '#000',
                height: 46,
                borderRadius: 25,
                marginLeft: 30, marginRight: 30, marginBottom: 20, marginTop: 60
            }}>
                <Image
                    //We are showing the Image from online
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/phone.png')}
                    style={{
                        padding: 9,
                        margin: 15,
                        height: 23, width: 23,
                        resizeMode: 'stretch',
                    }}
                />
                <TextInput
                    style={{ flex: 1, fontSize: 18 }}
                    placeholder="Số điện thoại nhân viên"
                    keyboardType='phone-pad'

                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderColor: '#000',
                height: 46,
                borderRadius: 25,
                marginLeft: 30, marginRight: 30
            }}>
                <Image
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/user.png')}
                    style={{
                        padding: 9,
                        margin: 15,
                        height: 23, width: 23,
                        resizeMode: 'stretch',
                    }}
                />
                <TextInput
                    style={{ flex: 1, fontSize: 18 }}
                    placeholder="Họ và tên"
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderColor: '#000',
                height: 46,
                borderRadius: 25,
                marginLeft: 30, marginTop: 20, marginRight: 30
            }}>
                <Image
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/pass.png')}
                    style={{
                        padding: 9,
                        margin: 15,
                        height: 23, width: 23,
                        resizeMode: 'stretch',
                    }}
                />
                <TextInput
                    style={{ flex: 1, fontSize: 18 }}
                    placeholder="Mật khẩu"
                    secureTextEntry='true'
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderColor: '#000',
                height: 46,
                borderRadius: 25,
                marginLeft: 30, marginTop: 20, marginRight: 30
            }}>
                <Image
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/repass.png')}
                    style={{
                        padding: 9,
                        margin: 15,
                        height: 23, width: 23,
                        resizeMode: 'stretch',

                    }}
                />
                <TextInput
                    style={{ flex: 1, fontSize: 18 }}
                    placeholder="Nhập lại mật khẩu"
                    secureTextEntry='true'

                />
            </View>
            {(show) && (
                <View style={{ alignItems: 'center', justifyContent: 'center',flexDirection:'column' }}>
                    <View style={{
                        width: screenWidth - 60, backgroundColor: '#fff',
                        borderWidth: 0.5,
                        borderColor: '#000', borderTopColor: 'white', top: 50,height:90, position: 'absolute'

                    }}>
                            <TouchableOpacity onPress={() => setJob('Thông tắc cống')}>
                                <Text style={{}}>Thông tắc cống</Text>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={() => setJob('Thông tắc cống')}>
                            <Text style={{}}>Thông tắc cống</Text>
                        </TouchableOpacity>
                      
                    </View>
                </View>
            )

            }
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderColor: '#000',
                height: 46,
                borderRadius: 25,
                marginLeft: 30, marginTop: 20, marginRight: 30
            }}>
                <Image
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/supplies.png')}
                    style={{
                        padding: 9,
                        margin: 15,
                        height: 23, width: 23,
                        resizeMode: 'stretch',

                    }}
                />

                <View>
                    <TouchableOpacity onPress={() => {setShow(!show),setShow2(!show2)}}><Text>{Job}</Text></TouchableOpacity></View>

            </View>
            {(show2) && (
            <View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                borderColor: '#000',
                height: 46,
                borderRadius: 25,
                marginLeft: 30, marginTop: 20, marginRight: 30
            }}>
                <Image
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/magiamgia.png')}
                    style={{
                        padding: 9,
                        margin: 15,
                        height: 23, width: 23,
                        resizeMode: 'stretch',
                    }}
                />

                <TextInput
                    style={{ flex: 1, fontSize: 18 }}
                    placeholder="Mã giới thiệu"
                />
            </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center', marginLeft: 40, marginRight: 48, marginTop: 20
                }}>
                    <TouchableOpacity style={{
                        position: 'relative'
                    }}
                        onPress={() => setTick(!Tick)}>

                        <Image source={(Tick) ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick.png') : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick2.png')}
                            style={{
                                resizeMode: 'contain',
                                height: '28%'
                            }}
                        ></Image></TouchableOpacity>
                    {/* <Image source={(PasswordVisibility) ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/showpass.png') : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/hidepass.png')} */}

                    <Text style={{ fontSize: 18, color: 'grey' }}>Tôi đồng ý với các điều khoản và chính sách của V-Home</Text>
                </View>
                    </View>)}
        
            <View style={{
                alignItems: 'center', height: 80,
                alignSelf: 'stretch',
                justifyContent: 'center', marginBottom: 20
            }}>
                <TouchableOpacity>
                    <Image
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/registration.png')}
                        style={{
                            resizeMode: 'contain', height: '80%'
                        }}></Image>
                </TouchableOpacity>
                <Text style={{ fontSize: 15, marginLeft: -120, color: 'grey' }}>Bạn đã có tài khoản?</Text>

                <TouchableOpacity onPress={() => navigation.navigate("SignIn2")}
                ><Text style={{ marginLeft: 120, top: -18, color: 'orange', fontSize: 15 }}>Về đăng nhập</Text></TouchableOpacity>
            </View>
        </View>


    )
}