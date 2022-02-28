import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import LikeItem from './components/LikeItem';

// width of item
const width = Dimensions.get('window').width / 2.2;

const LikesScreen = () => {
  const mockItems: any[] = [];
  return (
    <FlatList
      style={styles.container}
      data={mockItems}
      numColumns={2}
      renderItem={info => (
        <View style={styles.likeItemWrapper}>
          <LikeItem uri={info.item} containerStyle={styles.itemStyle} />
        </View>
      )}
    />
  );
};

export default LikesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemStyle: {
    width,
  },
  likeItemWrapper: {
    alignItems: 'center',
    width: '50%',
    marginBottom: 15,
  },
});
