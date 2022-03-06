import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Options = () => (
  <Svg width={24} height={22} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.1 7H1a1 1 0 0 1 0-2h2.1a5 5 0 0 1 9.8 0H23a1 1 0 1 1 0 2H12.9a5 5 0 0 1-9.8 0Zm6.567-3.494a3 3 0 1 0-3.334 4.991 3 3 0 0 0 3.334-4.992v.001ZM20.899 15H23a1 1 0 0 1 0 2h-2.1a5 5 0 0 1-9.8 0H1a1 1 0 0 1 0-2h10.1a5 5 0 0 1 9.8 0h-.001Zm-6.566 3.494a3 3 0 1 0 3.454-4.907 3 3 0 0 0-3.454 4.907Z"
      fill="#000"
    />
  </Svg>
);

export default Options;
