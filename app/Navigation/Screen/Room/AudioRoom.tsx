import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import ZegoUIKitPrebuiltLiveAudioRoom, { HOST_DEFAULT_CONFIG } from '@zegocloud/zego-uikit-prebuilt-live-audio-room-rn'
import { AppSign, zegoAppId } from '../../../../env';

export default function LiveAudioRoomPage(props: any) {

    const image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.1095ZKXFpTyppTZUAyytEwHaNK%26pid%3DApi&f=1&ipt=311ffac39599a07f6c155f5b904009433ee396cb34dbddf2b4f4b92442e4efcd&ipo=images'

    return (
        <ImageBackground source={{ uri: image }} blurRadius={5} resizeMode="cover" style={styles.container}>
            <ZegoUIKitPrebuiltLiveAudioRoom
                appID={zegoAppId}
                appSign={AppSign}
                userID={'userID123'} // userID can be something like a phone number or the user id on your own user system. 
                userName={'username'}
                roomID={'roomID123'} // roomID can be any unique string. 
                config={{
                    ...HOST_DEFAULT_CONFIG,
                    onLeave: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});

