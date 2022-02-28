import {Dimensions, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import LikeItem from './components/LikeItem';

// width of item
const width = Dimensions.get('window').width / 2.2;

const LikesScreen = () => {
  const mockItems: any[] = [];
  const getStyleItem = (items: Array<any>, index: number) => {
    // checking the column number
    if (!(index % 2)) {
      // checking the existence of the following element
      if (items[index + 1]) {
        return styles.firstColumn;
      } else {
        return styles.lastFirstColumn;
      }
    }
  };
  return (
    <FlatList
      style={styles.container}
      data={mockItems}
      numColumns={2}
      contentContainerStyle={styles.list}
      renderItem={info => (
        <LikeItem
          uri={info.item}
          containerStyle={{
            ...styles.itemStyle,
            ...getStyleItem(mockItems, info.index),
          }}
        />
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
    marginBottom: 10,
  },
  list: {
    alignItems: 'center',
  },
  firstColumn: {
    marginRight: 10,
  },
  lastFirstColumn: {
    marginRight: 10,
    transform: [{translateX: -width / 2}],
  },
});
