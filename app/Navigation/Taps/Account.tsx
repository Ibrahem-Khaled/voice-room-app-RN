import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import PannerModal from '../../Components/PannerModal';

const Account = () => {
    const [modalVisible, setModalVisible] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setModalVisible(true);
            return () => setModalVisible(false);
        }, [])
    );

    return (
        <View style={styles.container}>
            <PannerModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <FontAwesome5 name="user-edit" size={24} color="#8B10AE" />
                </View>

                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/100' }}
                        style={styles.profileImage}
                    />
                    <View style={{ marginHorizontal: 10, alignItems: 'flex-end' }}>
                        <Text style={styles.profileName}>إبراهيم خالد</Text>
                        <Text style={styles.profileId}>id : 1231234</Text>
                        <View style={styles.badgesContainer}>
                            <FontAwesome5 name="gem" size={18} color="#00BFFF" />
                            <MaterialIcons name="verified" size={18} color="#32CD32" />
                            <MaterialIcons name="emoji-events" size={18} color="#FFD700" />
                        </View>
                        <Text style={styles.bio}>اكتب سيرة ذاتية خاصة بيك</Text>
                    </View>

                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={styles.statsNumber}>2</Text>
                        <Text style={styles.statsLabel}>الزوار</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={styles.statsNumber}>2</Text>
                        <Text style={styles.statsLabel}>المعجبين</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={styles.statsNumber}>2</Text>
                        <Text style={styles.statsLabel}>متابعة</Text>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    <MenuOption icon={require('../../Images/Icons/empty-wallet.png')} label="محفظة النقود" />
                    <MenuOption icon={require('../../Images/Icons/layer.png')} label="المستوي" />
                    <MenuOption icon={require('../../Images/Icons/people.png')} label="دعوة اصدقاء" />
                    <MenuOption icon={require('../../Images/Icons/medal-star.png')} label="الوسام" />
                    <MenuOption icon={require('../../Images/Icons/ranking.png')} label="الارستقراطية" />
                    <MenuOption icon={require('../../Images/Icons/shop.png')} label="متجر ادوات" />
                    <MenuOption icon={require('../../Images/Icons/flag.png')} label="مساعدة و تقييم" />
                    <MenuOption icon={require('../../Images/Icons/setting-2.png')} label="الاعدادات" />
                </View>
            </ScrollView>
        </View>
    );
};

const MenuOption = ({ icon, label }) => (
    <TouchableOpacity style={styles.menuOption}>
        <AntDesign name="left" size={18} color="#6B7280" style={styles.arrowIcon} />
        <Text style={styles.menuOptionText}>{label}</Text>
        <Image source={icon} style={{ marginHorizontal: 10, width: 20, height: 20 }} />
    </TouchableOpacity>
);

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    time: {
        fontSize: 20,
        color: '#000',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row-reverse',
    },
    profileIconContainer: {
        position: 'absolute',
        top: -30,
        left: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    profileName: {
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        fontFamily: 'Cairo-Bold',
    },
    profileId: {
        fontSize: 14,
        color: '#6B7280',
        fontFamily: 'Cairo-Regular',
    },
    badgesContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    bio: {
        fontSize: 16,
        color: '#6B7280',
        marginTop: 5,
        fontFamily: 'Cairo-Regular',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    statsBox: {
        alignItems: 'center',
    },
    statsNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    statsLabel: {
        fontSize: 16,
        color: '#6B7280',
        fontFamily: 'Cairo-Bold',
    },
    menuContainer: {
        paddingHorizontal: 15,
    },
    menuOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    menuOptionText: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        fontFamily: 'Cairo-Regular',
    },
    arrowIcon: {
        marginRight: 10,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    navigationButton: {
        alignItems: 'center',
    },
    navigationButtonText: {
        fontSize: 12,
        color: '#6B7280',
    },
    activeNavigationButton: {
        borderTopWidth: 2,
        borderTopColor: '#8B10AE',
    },
    activeNavigationButtonText: {
        color: '#8B10AE',
    },
});
