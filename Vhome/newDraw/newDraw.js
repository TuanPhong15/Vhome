import React from "react";
import { Text, View,  TouchableOpacity, Dimensions, Image, TextInput, StyleSheet,FlatList,ScrollView,SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    DrawerContent
} from '@react-navigation/drawer';

import Button from 'react-native-button';

import {
    createDrawerNavigator
} from '@react-navigation/drawer';
import newDraw1 from './newDraw1'

import newDraw2 from './newDraw2'
import newDraw3 from './newDraw3'
const screenWidth = Dimensions.get('window').width;
const screenHeight =Dimensions.get('window').height
const Stack = createDrawerNavigator();
function HeaderDraw(){ 
    return(
        <View>
            <View style={{backgroundColor:"orange",height:screenHeight/3.4}}>
                <SafeAreaView style={{alignItems:'center',height:130}}>
                    <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/ava_user.png')}
                             style={{resizeMode:'contain',height:'105%'}}></Image>
                    </SafeAreaView>
                <View style={{justifyContent:'center',alignSelf:'center'}}><Text style={{ fontSize: 20, color: 'white' }}>Lưu Hà</Text></View>
                <View style={{ height: 45,alignItems:'center'}}><Image style={{resizeMode:'contain',height:'90%',position:'absolute'}}
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/introductory_code.png')}></Image>
                
                    <Text style={{fontSize:18,color:'orange',top:10,left:10}}>123456</Text>
                </View>

               
            </View>
            
           <ScrollView>
                <View style={{ flexDirection: "row",marginTop:30 }}>
                    <View style={{height:40}}>
                    <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/notification.png')}
                    style={{justifyContent:'flex-end',resizeMode:'contain',height:'70%'}}></Image>
                    </View><TouchableOpacity><Text style={{fontSize:18,top:2,left:10}}>Thông báo</Text></TouchableOpacity>
                  
                    
                    </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/history.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>Lịch sử</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/Reward-Points.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>Điểm thưởng</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/criteria.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>Chính sách và cam kết</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo_vhome_introduce.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>Giới thiệu về V-Home</Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/cskh.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>HOTLINE:0123456789</Text></TouchableOpacity>


                </View>  
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/language.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>Ngôn ngữ </Text></TouchableOpacity>


                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View style={{ height: 40 }}>
                        <Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/log_out.png')}
                            style={{ justifyContent: 'flex-end', resizeMode: 'contain', height: '70%' }}></Image>
                    </View><TouchableOpacity><Text style={{ fontSize: 18, top: 2, left: 10 }}>Đăng xuất</Text></TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    )
}
export default function App() {
    
    return (



        <NavigationContainer>
            <Stack.Navigator
                drawerStyle={{
                    backgroundColor: 'white',width:3*screenWidth/4
                    
                }}
               
                drawerContent={HeaderDraw}>
                <Stack.Screen

                    name="newDraw1"
                    component={newDraw1}
                    options={{
                        drawerLabel: 'Home',
                        drawerIcon: ({ tintColor }) => (
                            <Image
                                source={require("/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png")}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, tintColor: tintColor }}
                            />
                        )

                    }}
                />
                <Stack.Screen name="newDraw2"
                    component={newDraw2}
                    options={{
                        drawerLabel: 'Settings',
                        drawerIcon: ({ tintColor }) => (
                            <Image
                                source={require("/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png")}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, tintColor: tintColor }}
                            />
                        )

                    }} />
                <Stack.Screen name="newDraw3"
                    component={newDraw3}
                    options={{
                        drawerLabel: 'Setup',
                        drawerIcon: ({ tintColor='red' }) => (
                            <Image
                                source={require("/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png")}
                                resizeMode="contain"
                                style={{ width: 20, height: 20, tintColor: tintColor }}
                            />
                        )

                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}