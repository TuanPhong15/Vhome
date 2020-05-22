//screen 5 bang flatlist
import React, { Component, useState } from 'react';
import { AppRegistry, FlatList, View, Image, TouchableOpacity, ScrollView, Text, SafeAreaView, TextInput, StyleSheet, Button, Dimensions } from 'react-native';
import flatListData from './flatListData5'
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
class FlatlistItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigation } = this.props;

        return (

            <TouchableOpacity onPress={() => navigation.navigate(this.props.item.screen)}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Image style={{
                            height: screenWidth / 2.2, width: screenWidth / 2.2, marginLeft: 6,
                            marginRight: 6, marginTop: 16, borderTopLeftRadius: 15, borderTopRightRadius: 15,
                            borderBottomRightRadius: 15, borderBottomLeftRadius: 15
                        }}
                            source={{ uri: this.props.item.image }}></Image>
                        <View style={{
                            flex: 1, flexDirection: 'column', backgroundColor: 'black',
                            height: screenWidth / 7, width: screenWidth / 2.2, position: 'absolute', marginLeft: 6,
                            marginRight: 6, opacity: 0.8, alignSelf: 'flex-end', borderBottomRightRadius: 15,
                            borderBottomLeftRadius: 15, justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white', alignSelf: 'center',
                                fontSize: 20, textAlign: 'center', fontWeight: '400'
                            }}>{this.props.item.name}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
export default function Services({ navigation }) {
    // const navigation = useNavigation();
    return (
        <View>
            <FlatList
                style={{ alignSelf: 'center' }}
                numColumns={2}
                data={flatListData}
                renderItem={({ item, index }) => {
                    return (
                        <FlatlistItem  navigation={navigation}  item={item} index={index}></FlatlistItem>
                    )
                }}></FlatList>
        </View>
    )
}
