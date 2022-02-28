import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type PropsType = {
  fill?: string;
};

const ChatBottom = (props: PropsType) => (
  <Svg width={28} height={27} fill="none">
    <Path
      d="M25.826 19.81a13.353 13.353 0 1 0-5.682 5.683l4.17 1.39a2.295 2.295 0 0 0 2.901-2.903l-1.39-4.17h.001Zm-5.16-8.143a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-13.333 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm4.667-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill={props.fill}
    />
  </Svg>
);

export default ChatBottom;
