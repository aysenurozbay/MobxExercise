import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface ISortIconProps {
  size: number;
  fill: string;
}

const SortIcon = ({size, fill = 'white', ...props}: ISortIconProps) => {
  return (
  <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
      <Path
        d="M3 9l4-4m0 0l4 4M7 5v14m14-4l-4 4m0 0l-4-4m4 4V5"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default SortIcon;
