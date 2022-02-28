import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type PropsType = {
  uri: string;
  username: string;
  lastMessage: string;
};

const ChatItem = (props: PropsType) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.uri,
        }}
      />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{props.username}</Text>
        <Text>{props.lastMessage}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 1,
    marginRight: 8,
  },
  username: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userInfo: {
    justifyContent: 'center',
  },
});
