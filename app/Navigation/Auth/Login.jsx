import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = () => {
        console.log('Google login pressed');
    };

    const handleFacebookLogin = () => {
        console.log('Facebook login pressed');
    };

    const handleEmailLogin = () => {
        navigation.navigate('taps');
    };

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ marginVertical: 30 }}>
                <Text style={[styles.txt, { margin: 10 }]}>مرحبا بعودتك!</Text>
                <Text style={[styles.txt, { margin: 10, fontSize: 16, color: '#6B7280' }]}>سجل دخول الى حسابك</Text>
            </View>
            <View>
                <View style={styles.emailInputContainer}>
                    <TextInput
                        style={styles.emailInput}
                        placeholder="البريد الإلكتروني"
                        placeholderTextColor={'#6B7280'}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Ionicons name="mail-outline" size={24} color="#B0B0B0" />
                </View>
                <View style={styles.emailInputContainer}>
                    <TextInput
                        style={styles.emailInput}
                        placeholder="كلمة المرور"
                        placeholderTextColor={'#6B7280'}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Ionicons name="lock-closed-outline" size={24} color="#B0B0B0" />
                </View>

                <Text onPress={() => { navigation.navigate('forgetPassword') }} style={[styles.txt, { margin: 10, left: 10, fontSize: 16, color: '#7B0A9E', textAlign: 'left' }]}>هل نسيت كلمة سر؟</Text>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#7B0A9E', margin: 10 }]} onPress={handleEmailLogin}>
                    <Text style={[styles.txt, { color: '#fff', fontSize: 14, width: '80%', textAlign: 'center' }]}>تسجيل الدخول</Text>
                </TouchableOpacity>
            </View>

            <Text style={[styles.txt, { marginVertical: 30, fontSize: 16, color: '#6B7280', textAlign: 'center' }]}>او تابع باستخدام حساب تواصل الاجتماعي</Text>

            <View>
                <TouchableOpacity style={[styles.socialButton]} onPress={handleGoogleLogin}>
                    <Text style={[styles.txt, { fontSize: 16 }]}>Google</Text>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/300/300221.png' }} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton]} onPress={handleFacebookLogin}>
                    <Text style={[styles.txt, { fontSize: 16 }]}>Facebook</Text>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670124.png' }} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.socialButton]} onPress={handleFacebookLogin}>
                    <Text style={[styles.txt, { fontSize: 16 }]}>Apple</Text>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/0/747.png' }} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate('register') }} style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', width: '50%', marginVertical: 20 }}>
                <Text style={[styles.txt, { fontSize: 14 }]}>ليس لديك حساب ؟</Text>
                <Text style={[styles.txt, { fontSize: 14, color: '#4B164C' }]}>أنشاء حساب</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 450,
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    txt: {
        color: '#23262F',
        fontSize: 24,
        textAlign: 'right',
        fontFamily: 'Cairo-Bold',
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: '#4B164C',
        margin: 5,
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 30
    },
    emailInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F4F7',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        margin: 5,
        paddingHorizontal: 20,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10
    },
    emailInput: {
        flex: 1,
        height: 58,
        color: '#6B7280',
        fontSize: 18,
        textAlign: 'right',
        fontFamily: 'Cairo-Regular',
    },
    socialButton: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 8,
        justifyContent: 'space-evenly',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#D1D5DB'
    },
});
