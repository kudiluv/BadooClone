import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ChatItem from './ChatItem';

const ChatsList = () => {
  const mokdata: any[] = [];
  return (
    <FlatList
      style={styles.container}
      data={mokdata}
      renderItem={info => {
        return (
          <ChatItem
            uri={info.item.uri}
            lastMessage={info.item.lastMessage}
            username={info.item.username}
          />
        );
      }}
    />
  );
};

export default ChatsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
