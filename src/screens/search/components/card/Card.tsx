import {Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import CardHeader from './Header';
import ScrollView from './ScrollView';
import useAnimatedCardStyle from '../../hooks/useAnimatedCardStyle';

// width and height of card
const width = Dimensions.get('window').width * 0.9;
const height = Dimensions.get('window').height * 0.82;

const Card = () => {
  const {animatedCardStyle, guestureHandlerEvent} = useAnimatedCardStyle();
  return (
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
        </ScrollView>
      </Animated.View>
    </PanGestureHandler>
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
});
