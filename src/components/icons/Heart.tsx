import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type PropsType = {
  fill?: string;
};

const Heart = (props: PropsType) => (
  <Svg width={24} height={19} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.677.002a6.03 6.03 0 0 0-3.36.912A6.13 6.13 0 0 0 12 3.538 6.13 6.13 0 0 0 9.683.914a6.03 6.03 0 0 0-3.36-.912 6.372 6.372 0 0 0-4.461 1.913A6.518 6.518 0 0 0 0 6.44C0 13.374 6.595 19 12 19s12-5.626 12-12.56C24 2.883 21.078.002 17.677.002Z"
      fill={props.fill || '#2D2D2D'}
    />
  </Svg>
);

export default Heart;
