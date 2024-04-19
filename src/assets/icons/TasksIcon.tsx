import React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

interface ITasksIconProps {
  size: number;
  fill: string;
}

const TasksIcon = ({size, fill = 'white', ...props}: ITasksIconProps) => {
  return (
  <Svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill='none'
      {...props}
    >
      <G
        clipPath="url(#clip0_3_991)"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9.5 5h-2a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <Path d="M9.5 5a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2zM9.5 14h.01M9.5 17h.01M12.5 16l1 1 3-3" />
      </G>
      <Defs>
        <ClipPath id="clip0_3_991">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default TasksIcon;
