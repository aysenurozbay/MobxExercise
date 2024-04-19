import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IDrawerIconProps {
  size: number;
  fill: string;
}

const DrawerIcon = ({size, fill = 'white', ...props}: IDrawerIconProps) => {
  return (
     <Svg
      width={size}
      height={size}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <Path
        d="M12 14.5h16m-16 6h16m-16 6h16"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default DrawerIcon;
