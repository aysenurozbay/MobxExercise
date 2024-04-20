import React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

interface ICompanyIconProps {
  size: number
  fill: string
}

const CompanyIcon = ({ size, fill = 'white', ...props }: ICompanyIconProps) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 25' fill='none' {...props}>
      <G clipPath='url(#clip0_2_1295)' stroke={fill} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
        <Path d='M3 21.5h18M5 21.5v-14l8-4v18M19 21.5v-10l-6-4M9 9.5v.01M9 12.5v.01M9 15.5v.01M9 18.5v.01' />
      </G>
      <Defs>
        <ClipPath id='clip0_2_1295'>
          <Path fill='#fff' transform='translate(0 .5)' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
export default CompanyIcon
