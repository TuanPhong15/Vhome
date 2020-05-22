import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, Image, TextInput, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { NavigationContainer, useNavigation, useScrollToTop, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './screen1-Home'
import SignIn from './screen2-SignIn'
import SignIn2 from '../SecondRun/screen2-SignInEPE'
import SignUp from './screen3-SignUp'
import SignUp2 from '../SecondRun/screen3-SignUpEPE'
import Pass from './screen4-forgetPass'
import Pass2 from '../SecondRun/screen4-forgetPassEPE'
import HealthCare from './screen9-HealthCare'
import Environment from './screen10-Environment'
import Electric from './screen11-Electric'
import fixHome from './screen12-fixHome'
import ContentDrawer2 from '../SecondRun/Element/ContentDrawer2'
import ServiceStack2 from '../SecondRun/Element/ServiceStack2'
import ServiceStack from './Element/ServiceStack'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Slack = createDrawerNavigator();




function ServiceDraw() {

    return (
        <Slack.Navigator
            drawerStyle={{
                backgroundColor: 'white', width: 11 * screenWidth / 12
            }}
            drawerContent={props => <ContentDrawer {...props} />}>
            <Slack.Screen name="allServices"
                component={ServiceStack}></Slack.Screen>

        </Slack.Navigator>

    )
}
function ContentDrawer({ navigation }) {
    const [unhideModal, hideModal] = useState(false)
    const [unhideModal1, hideModal1] = useState(false)
    const [unhideModal2, hideModal2] = useState(false)
    const [unhideState, hideState] = useState(false)
    const [VietNamese, hideVietNamese] = useState(false)
    const [EngLish, hideEngLish] = useState(false)
    return (
        <View style={{ flex: 1 }}>

            <Modal
                isVisible={unhideModal}
                animationIn='fadeIn'>
                <Image style={{
                    alignSelf: 'center',
                    width: 718 * 45 / 100, height: 260 * 45 / 100, borderRadius: 10
                }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box_policy.png')}></Image>


                <Text style={{
                    fontSize: 20, textAlign: 'center', position: 'absolute',
                    alignSelf: "center", fontStyle: 'italic', bottom: screenHeight / 2 - 15
                }}>Đi đến xem chính sách tại: {'\n'} <Text
                    style={{ color: 'blue' }}> http://appvhome.com.</Text></Text>

                <View style={{ bottom: 35, flexDirection: 'row', alignSelf: 'center' }}>
                    <TouchableOpacity >
                        <Text style={{
                            fontSize: 20, right: screenWidth / 7

                        }}>Tiếp tục </Text></TouchableOpacity  >
                    <TouchableOpacity onPress={() => hideModal(!unhideModal)}><Text style={{ fontSize: 20, left: screenWidth / 10, color: 'orange' }}>Huỷ</Text></TouchableOpacity>
                </View>
            </Modal>
            <Modal



                isVisible={unhideModal1}
                animationIn='fadeIn'

            >

                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'column', borderRadius: 15, alignItems: 'center', width: screenWidth - 25, alignSelf: 'center', backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 26, color: 'orange', top: 5 }}>Giới thiệu về V-Home</Text>

                            <TouchableOpacity onPress={() => hideModal1(!unhideModal1)} >
                                <Image style={{ left: screenWidth / 13, height: 32 * 80 / 100, width: 32 * 80 / 100, top: 6 }}
                                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/close.png')}></Image>
                            </TouchableOpacity>

                        </View>
                        <View style={{ marginTop: 8, opacity: 0.2, height: 1, width: screenWidth - 25, backgroundColor: 'black' }}></View>

                        <ScrollView>
                            <Text style={{ fontSize: 20, color: 'grey', marginBottom: 25, marginTop: 5 }}>
                                V-Home là ứng dụng hỗ trợ khách {'\n'}hàng gọi các dịch vụ từ cơ bản đến {'\n'}phức tạp , trọng tâm là sửa chữa bảo{'\n'}dưỡng đồ điện tử-điện lạnh, thi công{'\n'}xây dựng và cho thuê máy móc.{'\n'}Giúp kết nối dịch vụ và khách hàng{'\n'}một cách hiệu quả.{'\n'}{'\n'}Đối với Đối tác:Đề cao tinh thần{'\n'}hợp tác cùng phát triển; cam kết trở{'\n'}thành:"Người đồng hành vạn năng -{'\n'}tin cậy,"mang đến cho đối tác sự hài {'\n'}lòng, an tâm khi hợp tác.{'\n'}{'\n'}Đối với Nhân Viên:Định hướng đào{'\n'}tạo từ bên trong,xây dựng môi{'\n'}trường làm việc chuyên nghiệp,năng{'\n'}động, sáng tạo và nhân văn;tạo{'\n'}điều kiện thu nhập và cơ hội phát{'\n'}triển công bằng cho tất cả nhân{'\n'}viên.{'\n'}{'\n'}Đối với Xã Hội: Hài hoà lợi ích doanh{'\n'}nghiệp với lợi ích xã hội;đóng góp{'\n'}tích cực vào các hoạt động hướng về{'\n'}cộng đồng, thể hiện tinh thần trách{'\n'}nhiệm công dân và niềm tự hào dân{'\n'}tộc. </Text>
                        </ScrollView>



                    </View>
                </SafeAreaView>
            </Modal>
            <View style={{ backgroundColor: "orange", height: screenHeight / 3.4 }}>
                <SafeAreaView style={{ alignItems: 'center', height: 130 }}>
                    <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/ava_user.png')}
                        style={{ resizeMode: 'contain', height: '105%' }}></Image>
                </SafeAreaView>
                <View style={{ justifyContent: 'center', alignSelf: 'center' }}><Text style={{ fontSize: 20, color: 'white' }}>Lưu Hà</Text></View>
                <View style={{ height: 45, alignItems: 'center' }}><Image style={{ resizeMode: 'contain', height: '90%', position: 'absolute' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/introductory_code.png')}></Image>
                    <Text style={{ fontSize: 18, color: 'orange', top: 10, left: 10 }}>123456</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/notification.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => navigation.navigate("Thông báo")} ><Text style={{ fontSize: 18, top: 2, left: 10 }}>Thông báo</Text></TouchableOpacity>
                        <View style={{ height: 30 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/next.png')}
                                style={{ resizeMode: 'contain', height: '80%', left: screenWidth / 2 }}></Image></View>
                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/history.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => navigation.navigate("Lịch sử")}><Text style={{ fontSize: 18, top: 2, left: 10 }}>Lịch sử</Text></TouchableOpacity>
                        <View style={{ height: 30 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/next.png')}
                                style={{ resizeMode: 'contain', height: '80%', left: screenWidth / 1.75 }}></Image></View>
                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/Reward-Points.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => navigation.navigate("Điểm thưởng")}><Text style={{ fontSize: 18, top: 2, left: 10 }}>Điểm thưởng</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/criteria.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => hideModal(!unhideModal)}
                        ><Text style={{ fontSize: 18, top: 2, left: 10 }}>Chính sách và cam kết</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View>


                <View style={{ flexDirection: 'column', marginTop: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo_vhome_introduce.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => hideModal1(!unhideModal1)} ><Text style={{ fontSize: 18, top: 2, left: 10 }}>Giới thiệu về V-Home</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View >
                <Modal



                    isVisible={unhideModal2}
                    animationIn='fadeIn'

                >


                    <Image style={{
                        alignSelf: 'center',
                        width: 718 * 45 / 100, height: 260 * 45 / 100, borderRadius: 10
                    }}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/call_box3.png')}></Image>


                    <Text style={{
                        fontSize: 20, textAlign: 'center', position: 'absolute',
                        alignSelf: "center", fontWeight: '600', bottom: screenHeight / 2
                    }}>+ 84 19008644</Text>

                    <View style={{ bottom: 35, flexDirection: 'row', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => hideModal2(!unhideModal2)} >
                            <Text style={{
                                fontSize: 20, right: screenWidth / 7, color: "deepskyblue"

                            }}>Huỷ</Text></TouchableOpacity  >
                        <TouchableOpacity ><Text style={{ fontSize: 20, left: screenWidth / 7, fontWeight: '600', color: 'deepskyblue' }}>Gọi</Text></TouchableOpacity>
                    </View>
                </Modal>


                <View style={{ flexDirection: 'column', marginTop: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/cskh.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => hideModal2(!unhideModal2)}><Text style={{ fontSize: 18, top: 2, left: 10 }}>HOTLINE: 19008644</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View>




                <View style={{ flexDirection: 'column', marginTop: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/language.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity onPress={() => hideState(!unhideState)}><Text style={{ fontSize: 18, top: 2, left: 10 }}>Ngôn ngữ </Text></TouchableOpacity>
                        <View style={{ height: 30 }}>
                            <Image source={(unhideState) ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/down2.png') : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/next.png')}
                                style={{ resizeMode: 'contain', height: '80%', left: screenWidth / 2 }}></Image></View>


                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View >



                <View>
                    {unhideState && <View style={{ flexDirection: 'column', marginTop: 20, left: 10 }}>

                        <View style={{ flexDirection: "row" }}>
                            <View style={{ height: 40 }}>

                            </View>

                            <TouchableOpacity onPress={() => hideVietNamese(!VietNamese)}>
                                <Text style={{ fontSize: 18, top: 2, left: 10 }}>Tiếng Việt</Text>
                            </TouchableOpacity>
                            <View>

                                <Image source={(VietNamese) ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png') : null}
                                    style={{ left: screenWidth / 1.75, height: 42 * 9 / 10, width: 42 * 9 / 10 }}></Image></View>




                        </View>
                        <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                        <View style={{ flexDirection: "row", marginTop: 20 }}>
                            <View style={{ height: 40 }}>

                            </View><TouchableOpacity onPress={() => hideVietNamese(!VietNamese)}><Text style={{ fontSize: 18, top: 2, left: 10 }}>Tiếng Anh</Text></TouchableOpacity>
                            <View>

                                <Image source={(VietNamese) ? null : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/tick3.png')}
                                    style={{ left: screenWidth / 1.75, height: 42 * 9 / 10, width: 42 * 9 / 10 }}></Image></View>


                        </View>
                        <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                    </View >


                    }


                </View>



                <View style={{ flexDirection: 'column', marginTop: 20 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40 }}>
                            <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/log_out.png')}
                                style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                        </View><TouchableOpacity ><Text style={{ fontSize: 18, top: 2, left: 10 }}>Đăng xuất</Text></TouchableOpacity>



                    </View>
                    <View style={{ width: 11 * screenWidth / 12, height: 1, backgroundColor: 'grey', opacity: 0.45 }}></View>
                </View >

            </ScrollView>

        </View>
    )
}
function ServiceDraw2() {

    return (
        <Slack.Navigator
            drawerStyle={{
                backgroundColor: 'white', width: 11 * screenWidth / 12
            }}
            drawerContent={props => <ContentDrawer2 {...props} />}>
            <Slack.Screen name="allServices"
                component={ServiceStack2}></Slack.Screen>

        </Slack.Navigator>

    )
}


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Đăng nhập"
                    component={SignIn}
                    options={{
                        headerStyle: {
                            backgroundColor: 'orange',
                        },
                        headerTintColor: 'white', headerBackTitleVisible: false


                    }} />
                <Stack.Screen name='SignIn2'
                    component={SignIn2}
                    options={{
                        headerStyle: {
                            backgroundColor: 'orange',
                        },
                        headerTintColor: 'white', headerBackTitleVisible: false, title: 'Đăng nhập'
                    }}
                />
                <Stack.Screen name="Đăng ký"
                    component={SignUp}
                    options={{
                        headerStyle: {
                            backgroundColor: 'orange',
                        },
                        headerTintColor: 'white', headerBackTitleVisible: false
                    }} />
                <Stack.Screen name='SignUp2'
                    component={SignUp2}
                    options={{
                        headerStyle: {
                            backgroundColor: 'orange',
                        },
                        headerTintColor: 'white', headerBackTitleVisible: false, title: 'Đăng ký'
                    }} />
                <Stack.Screen name="Lấy lại mật khẩu" component={Pass}
                    options={{
                        headerStyle: {
                            backgroundColor: 'orange'
                        }, headerTintColor: 'white', headerBackTitleVisible: false
                    }} />
                <Stack.Screen name='forgetPass2'
                    component={Pass2}
                    options={{
                        headerStyle: {
                            backgroundColor: 'orange',
                        },
                        headerTintColor: 'white', headerBackTitleVisible: false, title: 'Lấy lại mật khẩu'
                    }} />


                <Stack.Screen
                    name="ServiceDraw"
                    component={ServiceDraw}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ServiceDraw2"
                    component={ServiceDraw2}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="HealthCare" component={HealthCare} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white', headerTitle: "Chăm sóc sức khoẻ"
                }} />
                <Stack.Screen name="Environment" component={Environment} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
                <Stack.Screen name="Electric" component={Electric} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
                <Stack.Screen name="fixHome" component={fixHome} options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
            </Stack.Navigator>

        </NavigationContainer>

    );
}

