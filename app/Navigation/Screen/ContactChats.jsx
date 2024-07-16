import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HeaderBar from '../../Components/Header';

const contacts = [
    { id: 1, name: 'John Doe', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images' },
    { id: 2, name: 'Jane Smith', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images' },
    { id: 3, name: 'Alice Johnson', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images' },
    { id: 4, name: 'Bob Brown', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images' },
];

const ContactListScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.contactItem}
            onPress={() => navigation.navigate('chatScreen', { contactId: item.id, contactName: item.name })}
        >
            <View>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.name}</Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.contactImage} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <HeaderBar userData={false} style={{ backgroundColor: '#fff' }} />
            <Text style={{ fontSize: 20, color: '#000', fontFamily: 'Cairo-Bold', margin: 5, right: 15 }}>الرسائل</Text>
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    contactImage: {
        width: 65,
        height: 65,
        borderRadius: 50,
        margin: 10,
    },
    contactName: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Cairo-Bold',
        margin: 5,
        textAlign: 'right'
    },
    lastMessage: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Cairo-Light',
        margin: 5,
        textAlign: 'right'
    },
});

export default ContactListScreen;
