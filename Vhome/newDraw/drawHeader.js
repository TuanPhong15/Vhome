import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import { NavigationContainer, DrawerActions } from "@react-navigation/native";

export default class drawHeader extends Component {
    render() {
        return (<View style={{
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
        </View>);
    }
}