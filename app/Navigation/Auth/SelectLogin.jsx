import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import OrView from '../../Components/OrView';

const SelectLogin = () => {
    const navigation = useNavigation(); // Corrected hook name

    return (
        <ScrollView >
            <Image style={styles.logo} source={require('../../Images/images/selectLogin.png')} />
            <Text style={styles.txt}>ابدأ في استكشاف العالم</Text>
            <Button
                style={styles.button}
                labelStyle={[styles.txt, { color: '#fff', fontSize: 14, }]}
                mode="contained"
                onPress={() => navigation.navigate('login')}>
                أكمل باستخدام البريد الالكتروني
            </Button>
            <OrView name={'او الاستمرار مع'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', alignItems: 'center', margin: 10 }}>
                <TouchableOpacity style={styles.socialMediaButton}>
                    <Text style={styles.buttonTxtSocial}>Google</Text>
                    <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/281/281764.png' }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialMediaButton}>
                    <Text style={styles.buttonTxtSocial}>Apple</Text>
                    <Image style={{ width: 20, height: 20 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/0/747.png' }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SelectLogin

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        resizeMode: 'cover',
        alignSelf: 'center',
        height: 550,
        marginBottom: 50
    },
    txt: {
        color: '#111827',
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: 'Cairo-Bold',
        margin: 5
    },
    button: {
        alignSelf: 'center',
        backgroundColor: '#7B0A9E',
        margin: 10,
        padding: 15,
        paddingHorizontal: 50
    },
    socialMediaButton: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D1D5DB',
        width: 135,
        alignItems: 'center',
        padding: 15,
        flexDirection: 'row-reverse',
        justifyContent: 'space-around'
    },
    buttonTxtSocial: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Cairo-Bold',
    },
})
