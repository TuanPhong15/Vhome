import React, { Component, useState } from 'react';
import { Button, AppRegistry,TouchableHighlight, Dimensions, View, Image, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer,DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const screenWidth = Dimensions.get('window').width;

export default function newDraw3({ navigation }) {
    return (<View>
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
        <View styles={{
            flex: 1,
            flexDirection: "column",
            alignItems: 'center',
            width: screenWidth,
            backgroundColor: 'white'
        }}><Text style={{marginLeft:180,marginTop:180,fontSize:20}}>Screen 3</Text>
        </View>
         </View >
    )
}