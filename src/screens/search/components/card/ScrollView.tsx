import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type PropsType = {
  height: number;
  scrollBarHeight?: number;
  children?: React.ReactNode;
};

const ScrollView = ({height, children, ...props}: PropsType) => {
  const [contentHeight, setContentHeight] = useState(0);
  const translationY = useSharedValue(0);
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translationY.value}],
  }));
  const scrollBarHeight = props.scrollBarHeight || 80;
  const diffContentHeight = contentHeight / height;
  const srcollIndicatorSize =
    scrollBarHeight / (diffContentHeight < 1 ? 1 : diffContentHeight);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    translationY.value = withTiming(
      (scrollBarHeight * event.nativeEvent.contentOffset.y) /
        height /
        diffContentHeight,
      {duration: 0},
    );
  };

  const topOffsetScrollBar = height / 2 - scrollBarHeight / 2;

  return (
    <>
      <Animated.ScrollView
        style={styles.scrollViewStyle}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={(_, updatedContentHeight) =>
          setContentHeight(updatedContentHeight)
        }
        onScroll={onScroll}>
        {children}
      </Animated.ScrollView>
      <View
        style={[
          {top: topOffsetScrollBar, height: scrollBarHeight},
          styles.scrollBar,
        ]}>
        <Animated.View
          style={[
            styles.scrollIndicator,
            {height: srcollIndicatorSize},
            animatedIndicatorStyle,
          ]}
        />
      </View>
    </>
  );
};

export default ScrollView;

const styles = StyleSheet.create({
  scrollViewStyle: {
    zIndex: 1,
  },
  scrollIndicator: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  scrollBar: {
    position: 'absolute',
    width: 4,
    backgroundColor: '#C0C0C0',
    borderRadius: 5,
    left: '95%',
    zIndex: 2,
  },
});
