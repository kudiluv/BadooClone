import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type PropsType = {
  uri: string;
  username: string;
};

const ChatLikesItem = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.uri,
        }}
      />
      <Text style={styles.username}>{props.username}</Text>
    </View>
  );
};

export default ChatLikesItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
  },
  username: {
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
  },
});
