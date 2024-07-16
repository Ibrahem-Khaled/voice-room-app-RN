import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    const handleRegister = () => {
        if (!isSelected) {
            alert('Please agree to the privacy policy');
            return;
        }
        console.log('Register button pressed');
        // Add your registration logic here
    };

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ marginVertical: 30 }}>
                <Text style={[styles.txt, { margin: 10 }]}>إنشاء حساب جديد</Text>
                <Text style={[styles.txt, { margin: 10, fontSize: 16, color: '#6B7280' }]}>قم بإنشاء حسابك الجديد</Text>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="اسم المستخدم"
                        placeholderTextColor={'#6B7280'}
                        value={name}
                        onChangeText={setName}
                    />
                    <Ionicons name="person-outline" size={24} color="#B0B0B0" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="البريد الإلكتروني"
                        placeholderTextColor={'#6B7280'}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Ionicons name="mail-outline" size={24} color="#B0B0B0" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="كلمة المرور"
                        placeholderTextColor={'#6B7280'}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Ionicons name="lock-closed-outline" size={24} color="#B0B0B0" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="تأكيد كلمة المرور"
                        placeholderTextColor={'#6B7280'}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <Ionicons name="lock-closed-outline" size={24} color="#B0B0B0" />
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSelection(!isSelected);
                        }}
                        color="#4B164C"
                    />
                    <Text style={styles.label}>من خلال إنشاء حساب ، فإنك توافق على الشروط والأحكام الخاصة بنا</Text>
                </View>

                <TouchableOpacity style={[styles.button, { backgroundColor: '#7B0A9E', margin: 10 }]} onPress={handleRegister}>
                    <Text style={[styles.txt, { color: '#fff', fontSize: 14, width: '80%', textAlign: 'center' }]}>إنشاء حساب</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', width: '50%', marginVertical: 20 }}
                onPress={() => navigation.navigate('login')}>
                <Text style={[styles.txt, { fontSize: 14 }]}>لديك حساب بالفعل؟</Text>
                <Text style={[styles.txt, { fontSize: 14, color: '#4B164C' }]}>تسجيل الدخول</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Register;

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
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingHorizontal: 30,
    },
    inputContainer: {
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
        marginVertical: 10,
    },
    input: {
        flex: 1,
        height: 58,
        color: '#6B7280',
        fontSize: 18,
        textAlign: 'right',
        fontFamily: 'Cairo-Regular',
    },
    checkboxContainer: {
        flexDirection: 'row-reverse',
        marginBottom: 20,
        marginLeft: 20,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    label: {
        margin: 8,
        fontSize: 16,
        width: '60%',
        color: '#6B7280',
        fontFamily: 'Cairo-Regular',
    },
});
