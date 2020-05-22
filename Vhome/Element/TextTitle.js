import React, { Component, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, Text, TextInput, StyleSheet, Button, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function TextTitle () { 

    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", alignSelf: 'stretch' }}>

            <TextInput
                placeholder="Tìm kiếm dịch vụ"
                style={{
                    marginLeft: 10, marginRight: 10,
                    fontSize: 16,
                    width: screenWidth - 78,
                    height: 42,
                    paddingRight: 45,
                    paddingLeft: 45,
                    marginTop: -2,
                    borderWidth: 1,
                    paddingVertical: 0,
                    borderColor: 'grey',
                    borderRadius: 25, backgroundColor: 'white'
                }}

            ></TextInput>
            <View style={{
                position: 'absolute',
                left: 23, top: 1,
                height: 50,
                width: 35,
                padding: 3
            }} ><Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/search.png')}
                style={{
                    resizeMode: 'contain',
                    height: '85%',
                    width: '85%',
                }}></Image></View>

        </View>
    )
}