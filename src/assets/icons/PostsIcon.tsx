import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface IPostsIconProps {
  size: number;
  fill: string;
}

const PostsIcon = ({size, fill = 'white', ...props}: IPostsIconProps) => {
  return (
      <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        clipPath="url(#clip0_3_998)"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9 4v18M6 4h11a2 2 0 012 2v12a2 2 0 01-2 2H6a1 1 0 01-1-1V5a1 1 0 011-1zM13 8h2M13 12h2" />
      </G>
      <Defs>
        <ClipPath id="clip0_3_998">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default PostsIcon;
