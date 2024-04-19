import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IFilterIconProps {
  size: number;
  fill: string;
}

const FilterIcon = ({size, fill = 'white', ...props}: IFilterIconProps) => {
  return (
  <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4 4h16v2.172a2 2 0 01-.586 1.414L15 12v7l-6 2v-8.5L4.52 7.572A2 2 0 014 6.227V4z"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default FilterIcon;
