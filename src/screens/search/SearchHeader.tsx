import {StyleSheet, View} from 'react-native';
import React from 'react';
import HeartHeaderLogo from '../../components/icons/HeartHeaderLogo';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <HeartHeaderLogo />
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 15,
  },
});
