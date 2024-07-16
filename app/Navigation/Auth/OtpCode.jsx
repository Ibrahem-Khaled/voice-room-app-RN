import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const OtpCode = () => {
    const navigation = useNavigation();
    const [otpInput, setOtpInput] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View style={{ height: '30%', }}>
                <Image style={styles.logo} source={require('../../Images/Icons/logo.png')} />
                <Text style={styles.txt}>التأكد من ملكية رقم الجوال</Text>
            </View>
            <View style={{ height: '10%', justifyContent: 'space-between', }}>
                <Text style={[styles.txt, { fontSize: 18, }]}>قم بادخال الكود المرسل الي:</Text>
                <Text style={[styles.txt, { fontSize: 18, }]}>+012345567890</Text>
            </View>
            <OTPTextView
                containerStyle={{ width: '80%', alignSelf: 'center' }}
                textInputStyle={styles.textInputContainer}
                tintColor={'rgba(75, 22, 76, 1)'}
                handleTextChange={setOtpInput}
                inputCount={4}
                keyboardType="numeric"
            />
            <Button
                style={styles.button}
                labelStyle={[styles.txt, { color: '#fff', height: 61, verticalAlign: 'middle' }]}
                mode="contained"
                onPress={() => navigation.navigate('userInfo')}>
                تأكيد
            </Button>
        </View>
    )
}

export default OtpCode;

const styles = StyleSheet.create({
    logo: {
        width: '60%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    txt: {
        color: '#22447B',
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Cairo-Bold'
    },
    code: {
        color: '#22447B',
        fontSize: 20,
        paddingHorizontal: 10
    },
    textInputContainer: {
        fontSize: 22,
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        fontFamily: 'Cairo-Bold',
        color: '#22447B',
        textAlign: 'center',

    },
    button: {
        width: '60%',
        alignSelf: 'center',
        height: 61,
        backgroundColor: '#4B164C',
        margin: 5,
        borderRadius: 5,
        justifyContent: 'center'
    },
});
