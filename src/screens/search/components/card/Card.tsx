import {Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
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
import CardHeader from './Header';
import ScrollView from './ScrollView';

// width and height of card
const width = Dimensions.get('window').width * 0.9;
const height = Dimensions.get('window').height * 0.82;

type ContextType = {
  transX: number;
};

const Card = () => {
  const translationX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const animatedCardStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX.value},
      {rotateZ: `${rotate.value / 20}deg`},
    ],
  }));
  const guestureHandlerEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.transX = event.translationX;
    },
    onActive: (event, context) => {
      translationX.value = withTiming(event.translationX + context.transX, {
        duration: 0,
      });
      rotate.value = withTiming(event.translationX + context.transX, {
        duration: 0,
      });
    },
    onEnd: () => {
      translationX.value = withSpring(0, {damping: 20, stiffness: 200});
      rotate.value = withTiming(0);
    },
  });

  return (
    <>
      <PanGestureHandler
        onGestureEvent={guestureHandlerEvent}
        activeOffsetX={[-10, 10]}>
        <Animated.View style={[styles.container, animatedCardStyle]}>
          <CardHeader />
          <ScrollView height={height}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80',
              }}
              style={styles.avatar}
            />
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80',
              }}
              style={styles.avatar}
            />
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  avatar: {
    width,
    height,
  },
  scrollViewStyle: {
    zIndex: 1,
  },
  scrollIndicator: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  scroll: {
    position: 'absolute',
    height: 100,
    width: 5,
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    left: '95%',
    top: height / 2 - 50,
    zIndex: 2,
  },
});
