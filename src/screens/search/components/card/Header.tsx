import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>Лана, 19</Text>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    padding: 20,
    fontWeight: '800',
  },
  innerContainer: {},
});
