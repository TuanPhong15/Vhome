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


import Services2 from '../screen5-ServiceEPE'
import Notification2 from '../screen6-NotificationEPE'
import History2 from '../screen7-HistoryEPE'
import Reward2 from '../screen8-RewardEPE'
import HealthCare2 from '../screen9-HealthCareEPE'
import OpenDrawer2 from '../Element/OpenDrawer2'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Slack = createDrawerNavigator();

export default function ServiceStack2 () { 

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home function' component={Services2}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerTitle: 'Danh sách việc làm', headerTitleStyle: { color: 'white', fontSize: 19 },
                    headerLeft: props => <OpenDrawer2 {...props} />
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