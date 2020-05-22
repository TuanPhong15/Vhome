import React, { Component, useState } from 'react';
import {Button,TouchableHighlight, AppRegistry,Dimensions ,View, Image, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer,DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import newDraw2 from './newDraw2'
const screenWidth = Dimensions.get('window').width;



export default function newDraw1({ navigation }) {
   
return(  <View>

    <View style={{
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }}>
        <TouchableHighlight style={{ marginLeft: 10, marginTop: 20 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
                style={{ width: 32, height: 32 }}
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/menu2.png')}
            />
        </TouchableHighlight>
    </View>

    <View style={{ flexDirection: 'column', }}>

        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: -17 }}>


            <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginRight: 8 }}>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/hut-be-phot.png')}></Image></View>


            <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 8 }}>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/thong-tac-cong.png')}></Image></View>

        </View>
 <View style={{ flexDirection: "row", marginTop: 16, alignSelf: 'center' }}>
            <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginRight: 8 }}>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/thong-tac-bon-cau.png')}></Image></View>

            <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 8 }}>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/thong-tac-chau-rua-bat.png')}></Image></View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 16, alignSelf: 'center' }}>
            <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginRight: 8 }}>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/nao-vet-cong-ho-ga.png')}></Image></View>

            <View style={{ height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 8 }}>
                <Image style={{ resizeMode: 'contain', height: '100%', width: '100%' }}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/image/thau-rua-be-nuoc.png')}></Image></View>
        </View>



    </View>


</View>
)
}