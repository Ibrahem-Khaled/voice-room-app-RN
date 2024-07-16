import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Button } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import HeaderBar from '../../Components/Header';
import SearchBar from '../../Components/Search';
import { Modalize } from 'react-native-modalize';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import PannerModal from '../../Components/PannerModal';

const initialPosts = [
    {
        id: 1,
        username: 'user1',
        caption: 'This is the first post.',
        disc: 'منصة لاستكشاف الأفكار والقصص منصة لاستكشاف الأفكار والقصص',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images',
        userImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images",
        likes: 10,
        isLike: true,
        comments: 5
    },
    {
        id: 2,
        username: 'user2',
        caption: 'This is the second post.',
        disc: 'منصة لاستكشاف الأفكار والقصص منصة لاستكشاف الأفكار والقصص',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images',
        userImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images",
        likes: 20,
        isLike: true,
        comments: 8
    },
    {
        id: 3,
        username: 'user3',
        caption: 'This is the third post.',
        disc: 'منصة لاستكشاف الأفكار والقصص منصة لاستكشاف الأفكار والقصص',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images',
        userImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images",
        likes: 15,
        isLike: false,
        comments: 7
    },
    {
        id: 4,
        username: 'user4',
        caption: 'This is the fourth post.',
        disc: 'منصة لاستكشاف الأفكار والقصص منصة لاستكشاف الأفكار والقصص',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images',
        userImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images",
        likes: 25,
        isLike: true,
        comments: 10
    },
    {
        id: 5,
        username: 'user5',
        caption: 'This is the fifth post.',
        disc: 'منصة لاستكشاف الأفكار والقصص منصة لاستكشاف الأفكار والقصص',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.86zja7WAkbP-nntIbFMg6AHaEo%26pid%3DApi&f=1&ipt=28d02b79bc81ead43b8df866c77e3b5dc20d59fae6517d2cb483dc6a5e9219a9&ipo=images',
        userImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8Rbxh5xsE6cPuk5jCeo6jAHaHa%26pid%3DApi&f=1&ipt=d4c29df48cb0ea6486e63b4d9d086be82db9c09e8377f9c7b62ca157bd84e7e7&ipo=images",
        likes: 30,
        isLike: false,
        comments: 12,
    },
];

const dummyComments = [
    {
        id: 1,
        username: 'commenter1',
        comment: 'This is a comment.',
    },
    {
        id: 2,
        username: 'commenter2',
        comment: 'This is another comment.',
    },
    {
        id: 3,
        username: 'commenter3',
        comment: 'This is a third comment.',
    },
];

const HomeScreen = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [selectedPost, setSelectedPost] = useState(null);
    const [comment, setComment] = useState('');
    const commentModalRef = useRef<Modalize>(null);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setModalVisible(true);
            return () => setModalVisible(false); // Hide modal on blur
        }, [])
    );

    const handleLikePress = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? {
                        ...post,
                        isLike: !post.isLike,
                        likes: post.isLike ? post.likes - 1 : post.likes + 1,
                    }
                    : post
            )
        );
    };

    const handleCommentPress = (post) => {
        setSelectedPost(post);
        commentModalRef.current?.open();
    };

    const handleAddComment = () => {
        if (comment.trim()) {
            // Add the comment to the selected post
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === selectedPost.id
                        ? {
                            ...post,
                            comments: post.comments + 1,
                        }
                        : post
                )
            );
            // Clear the comment input and close the modal
            setComment('');
            commentModalRef.current?.close();
        }
    };

    const renderActions = (post) => {
        return (
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleLikePress(post.id)}>
                    {post.isLike ?
                        <AntDesign name="like2" size={20} color="#4B164C" />
                        :
                        <AntDesign name="like1" size={20} color="#4B164C" />
                    }
                    <Text style={styles.actionText}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleCommentPress(post)}>
                    <FontAwesome name="comment-o" size={20} color="#4B164C" />
                    <Text style={styles.actionText}>{post.comments}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const Post = ({ post }) => {
        return (
            <View style={styles.postContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate('profileScreen') }} style={styles.userInfo}>
                    <Image style={styles.userImage} source={{ uri: post.userImage }} />
                    <View style={styles.userInfoText}>
                        <Text style={styles.username}>{post.username}</Text>
                        <Text style={styles.caption}>{post.caption}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.description}>{post.disc}</Text>
                <Image
                    resizeMode='cover'
                    source={{ uri: post.image }}
                    style={styles.imageBackground} />
                <View style={styles.postFooter}>
                    {renderActions(post)}
                </View>
            </View>
        );
    };

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <HeaderBar />
            <PannerModal visible={modalVisible} onClose={() => setModalVisible(false)} />
            <SearchBar />
            {posts.map((item) => (
                <Post key={item.id} post={item} />
            ))}
            <Modalize
                ref={commentModalRef}
                modalHeight={400}
                handlePosition="inside"
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
            >
                <View style={styles.commentModalContent}>
                    <Text style={styles.modalTitle}>Comments</Text>
                    <ScrollView>
                        {dummyComments.map((item) => (
                            <View key={item.id} style={styles.commentContainer}>
                                <Text style={styles.commentUsername}>{item.username}</Text>
                                <Text style={styles.commentText}>{item.comment}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={styles.addCommentContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Write your comment..."
                            value={comment}
                            onChangeText={setComment}
                        />
                        <Button title="Add Comment" onPress={handleAddComment} />
                    </View>
                </View>
            </Modalize>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    postContainer: {
        width: '92%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    imageBackground: {
        height: 300,
        padding: 10,
        width: '100%',
        marginVertical: 10,
        borderRadius: 10,
    },
    userInfo: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,
    },
    userInfoText: {
        marginEnd: 10,
        alignItems: 'flex-end',
    },
    username: {
        fontFamily: 'Cairo-Bold',
        color: '#000000',
        fontSize: 15,
    },
    caption: {
        fontFamily: 'Cairo-Regular',
        color: '#6B7280',
        fontSize: 13,
    },
    postFooter: {
        borderRadius: 10,
        padding: 10,
    },
    description: {
        fontFamily: 'Cairo-Regular',
        color: '#374151',
        fontSize: 14,
        textAlign: 'right',
    },
    actionsContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        padding: 5,
        marginHorizontal: 5,
    },
    actionText: {
        fontFamily: 'Cairo-Bold',
        color: '#4B164C',
        marginLeft: 5,
    },
    commentModalContent: {
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    commentContainer: {
        marginBottom: 15,
    },
    commentUsername: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    commentText: {
        fontSize: 14,
        color: '#333',
    },
    addCommentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    textInput: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
});

export default HomeScreen;
