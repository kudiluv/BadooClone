import {FlatList, StyleSheet, Text} from 'react-native';
import React from 'react';
import ChatLikesItem from './ChatLikesItem';

const ChatLikes = () => {
  const mokdata: any[] = [];
  return (
    <>
      <Text style={styles.title}>Симпатии</Text>
      <FlatList
        style={styles.ChatLikesContainer}
        data={mokdata}
        horizontal={true}
        renderItem={info => {
          return (
            <ChatLikesItem uri={info.item.uri} username={info.item.username} />
          );
        }}
      />
    </>
  );
};

export default ChatLikes;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  ChatLikesContainer: {
    flex: 1,
    height: 150,
  },
});
