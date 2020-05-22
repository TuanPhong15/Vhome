import React, { Component } from 'react'
import {
    Button,
    View,
    Text, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native'
const screenWidth = Dimensions.get('window').width;

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default class Robot extends Component {
    constructor() {
        super();

        this.state = { hidePassword: true }
    }

    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    _onPress = () => {
        this.refs.step.scrollTo({ x: screenWidth, y: 0, animated: false })
    }


    render() {

        return (

            <ScrollView ref="step"
                horizontal={true}
                pagingEnabled={true}
                scrollEnabled={false}>
<View style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: 'center', width: screenWidth
                }} >
               
                    <Image style={{marginTop:150}}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo.png')} />
                    <Image style={{ marginTop: 20,width:450,height:93.6 }}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/thanh.png')}></Image>
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}
                        style={{ marginTop: -12 }} >
                   
                        <Image style={{ width: 182.5, height: 53.75}}
                            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/customer.png')}
                        ></Image></TouchableOpacity>
                    <Image style={{ marginTop: -2,width: 450, height: 73.2 }}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/thanh2.png')}></Image>
                    <Image style={{ width: 182.5, height: 53.75,marginTop:-1 }}
                        source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/employees.png')}></Image>
                    <Text style={{
                        marginTop: 270,
                        color: 'orange',fontSize:15
                    }}>V-HOME V1.0</Text>
                  

                    



                </View>






                <View style={{
                    backgroundColor: '#663399',
                    flex: 1,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}><Button style={{
                    fontSize: 40,
                    padding: 2,

                    backgroundColor: 'aqua'

                }}
                    title='Button'>Button</Button></View>

            </ScrollView >



        );
    }
}