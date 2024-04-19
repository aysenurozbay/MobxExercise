import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IArrowIconProps {
  size: number;
  fill: string;
}

const ArrowIcon = ({size, fill = 'white', ...props}: IArrowIconProps) => {
  return (
        <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <Path
        d="M16 20l4-4m0 0l-4-4m4 4h-8M16 7c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 10.667L21.333 16 16 21.333l-.95-.933 3.733-3.733h-8.116v-1.334h8.116L15.05 11.6l.95-.933z"
        fill="#4F359B"
      />
    </Svg>
  );
};
export default ArrowIcon;
