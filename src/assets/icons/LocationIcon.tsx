import React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

interface ILocationIconProps {
  size: number
  fill: string
}

const LocationIcon = ({ size, fill = 'white', ...props }: ILocationIconProps) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 25' fill='none' {...props}>
      <G clipPath='url(#clip0_2_1279)' stroke={fill} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
        <Path d='M15 11.5a3 3 0 10-3.973 2.84M11.76 21.97a1.99 1.99 0 01-1.173-.57l-4.244-4.243A8 8 0 1120 11.569' />
        <Path d='M18 22.5l3.35-3.284a2.14 2.14 0 00.005-3.07 2.242 2.242 0 00-3.129-.007l-.224.22-.223-.22a2.242 2.242 0 00-3.128-.006 2.143 2.143 0 00-.006 3.071L18 22.5z' />
      </G>
      <Defs>
        <ClipPath id='clip0_2_1279'>
          <Path fill='#fff' transform='translate(0 .5)' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
export default LocationIcon
