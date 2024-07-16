import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ForgetPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleSendEmail = () => {
        console.log('Send email pressed');
    };

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ marginVertical: 30 }}>
                <Text style={[styles.txt, { margin: 10 }]}>نسيت كلمة السر؟</Text>
                <Text style={[styles.txt, { margin: 10, fontSize: 16, color: '#6B7280' }]}>
                    أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور الخاصة بك
                </Text>
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
                <TouchableOpacity style={[styles.button, { backgroundColor: '#7B0A9E', margin: 10 }]} onPress={handleSendEmail}>
                    <Text style={[styles.txt, { color: '#fff', fontSize: 14, width: '80%', textAlign: 'center' }]}>إرسال</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', width: '50%', marginVertical: 20 }}
                onPress={() => navigation.navigate('login')}>
                <Text style={[styles.txt, { fontSize: 14 }]}>تذكر كلمة السر؟</Text>
                <Text style={[styles.txt, { fontSize: 14, color: '#4B164C' }]}>تسجيل الدخول</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default ForgetPassword;

const styles = StyleSheet.create({
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
});
