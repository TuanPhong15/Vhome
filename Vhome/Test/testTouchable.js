import React, { Component } from 'react';
import {
    Alert, AppRegistry, StyleSheet, View,
    Image, Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

// import App from './App';
export default class App extends Component {
    _onPressButton = () => {
        alert("You pressed the button !");
    }
    render() {
        return (

           
            <View><Image style={{ width: 140, height: 140 }}
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo.png')}></Image></View>
                    
            
             
        
            
        )
            }
}
