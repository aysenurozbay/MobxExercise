import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IImageIconProps {
  size: number;
  fill: string;
}

const ImageIcon = ({size, fill = 'white', ...props}: IImageIconProps) => {
  return (
  <Svg
      width={size}
      height={size}
      viewBox="0 0 34 36"
      fill="none"
      {...props}
    >
      <Path
        d="M22 10.333h.017M22 32H7a5 5 0 01-5-5V7a5 5 0 015-5h20a5 5 0 015 5v9.167"
        stroke="#172554"
        strokeWidth={3.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 23.667l8.333-8.334c1.547-1.488 3.454-1.488 5 0l5 5m8.334 13.334v.016m0-5.016a3.338 3.338 0 001.523-6.304 3.3 3.3 0 00-4.023.805"
        stroke="#172554"
        strokeWidth={3.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
          />
    </Svg>
  );
};
export default ImageIcon;
