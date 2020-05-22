import React, { Component } from 'react';
import { AppRegistry, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
 export default class App extends Component  {
  
    
    constructor() {
        super();

        this.state = { hidePassword: true }
    }

    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    render() {
        return (
    
            <View style={{
                flex: 1, 
                justifyContent: "center",
                alignItems: "center"

            }}>
                <View style={{
                    position: 'absolute',
                    bottom:250
                   
                }} >
                <Image 
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo.png')} 
                        style={{
                            marginBottom: 500,
                            resizeMode: 'contain',
                            height: '20%'
                          
                        }}/>
                </View>
                <View style={{
                    position: 'relative',
                    alignSelf: 'stretch',
                    justifyContent: 'center'
                }}>

                    <View style={{
                        position: 'absolute',
                        left: 45,bottom:15,
                        height: 50,
                        width: 35,
                        padding: 3
                    }} ><Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/phone.png')}
                        style={{
                            resizeMode: 'contain',
                            height: '85%',
                            width: '85%',
                        }}></Image></View>
                    
                <TextInput style={{
                    margin:30,
                    fontSize: 17,
                    alignSelf: 'stretch',
                    height: 45,
                    paddingRight: 45,
                    paddingLeft: 45,
                    borderWidth: 1,
                    paddingVertical: 0,
                    borderColor: 'grey',
                    borderRadius: 25, marginBottom: 20
                }}
                    placeholder='Số điện thoại'
                    keyboardType='numeric'
                />
                </View>
                <View style={{
                    position: 'relative',
                    alignSelf: 'stretch',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        position: 'absolute',
                        left: 45,top:5,
                        height: 40,
                        width: 35,
                        padding: 3
                    }} ><Image source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/pass.png')}
                        style={{
                            resizeMode: 'contain',
                            height: '80%',
                            width: '80%',
                        }}></Image></View>
                    <TextInput secureTextEntry={this.state.hidePassword} 
                        style={{marginLeft:30,marginRight:30,
                            fontSize: 17,
                            alignSelf: 'stretch',
                            height: 45,
                            paddingRight: 45,
                            paddingLeft: 45,
                            borderWidth: 1,
                            paddingVertical: 0,
                            borderColor: 'grey',
                            borderRadius: 25
                        }}
                    placeholder='Mật khẩu'
                     />
                    
                    <TouchableOpacity activeOpacity={0.8} 
                        style={{
                            position: 'absolute',
                            right: 40,
                            height: 400,
                            width: 35,
                            padding: 2
                        }} 
                    onPress={this.setPasswordVisibility}>
                        <Image source={(this.state.hidePassword) ? require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/showpass.png') : require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/hidepass.png')} 
                            style={{
                                resizeMode:'contain',
                        height: '100%',
                        width: '100%',
                    }} />
                    </TouchableOpacity>
                </View>
            </View>
           
        );
    }

}