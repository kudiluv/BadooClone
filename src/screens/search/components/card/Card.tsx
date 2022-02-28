import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  event,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const Card = () => {
  const translationX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX.value},
      {rotateZ: `${rotate.value / 50}deg`},
    ],
  }));
  const guestureHandlerEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onActive: event => {
        translationX.value = event.translationX;
        rotate.value = event.translationX;
      },
      onEnd: () => {
        translationX.value = withSpring(0);
        rotate.value = withTiming(0);
      },
    });
  return (
    <PanGestureHandler onGestureEvent={guestureHandlerEvent}>
      <Animated.ScrollView style={[styles.container, animatedCardStyle]} />
    </PanGestureHandler>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: 'black',
  },
});
