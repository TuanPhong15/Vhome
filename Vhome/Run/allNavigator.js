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
import ContentDrawer from "./Element/ContentDrawer"
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

