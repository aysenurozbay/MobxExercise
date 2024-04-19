import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IDotsIconProps {
  size: number;
  fill: string;
}

const DotsIcon = ({size, fill = 'white', ...props}: IDotsIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M11 12a1 1 0 102 0 1 1 0 00-2 0zm0 7a1 1 0 102 0 1 1 0 00-2 0zm0-14a1 1 0 102 0 1 1 0 00-2 0z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default DotsIcon;
