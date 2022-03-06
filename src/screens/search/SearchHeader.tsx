import {StyleSheet, View} from 'react-native';
import React from 'react';
import HeartHeaderLogo from '../../components/icons/HeartHeaderLogo';
import Options from '../../components/icons/Options';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView} />
      <View style={styles.centerView}>
        <HeartHeaderLogo />
      </View>
      <View style={styles.rightView}>
        <Options />
      </View>
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
    zIndex: 0,
  },
  leftView: {
    paddingLeft: 20,
    flex: 2,
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
  },
  rightView: {
    flex: 2,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});
