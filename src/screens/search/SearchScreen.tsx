import {StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './components/card/Card';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import SearchHeader from './SearchHeader';

const SearchScreen = () => {
  return (
    <>
      <SearchHeader />
      <View style={styles.container}>
        <Card />
      </View>
    </>
  );
};
export default gestureHandlerRootHOC(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    zIndex: 1,
  },
});
