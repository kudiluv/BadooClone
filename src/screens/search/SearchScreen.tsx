import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './components/card/Card';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Card>
      </Card>
    </View>
  );
};
export default gestureHandlerRootHOC(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
});
