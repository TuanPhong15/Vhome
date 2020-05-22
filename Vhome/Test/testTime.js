import React, { Component, useState } from 'react';
import { AppRegistry, FlatList, View, Image, TouchableOpacity, ScrollView, Text, SafeAreaView, TextInput, StyleSheet, Button, Dimensions } from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker"
import moment from 'moment'
export default function testTime() {
   const [isVisible,Visible]=useState(false)
   const [chosenTime,setChosenTime]=useState('now')
   const [isVisibleDate,VisibleDate]=useState(false)
   const [chosenDate,setChosenDate]=useState('then')
   
    
    handlePickerTime = (time) => {
        
            Visible(false) ,
            setChosenTime( moment(time).format('HH:mm'))
       
    }
    handlePickerDate = (date) => {

        VisibleDate(false),
            setChosenDate(moment(date).format('Do MMMM YYYY '))

    }
    
    hidePickerTime = () => {
        
            Visible(false)
   
    }
    hidePickerDate = () => {

        VisibleDate(false)

    }
    showPickerTime = () => {
        
            Visible(true)
       
    }
    showPickerDate = () => {

        VisibleDate(true)

    }

        return (
            <View style={styles.container}>
                <Text></Text>
                <TouchableOpacity onPress={showPickerTime}>
                    <Text>{chosenTime}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showPickerDate}>
                    <Text>{chosenDate}</Text>
                </TouchableOpacity>
                <DateTimePickerModal 
                    locale="en_GB"                    mode='time'
                    isVisible={isVisible}
                    onConfirm={handlePickerTime}
                    onCancel={hidePickerTime}
                    headerTextIOS={'Chọn giờ'}
                    cancelTextIOS={'Đóng'}
                    confirmTextIOS={'Xác nhận'}
                    is24Hour={true}	>
                </DateTimePickerModal>
                <DateTimePickerModal
                    locale="en_GB"
                    mode='date'
                    isVisible={isVisibleDate}
                    onConfirm={handlePickerDate}
                    onCancel={hidePickerDate}
                    headerTextIOS={'Chọn ngày'}
                    cancelTextIOS={'Đóng'}
                    confirmTextIOS={'Xác nhận'}
                    is24Hour={true}	>
                </DateTimePickerModal>
            </View>
        )
    
        }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        , alignItems: 'center', backgroundColor: 'white'
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center'
        , marginTop: 15
    }
})