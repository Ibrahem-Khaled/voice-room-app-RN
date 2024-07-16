import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileBackground}
                    source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images' }}
                />
                <View style={styles.profileInfoContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images' }}
                    />
                    <View style={styles.profileDetails}>
                        <Text style={styles.profileStats}>
                            55 المتابعة | 63 العجبون
                        </Text>
                        <Text style={styles.profileName}>نور قحطاني</Text>
                        <Text style={styles.profileId}>Id: 1234567</Text>
                        <Text style={styles.profileBio}>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.badgesSection}>
                <Text style={styles.sectionTitle}>الاوسمة</Text>
                <View style={styles.badgesContainer}>
                    <Image style={styles.badge} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8146/8146767.png' }} />
                    <Image style={styles.badge} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3649/3649801.png' }} />
                    <Image style={styles.badge} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/15765/15765918.png' }} />
                    <Image style={styles.badge} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/11388/11388419.png' }} />
                </View>
            </View>

            <View style={styles.postsSection}>
                <Text style={styles.sectionTitle}>منشورات</Text>
                <View style={styles.postContainer}>
                    <View style={styles.postHeader}>
                        <Image
                            style={styles.postProfileImage}
                            source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images' }}
                        />
                        <View style={styles.postDetails}>
                            <Text style={styles.postName}>نور قحطاني</Text>
                            <Text style={styles.postTime}>قبل 12 دقيقة</Text>
                        </View>
                    </View>
                    <Text style={styles.postText}>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                    </Text>
                    <Image
                        style={styles.postImage}
                        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images' }}
                    />
                    <View style={styles.postFooter}>
                        <TouchableOpacity style={styles.postFooterButton}>
                            <FontAwesome name="comment-o" size={20} color="gray" />
                            <Text style={styles.postFooterText}>20 تعليق</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.postFooterButton}>
                            <AntDesign name="like2" size={20} color="gray" />
                            <Text style={styles.postFooterText}>86 اعجاب</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.footerButtons}>
                <TouchableOpacity style={styles.footerButton}>
                    <Text style={styles.footerButtonText}>دردشة</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.footerButton, styles.followButton]}>
                    <Text style={[styles.footerButtonText, styles.followButtonText]}>متابعة</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        position: 'relative',
    },
    profileBackground: {
        width: '100%',
        height: 200,
    },
    profileInfoContainer: {
        alignItems: 'flex-end',
        marginHorizontal: 20,
        bottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileDetails: {
        marginLeft: 20,
    },
    profileName: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Cairo-Bold',
    },
    profileStats: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Cairo-Bold',
        marginVertical: 5,
    },
    profileId: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Cairo-Regular',
        textAlign: 'right',
    },
    profileBio: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Cairo-Regular',
    },
    badgesSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        fontFamily: 'Cairo-Bold',
    },
    badgesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    badge: {
        width: 50,
        height: 50,
    },
    postsSection: {
        padding: 20,
    },
    postContainer: {
        marginBottom: 20,
    },
    postHeader: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
        alignSelf: 'flex-end',
    },
    postProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    postDetails: {
        marginLeft: 10,
    },
    postName: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Cairo-Bold',
        marginHorizontal: 5,
    },
    postTime: {
        fontSize: 12,
        color: '#888',
        fontFamily: 'Cairo-Regular',
        marginHorizontal: 5,
    },
    postText: {
        fontSize: 14,
        color: '#000',
        marginBottom: 10,
        fontFamily: 'Cairo-Regular',
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    postFooterButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postFooterText: {
        marginLeft: 5,
        fontSize: 14,
        color: 'gray',
        fontFamily: 'Cairo-Regular',
    },
    footerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        elevation: 1,
    },
    footerButton: {
        backgroundColor: '#8B10AE',
        borderRadius: 30,
        paddingVertical: 20,
        width: '48%',
        alignItems: 'center'
    },
    footerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Cairo-Regular',
    },
    followButton: {
        backgroundColor: '#F5EEFE',
    },
    followButtonText: {
        color: '#8B10AE',
    },
});

export default ProfileScreen;
