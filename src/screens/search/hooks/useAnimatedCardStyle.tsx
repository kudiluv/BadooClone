import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

type ContextType = {
  transX: number;
};

const useAnimatedCardStyle = () => {
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
  return {guestureHandlerEvent, animatedCardStyle};
};

export default useAnimatedCardStyle;
