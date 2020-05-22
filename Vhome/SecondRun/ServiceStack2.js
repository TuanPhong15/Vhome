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


import Services2 from './screen5-ServiceEPE'
import Notification2 from './screen6-NotificationEPE'
import History2 from './screen7-HistoryEPE'
import Reward2 from './screen8-RewardEPE'
import HealthCare2 from './screen9-HealthCareEPE'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Slack = createDrawerNavigator();
function DrawDraw2() {
    const { openDrawer } = useNavigation()
    return (
        <View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableOpacity style={{ marginLeft: 5, marginTop: -5 }}
                onPress={openDrawer}>
                <Image
                    style={{ width: 35, height: 35, tintColor: 'white' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png')}
                />
            </TouchableOpacity>
        </View>)

}
export default function ServiceStack2 () { 

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home function' component={Services2}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerTitle: 'Danh sách việc làm', headerTitleStyle: { color: 'white', fontSize: 19 },
                    headerLeft: props => <DrawDraw2 {...props} />
                }} />
            <Stack.Screen name='Thông báo' component={Notification2}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
            <Stack.Screen name='Lịch sử' component={History2}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
            <Stack.Screen name='Điểm thưởng' component={Reward2}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
            <Stack.Screen name="Chăm sóc sức khoẻ" component={HealthCare2} options={{
                headerStyle: {
                    backgroundColor: 'orange'
                }, headerBackTitleVisible: false, headerTintColor: 'white'
            }} />
        </Stack.Navigator>

    )
}