import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const dataScreen = [
    {
        title: ' استمتع بالعالم الجميل',
        description: 'استمتع باصدقاء جدد عبر  enjoy chat',
        bgImage: 'https://s3-alpha-sig.figma.com/img/d3d4/0ad4/2d9a39cd85003d35bb1d9807ce550ffa?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aEC4d3MmXf8dtCyj8nrCbt8deJJ4L9nvcJJy1yaxtqmDqBiRF8-3teO9PDEk8j3vhqDxu8wer5D~EsKenzqNZ5b1c7VoYuG3XCtnkbLF7PoYAIdwKS42YGmMyGK6cgT7iv1IFLuGTegR0mwVQQ-irfgeprgHx7qv04vv9WsX2LGa7KTSROdko6dGCZeW8jR1cReE3hR7NRmeIvTrrXUGP2wFsGFSML~XQe2qrCo648rJNI3JmUoEuTtLHXmigThPDNdrRCJhgBxITPIMnlROWxizNtFUubQwzGneIW0OSQvVYXf9kggXIEybC8a8Q0QzqmPEZcdMXS1f~G2Btp-ztg__'
    },
    {
        title: 'اصنع صدقات جدد',
        description: 'هيا بنا لي تقابل اضدقاء جدد',
        bgImage: 'https://s3-alpha-sig.figma.com/img/926b/ddce/6c4ddf76999cdd93dd1f66189f6eb449?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BVOorKsfVgc8a9dUpDNW4RfA4sCu0wA67cJSfl~GaE7paH3VuBNGlI-~GGyzE0PHXiiiFQVFaheyL1kq3~3H73fuIq7APMdrpZQnKQKhhzAvGt~clqN303sdqxtzMBic0F1qRtbO53DEz6TKiqFtGG1vOUozDh8VoUvISi8suI-wKVVhzBhqQPCmUoka1syFGsIM97wcw~PJKfpcTF5UUiZfZlYEB94fzpi8o~QLoh00SExQchA45ncjClsn5If4e8lf6CZThSJkoQydyb8~Xt53PzNOIxVJyNzL-t0y2Y-c4MQxfwhGxpE2SLVybR~6DPs3Wd8JH4-nWmJboQDfkA__'
    },
    {
        title: 'اكتشف العالم',
        description: 'اكتشف اماكن و ثقافات وتجارب الجديدة',
        bgImage: 'https://s3-alpha-sig.figma.com/img/f235/8874/54526710afa8db364e1de1c03513919c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nakmdHct-l9DN9Jl3iLKEeOh9Xk2Xv~UEUmrlN9o1PbqgCfNUPhymg6yn4Um-OXOo0gQiizDUBkyE9ExcbNlSvFGuy2P3q5w0f3mTfU0QoUZZ--7h7FYp95WGiyVHZ9kSBgxZNSB4aLQMEiBIf3qrWpXU8iKiu5ToB2pBUzDkfX8JsfAUWysh4OF4AMeKNxgHnBmG8dl-MdZIIRHB8G6Cp~MLwpjkKI8CwYsBK-9XCsuQEQbOqSlRFFz5~MI7jlVPqsRMxeUIxH5RQtWhpwua~7tlkjdo6bHQaOipu~wHha8m6TDJ-J50fN5b3FNOau4jXmUgbEJBrnervoeTdYwZw__'
    }
];

const OnboardingScreen = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [opacity] = useState(new Animated.Value(1));
    const nav = useNavigation();


    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleFinish = () => {
        nav.navigate('selectLogin');
    };

    const renderPagination = () => {
        return (
            <View style={styles.pagination}>
                {dataScreen.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.paginationDot,
                            currentPage === index && styles.activeDot,
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={[styles.container]}>
            <ImageBackground source={{ uri: dataScreen[currentPage].bgImage }} style={styles.imageBackground}>
                {dataScreen.map((item, index) => {
                    return (
                        <View key={index} style={[styles.page, currentPage === index ? {} : { display: 'none' }]}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    );
                })}
                <View style={styles.paginationContainer}>{renderPagination()}</View>
                <View style={styles.buttonsContainer}>
                    {currentPage !== 0 && (
                        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
                            <Text style={styles.btnTxt}>السابق</Text>
                        </TouchableOpacity>
                    )}
                    {currentPage !== 2 ? (
                        <TouchableOpacity style={styles.button} onPress={handleNext}>
                            <Text style={styles.btnTxt}>التالي</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={styles.button} onPress={handleFinish}>
                            <Text style={styles.btnTxt}>انهاء</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    page: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontFamily: 'Cairo-Bold',
        color: '#fff',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Cairo-Bold',
        marginBottom: 40,
        color: '#fff',
    },
    paginationContainer: {
        marginBottom: 20,
    },
    pagination: {
        flexDirection: 'row',
        margin: 20,
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        width: 20,
        backgroundColor: '#7B0A9E',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width - 40,
        alignItems: 'center',
        margin: 10,
    },
    button: {
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7B0A9E',
        height: 50,
    },
    btnTxt: {
        fontSize: 14,
        fontFamily: 'Cairo-Bold',
        color: '#fff',
    },
});

export default OnboardingScreen;
