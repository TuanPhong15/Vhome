import React from "react";
import { Text, View, Button, TouchableOpacity, Dimensions, ScrollView, Image, TextInput, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.header}>
            <View style={{ height: screenHeight / 4.4 }}>
                <Image style={styles.containerI}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/logo.png')} />
            </View>
            <View style={styles.containerII}></View>
            <View style={styles.containerIII}></View>
            <TouchableOpacity onPress={() => navigation.navigate("Đăng nhập")}
                style={{ marginTop: -12 }}>
                <Image style={styles.containerIV}
                    source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/customer.png')}
                ></Image></TouchableOpacity>
            <View style={styles.containerV}></View>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn2")}>

            <Image style={styles.containerVI}
                source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/employees.png')}></Image></TouchableOpacity >
            <Text style={styles.footer}>V-HOME V1.0</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center', width: screenWidth, backgroundColor: 'white', justifyContent: 'center'
    },
    containerI: { marginBottom: 10, resizeMode: 'contain', height: '90%' },
    containerII: { backgroundColor: "#F17730", height: 1, width: screenWidth * 3 / 3.5 },
    containerIII: { backgroundColor: "#F17730", width: 1, height: screenWidth * 1 / 6 },
    containerIV: { width: 182.5, height: 53.75 },
    containerV: { backgroundColor: "#F17730", width: 1, height: screenWidth * 1 / 6 },
    containerVI: { width: 182.5, height: 53.75, marginTop: -1 },
    footer: {
        top: screenHeight / 6
        , color: '#F17730', fontSize: 15
    }
});