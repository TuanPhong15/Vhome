import React, { Component, useState } from 'react';
import { FlatList, View, Image, TouchableOpacity, Text, TextInput, StyleSheet, Button, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import flatListdata2 from '../SecondRun/flatListData8EPE'

class FlatlistItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            
            <View style={{ flexDirection: 'column'}}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: screenWidth / 2.2, width: screenWidth / 2.2 ,marginLeft:3,marginRight:3,marginTop:6}}
                        source={{ uri: this.props.item.image}}></Image>
                    <View style={{ flex: 1, flexDirection: 'column', height: screenWidth / 6.5, width: screenWidth / 2.2, position: 'absolute', marginLeft: 6, marginRight: 6, alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ color: 'orange', alignSelf: 'center', fontSize: 18, textAlign: 'center' }}>{this.props.item.name}</Text>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'column', height: screenWidth / 6.5, width: screenWidth / 2.5, position: 'absolute', marginLeft: 8, marginRight: 8, alignSelf:'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', alignSelf: 'center', fontSize: 14, textAlign: 'center',fontWeight:'200' }}>{this.props.item.reward}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', height: screenWidth / 9, width: screenWidth / 2.25, position: 'absolute', marginLeft: 5.5, marginRight: 3, alignSelf: 'flex-end', justifyContent: 'center',backgroundColor:'orange',borderBottomLeftRadius:15,borderBottomRightRadius:15 }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, textAlign: 'center' }}>Đổi thưởng</Text>
                    </View>
                </View>
                </View>
       
        )
    }
}
export default function Reward2() {
    return (
        <View>
            <FlatList
                style={{ alignSelf: 'center' }}
                numColumns={2}
                horizontal={false}
                data={flatListdata2}
                renderItem={({ item, index }) => {
                    return (
                        <FlatlistItem item={item} index={index}></FlatlistItem>
                    )
                }}></FlatList>
        </View>
    )
}

