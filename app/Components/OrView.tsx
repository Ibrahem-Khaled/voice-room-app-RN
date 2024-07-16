import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrView = ({ name }) => {
    return (
        <View style={styles.main}>
            <View style={styles.orView} />
            <Text style={styles.txt}>{name}</Text>
            <View style={styles.orView} />
        </View>
    )
}

export default OrView

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        width: '95%',
        marginVertical: 20,
        alignSelf: 'center',
    },
    orView: {
        width: '30%',
        borderWidth: 1,
        borderColor: '#6B7280'
    },
    txt: {
        fontSize: 10,
        fontFamily: 'Cairo-Bold',
        color: '#6B7280'
    },
})