import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IUserIconProps {
  size: number;
  fill: string;
}

const UserIcon = ({size, fill = 'white', ...props}: IUserIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <Path
        d="M3 12.5a9 9 0 1018.001 0A9 9 0 003 12.5z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.168 19.349A4 4 0 0110 16.5h4a4 4 0 013.834 2.855M9 10.5a3 3 0 106 0 3 3 0 00-6 0z"
        stroke="#6B7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default UserIcon;
