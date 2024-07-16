import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, Pressable } from 'react-native';
import { FontAwesome5, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import PannerModal from '../../Components/PannerModal';

const RoomScreen = () => {
    const [activeTab, setActiveTab] = useState('latest');
    const [modalCreate, setModalCreate] = useState(false);
    const [newRoom, setNewRoom] = useState({ name: '', description: '', image: '', members: 0, type: 'diamond', popularity: 0 });
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    
    useFocusEffect(
        React.useCallback(() => {
            setModalVisible(true);
            return () => setModalVisible(false);
        }, [])
    );
    const rooms = [
        {
            id: '1',
            name: 'احبب القلب',
            description: 'رمضان كريم للجميع تفضل لدردشة',
            image: 'https://via.placeholder.com/50',
            members: 17,
            type: 'diamond',
            popularity: 100,
        },
        {
            id: '2',
            name: 'رمضان كريم',
            description: 'رمضان كريم للجميع تفضل لدردشة',
            image: 'https://via.placeholder.com/50',
            members: 17,
            type: 'diamond',
            popularity: 100,
        },
        {
            id: '3',
            name: 'تفضل لدردشة',
            description: 'رمضان كريم للجميع تفضل لدردشة',
            image: 'https://via.placeholder.com/50',
            members: 17,
            type: 'diamond',
            popularity: 100,
        },
        {
            id: '4',
            name: 'رماد الحب',
            description: 'رمضان كريم للجميع تفضل لدردشة',
            image: 'https://via.placeholder.com/50',
            members: 17,
            type: 'diamond',
            popularity: 100,
        },
        {
            id: '5',
            name: 'ناس محترمة',
            description: 'رمضان كريم للجميع تفضل لدردشة',
            image: 'https://via.placeholder.com/50',
            members: 17,
            type: 'diamond',
            popularity: 100,
        },
    ];

    const handleCreateRoom = () => {
        if (newRoom.name && newRoom.description && newRoom.image) {
            rooms.push({ ...newRoom, id: Date.now().toString() });
            setModalCreate(false);
            setNewRoom({ name: '', description: '', image: '', members: 0, type: 'diamond', popularity: 0 });
        }
    };

    return (
        <View style={styles.container}>
            <PannerModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <View style={styles.tabsContainer}>
                <TouchableOpacity onPress={() => setActiveTab('myRooms')}>
                    <Text style={[styles.tab, activeTab === 'myRooms' && styles.activeTab]}>غرفتي</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('explore')}>
                    <Text style={[styles.tab, activeTab === 'explore' && styles.activeTab]}>الاكتشاف</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('suggestions')}>
                    <Text style={[styles.tab, activeTab === 'suggestions' && styles.activeTab]}>مقترحات</Text>
                </TouchableOpacity>
                <Ionicons name="search" size={24} color="#FF9141" />
            </View>

            <TouchableOpacity style={styles.createRoomContainer} onPress={() => setModalCreate(true)}>
                <Image source={require('../../Images/Icons/MicRoomCreate.png')} style={{ width: 64, height: 64 }} />
                <View>
                    <Text style={styles.createRoomText}>انشاء الغرفة الخاصة بيك</Text>
                    <Text style={styles.createRoomSubText}>ابدا رحلتك في الاستكشاف</Text>
                </View>
                <Ionicons name="add-circle" size={36} color="#7B0A9E" style={styles.addIcon} />
            </TouchableOpacity>

            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setActiveTab('latest')}>
                    <Text style={[styles.filterTab, activeTab === 'latest' && styles.activeFilterTab]}>احدث</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('following')}>
                    <Text style={[styles.filterTab, activeTab === 'following' && styles.activeFilterTab]}>متابعة</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('join')}>
                    <Text style={[styles.filterTab, activeTab === 'join' && styles.activeFilterTab]}>انضمام</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {rooms.map(room => (
                    <TouchableOpacity onPress={() => navigation.navigate('audioRoom', { roomId: room.id })} key={room.id} style={styles.roomContainer}>
                        <Text style={styles.roomPopularity}>{room.popularity}</Text>
                        <View style={styles.roomDetails}>
                            <View style={styles.roomTextContainer}>
                                <Text style={styles.roomName}>{room.name}</Text>
                                <View style={styles.roomInfo}>
                                    <FontAwesome5 name="gem" size={12} color="#00BFFF" />
                                    <Text style={styles.roomMembers}>{room.members}</Text>
                                    <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.roomMemberImage} />
                                    <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.roomMemberImage} />
                                    <Image source={{ uri: 'https://via.placeholder.com/20' }} style={styles.roomMemberImage} />
                                </View>
                                <Text style={styles.roomDescription}>{room.description}</Text>
                            </View>
                            <Image source={{ uri: room.image }} style={styles.roomImage} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalCreate}
                onRequestClose={() => setModalCreate(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>انشاء الغرفة الخاصة بيك</Text>
                        <TextInput
                            style={styles.input}
                            mode='outlined'
                            label="اسم الغرفة"
                            placeholder="اسم الغرفة"
                            value={newRoom.name}
                            onChangeText={(text) => setNewRoom({ ...newRoom, name: text })}
                        />
                        <TextInput
                            style={styles.input}
                            mode='outlined'
                            label="وصف الغرفة"
                            placeholder="وصف الغرفة"
                            value={newRoom.description}
                            onChangeText={(text) => setNewRoom({ ...newRoom, description: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="رابط الصورة"
                            mode='outlined'
                            label="رابط الصورة"
                            value={newRoom.image}
                            onChangeText={(text) => setNewRoom({ ...newRoom, image: text })}
                        />
                        <View style={styles.modalButtons}>
                            <Pressable style={styles.button} onPress={handleCreateRoom}>
                                <Text style={styles.buttonText}>"انشاء الغرفة"</Text>
                            </Pressable>

                            <Pressable style={styles.button} onPress={() => setModalCreate(false)}>
                                <Text style={styles.buttonText}>"الغاء"</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default RoomScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    tabsContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'center',
    },
    tab: {
        paddingVertical: 10,
        fontSize: 16,
        color: '#6B7280',
        fontFamily: 'Cairo-Bold',
    },
    activeTab: {
        color: '#8B10AE',
        borderBottomWidth: 2,
        borderBottomColor: '#8B10AE',
    },
    createRoomContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
        elevation: 5,
    },
    createRoomText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Cairo-Bold',
    },
    createRoomSubText: {
        fontSize: 14,
        color: '#6B7280',
        fontFamily: 'Cairo-Bold',
    },
    addIcon: {
        marginLeft: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    filterTab: {
        paddingVertical: 5,
        fontSize: 16,
        color: '#6B7280',
        fontFamily: 'Cairo-Bold',
    },
    activeFilterTab: {
        color: '#8B10AE',
        borderBottomWidth: 2,
        borderBottomColor: '#8B10AE',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    roomContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        elevation: 3,
    },
    roomPopularity: {
        color: '#ff4500',
        fontSize: 16,
        fontWeight: 'bold',
    },
    roomDetails: {
        flexDirection: 'row',
        marginLeft: 10,
        flex: 1,
    },
    roomImage: {
        width: 68,
        height: 68,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    roomTextContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
    },
    roomName: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Cairo-Bold',
    },
    roomInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    roomMembers: {
        marginLeft: 5,
        fontSize: 12,
        color: '#6B7280',
    },
    roomMemberImage: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 5,
    },
    roomDescription: {
        fontSize: 12,
        color: '#6B7280',
        fontFamily: 'Cairo-Bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'Cairo-Bold',
        marginBottom: 10,
        color: '#000',
    },
    input: {
        width: '100%',
        marginVertical: 5,
        fontFamily: 'Cairo-Regular',
        backgroundColor: '#f0f0f0',
        textAlign: 'right',
    },
    modalButtons: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#8B10AE',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        width: '40%',
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Cairo-Bold',
    },
});
