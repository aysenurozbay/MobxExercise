import React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

interface IArrowIconProps {
  size: number
  fill: string
}

const ArrowIcon = ({ size, fill = 'white', ...props }: IArrowIconProps) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 16 14' fill='none' {...props}>
      <Path d='M1 7h14M1 7l6 6M1 7l6-6' stroke={fill} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    </Svg>
  )
}
export default ArrowIcon
