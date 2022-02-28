import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type PropsType = {
  fill?: string;
};

const ProfileBottom = (props: PropsType) => (
  <Svg width={30} height={30} fill="none">
    <Path
      d="M15 13.667A6.667 6.667 0 1 0 15 .333a6.667 6.667 0 0 0 0 13.334Zm0 16c8.1 0 14.667-2.985 14.667-6.667S23.1 16.333 15 16.333.333 19.318.333 23 6.9 29.667 15 29.667Z"
      fill={props.fill}
    />
  </Svg>
);

export default ProfileBottom;
