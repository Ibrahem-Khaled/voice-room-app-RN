import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderBar = ({ userData = true, style }) => {
    const hasNotifications = true; // This can be a state or prop based on your notification logic

    return (
        <View style={[styles.container, style]}>
            <View style={styles.main}>
                <TouchableOpacity style={styles.bellContainer}>
                    <Ionicons name="notifications" size={24} color="#292D32" />
                    {hasNotifications && <View style={styles.notificationDot} />}
                </TouchableOpacity>
                <Image source={require('../Images/Icons/logo.png')} resizeMode='contain' style={{ width: 115, height: 50 }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    main: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5,
        justifyContent: 'space-between',
    },
    bellContainer: {
        position: 'relative',
        backgroundColor: 'rgba(246, 247, 249, 1)',
        padding: 5,
        borderRadius: 50
    },
    notificationDot: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 5,
        position: 'absolute',
        top: -5,
        right: -5,
    },
    username: {
        fontFamily: 'Cairo-Bold',
        color: '#fff',
        fontSize: 16,
    },
    caption: {
        fontFamily: 'Cairo-Light',
        color: '#fff',
        fontSize: 11,
    },
});

export default HeaderBar;
