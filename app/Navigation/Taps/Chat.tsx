import { Entypo, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image, Modal } from 'react-native';

const initialMessages = [
    { id: '1', text: 'Hello! How are you?' },
    { id: '2', text: 'I am good, thank you! How about you?' },
    { id: '3', text: 'I am fine as well. What are you up to?' },
    { id: '4', text: 'Just working on some projects. You?' },
    { id: '5', text: 'Same here. Just taking a break.' },
];

const Chat = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const nav = useNavigation();

    const handleSend = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: Date.now().toString(), text: inputText }]);
            setInputText('');
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Entypo name="dots-three-horizontal" size={24} color="#D1D5DB" onPress={() => setModalVisible(true)} />
                <Text style={styles.title}>محمد رضا سلطاني</Text>
                <EvilIcons name="arrow-right" onPress={() => nav.goBack()} size={38} color="#7B0A9E" />
            </View>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.messageList}
                contentContainerStyle={{ paddingBottom: 10 }}
            />
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="ارسل رسالة"
                        placeholderTextColor={'#6B7280'}
                        value={inputText}
                        onChangeText={setInputText}
                    />
                    <TouchableOpacity onPress={handleSend}>
                        <Image style={styles.sendButtonText} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9068/9068837.png' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../Images/Icons/gift.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../Images/Icons/emoji-happy.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../Images/Icons/gallery.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../Images/Icons/call-calling-chat.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../../Images/Icons/microphone-2.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalOption} onPress={() => { nav.navigate('profileScreen'); setModalVisible(false) }}>عرض الصفحة الرئسية</Text>
                        <Text style={styles.modalOption} onPress={() => setModalVisible(false)}>حذف المحادثة</Text>
                        <Text style={styles.modalOption} onPress={() => setModalVisible(false)}>حظر</Text>
                        <Text style={styles.modalOption} onPress={() => setModalVisible(false)}>الابلاغ</Text>
                    </View>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalOption} onPress={() => setModalVisible(false)}>الغاء</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#fff',
        padding: 10,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Cairo-Bold',
    },
    messageList: {
        flex: 1,
        paddingHorizontal: 10,
    },
    messageContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        alignSelf: 'flex-start',
        maxWidth: '80%',
    },
    messageText: {
        fontSize: 16,
        color: '#000',
    },
    inputContainer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    inputWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Cairo-Regular',
        color: '#000',
    },
    sendButtonText: {
        width: 35,
        height: 35,
        marginHorizontal: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        width: '100%',
    },
    icon: {
        marginHorizontal: 10,
        width: 20,
        height: 20,
        resizeMode: 'contain',
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
        alignItems: 'center',
        marginVertical: 10,
    },
    modalOption: {
        fontSize: 14,
        marginVertical: 10,
        paddingVertical: 5,
        color: '#000',
        fontFamily: 'Cairo-Regular',
        borderBottomWidth: 1,
        width: '100%',
        textAlign: 'center',
        borderBottomColor: '#F6F7F9',
    },
});
