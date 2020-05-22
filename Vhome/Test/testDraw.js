import * as React from 'react';
import { View, Text, Button,Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('/Users/anhlumi/VHome/Vhome/VHomeImg/logo/box.png')}
        />
    );
}
function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
          
        </View>
    );
}

function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications Screen</Text>
        </View>
    );
}



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="hey" component={Feed} 
                />
            <Drawer.Screen name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}
function MyStack () { 
    return ( 
        <Stack.Navigator><Stack.Screen name='hey' component={Feed}
            options={{
                headerStyle: {


                    backgroundColor: 'orange',
                },
                headerTintColor: 'white'}}></Stack.Screen> </Stack.Navigator>
    )
}
export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
            <MyStack/>
        </NavigationContainer>
    );
}