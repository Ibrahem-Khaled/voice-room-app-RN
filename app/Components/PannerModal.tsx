import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PannerModal = ({ visible, onClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalView}>

                <Image source={require('../Images/Icons/giftIcon.png')}
                    style={{ width: '80%', height: '80%', resizeMode: 'contain', marginVertical: 20 }} />
                <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.textButton}>اغلاق</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default PannerModal

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        borderRadius: 8,
        padding: 10,
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#7B0A9E',
    },
    textButton: {
        color: '#fff',
        fontFamily: 'Cairo-SemiBold',
    },
})