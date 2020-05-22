import React, { Component, useState } from 'react';
import { Button,TouchableHighlight, AppRegistry, Dimensions, View, Image, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer,DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import newDraw3 from './newDraw3'
const screenWidth = Dimensions.get('window').width;


export default function newDraw2({ navigation }) {
    return ( <View> 
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
            
            backgroundColor: 'white',marginTop:720
        }}><Text style={{marginLeft:150,marginTop:130,fontSize:30}}>Screen 2</Text>
            <Button title='Click here'
                onPress={() => navigation.navigate("newDraw3")}
                styles={{ marginTop: 750, backgroundColor: 'red' }} ></Button>
        </View></View>
    )
}