import {StyleSheet, View} from 'react-native';
import React from 'react';
import ChatLikes from './components/ChatLikes';
import ChatsList from './components/ChatsList';

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <ChatLikes />
      <ChatsList />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
  },
});
