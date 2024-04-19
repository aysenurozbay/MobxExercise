import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IAlbumIconProps {
  size: number;
  fill: string;
}

const AlbumIcon = ({size, fill = 'white', ...props}: IAlbumIconProps) => {
  return (
  <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_3_1003)"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M15 8h.01M11.5 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v5" />
        <Path d="M3 16l5-5c.928-.893 2.072-.893 3 0l1.5 1.5M18 22l3.35-3.284a2.143 2.143 0 00.005-3.071 2.242 2.242 0 00-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 00-3.128-.006 2.143 2.143 0 00-.006 3.071L18 22z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3_1003">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default AlbumIcon;
