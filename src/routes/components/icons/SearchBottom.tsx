import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type PropsType = {
  fill?: string;
};

const SearchBottom = (props: PropsType) => (
  <Svg width={31} height={31} fill="none">
    <Path
      d="M28.654 3.157a5.03 5.03 0 0 0-1.428-.749L20.774.258a5.03 5.03 0 0 0-6.365 3.183L9.595 17.896a5.033 5.033 0 0 0-.258 1.582v.012a5.03 5.03 0 0 0 1.999 4.023l.003.002c.438.33.926.587 1.447.76l6.438 2.139c.511.17 1.047.256 1.586.256h.012a5.032 5.032 0 0 0 4.018-2.012l.003-.005c.325-.432.578-.915.748-1.427l4.817-14.451c.17-.513.259-1.05.259-1.591v-.002a5.03 5.03 0 0 0-2.013-4.025Z"
      fill={props.fill}
    />
    <Path
      d="M11.945 26.806a7.713 7.713 0 0 1-4.88-9.752l4.013-12.05a.665.665 0 0 0-.766-.865 4.824 4.824 0 0 0-.42.12l-6.45 2.15a5.03 5.03 0 0 0-1.404.73h-.002A5.03 5.03 0 0 0 0 11.183v.002c0 .54.087 1.078.258 1.59l4.826 14.479c.164.492.407.956.718 1.371a5.1 5.1 0 0 0 4.042 2.046h.012c.539 0 1.075-.086 1.586-.256l3.778-1.255a.666.666 0 0 0 0-1.265l-3.275-1.088v-.001Z"
      fill={props.fill}
    />
  </Svg>
);

export default SearchBottom;
