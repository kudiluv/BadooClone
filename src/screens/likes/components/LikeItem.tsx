import {
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Heart from '../../../static/Heart.svg';
import Close from '../../../static/Close.svg';

type PropsType = {
  uri: string;
  containerStyle?: ViewStyle;
  onDismiss?: () => void;
  onSuccess?: () => void;
};

const LikeItem = (props: PropsType) => {
  const rippleColor = '#f3e7fd';

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image style={styles.image} source={{uri: props.uri}} />
      <View style={styles.buttonsContainer}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(rippleColor, false)}
          onPress={props.onDismiss}>
          <View style={[styles.button, styles.buttonLeft]}>
            <Close />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(rippleColor, false)}
          onPress={props.onSuccess}>
          <View style={styles.button}>
            <Heart />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default LikeItem;

const styles = StyleSheet.create({
  container: {
    maxWidth: 182,
    height: 242,
    borderRadius: 11,
    overflow: 'hidden',
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    height: '20%',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLeft: {
    borderColor: '#DDDDDD',
    borderRightWidth: 1,
  },
});
