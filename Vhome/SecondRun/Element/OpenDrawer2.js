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
export default function OpenDrawer2() {
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
        </View>

    )
}