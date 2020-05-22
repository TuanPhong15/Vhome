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
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Slack = createDrawerNavigator();
import TextTitle from './TextTitle'
import Services from '../screen5-Service'
import Notification from '../screen6-Notification'
import History from '../screen7-History'
import Reward from '../screen8-Reward'
import OpenDrawer from './OpenDrawer'
export default function ServiceStack2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home function' component={Services}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerTitle: props => <TextTitle {...props} />,
                    headerLeft: props => <OpenDrawer {...props} />
                }} />
            <Stack.Screen name='Thông báo' component={Notification}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
            <Stack.Screen name='Lịch sử' component={History}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />
            <Stack.Screen name='Điểm thưởng' component={Reward}
                options={{
                    headerStyle: {
                        backgroundColor: 'orange'
                    }, headerBackTitleVisible: false, headerTintColor: 'white'
                }} />

        </Stack.Navigator>

    )
}

