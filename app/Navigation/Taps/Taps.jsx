import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import ContactListScreen from '../Screen/ContactChats';
import Account from './Account';
import RoomScreen from './Rooms';

const Tabs = createBottomTabNavigator();
const Taps = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#BD23E7",
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontFamily: 'Cairo-Bold', fontSize: 12 },
                tabBarStyle: { height: 55 },
                tabBarHideOnKeyboard: true
            }}
 
            initialRouteName="Home"
        >
            <Tabs.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={focused ? require('../../Images/Icons/Profile.png') : require('../../Images/Icons/Profile-out.png')} style={{ width: size, height: size, resizeMode: 'contain' }} />
                    ),
                    tabBarLabel: 'حسابي',
                }}
            />
            <Tabs.Screen
                name="Chat"
                component={ContactListScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={focused ? require('../../Images/Icons/Chat.png') : require('../../Images/Icons/chat-out.png')} style={{ width: size, height: size, resizeMode: 'contain' }} />
                    ),
                    tabBarLabel: 'رسائل',
                }}
            />
            <Tabs.Screen
                name="Rooms"
                component={RoomScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={focused ? require('../../Images/Icons/Location.png') : require('../../Images/Icons/Location-out.png')} style={{ width: size, height: size, resizeMode: 'contain' }} />
                    ),
                    tabBarLabel: 'غرفة',
                }}
            />
            <Tabs.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={focused ? require('../../Images/Icons/Home.png') : require('../../Images/Icons/Home-out.png')} style={{ width: size, height: size, resizeMode: 'contain' }} />
                    ),
                    tabBarLabel: 'لحظة',
                }}
            />
        </Tabs.Navigator>
    );
}

export default Taps;

const styles = StyleSheet.create({});
