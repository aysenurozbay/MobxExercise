import React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

interface IWorldIconProps {
  size: number
  fill: string
}

const WorldIcon = ({ size, fill = 'white', ...props }: IWorldIconProps) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 25' fill='none' {...props}>
      <G clipPath='url(#clip0_2_1317)' stroke={fill} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
        <Path d='M20.94 13.545a9 9 0 10-8.953 7.955M3.6 9.5h16.8M3.6 15.5H13M11.5 3.5a17 17 0 000 18M12.5 3.5a16.99 16.99 0 012.529 10.294M16 22.5l5-5M21 22v-4.5h-4.5' />
      </G>
      <Defs>
        <ClipPath id='clip0_2_1317'>
          <Path fill='#fff' transform='translate(0 .5)' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
export default WorldIcon
