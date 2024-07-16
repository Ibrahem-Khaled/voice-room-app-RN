import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ placeholder = "بحث عن اصدقاء او الغرف" }) => {
    const [searchText, setSearchText] = useState('');

    const handleClearText = () => {
        setSearchText('');
    };

    return (
        <View style={{ flexDirection: 'row-reverse', alignItems: 'center', margin: 10, justifyContent: 'space-around' }}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="#6B7280" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder={placeholder}
                    placeholderTextColor="#6B7280"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            {searchText.length > 0 && (
                <TouchableOpacity onPress={handleClearText} style={styles.clearButton}>
                    <Text style={{ fontFamily: 'Cairo-Bold', color: 'rgba(123, 10, 158, 1)', }}>الغاء</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F4F7',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        margin: 5,
        paddingHorizontal: 10,
        width: '85%',
        alignSelf: 'center',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
        color: '#23262F',
        fontSize: 16,
        textAlign: 'right',
        fontFamily: 'Cairo-Regular',
    },
    clearButton: {
        padding: 5,
    },
});

export default SearchBar;
