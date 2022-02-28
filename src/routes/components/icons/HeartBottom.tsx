import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type PropsType = {
  fill?: string;
};

const HeartBottom = (props: PropsType) => (
  <Svg width={31} height={25} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.832.003a7.682 7.682 0 0 0-4.34 1.2A8.02 8.02 0 0 0 15.5 4.655a8.02 8.02 0 0 0-2.992-3.454A7.682 7.682 0 0 0 8.168.003 8.158 8.158 0 0 0 2.404 2.52 8.66 8.66 0 0 0 0 8.474C0 17.598 8.518 25 15.5 25 22.482 25 31 17.598 31 8.474c0-4.68-3.774-8.47-8.168-8.47Z"
      fill={props.fill}
    />
  </Svg>
);

export default HeartBottom;
