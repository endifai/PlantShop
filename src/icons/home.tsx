import Svg, { Path, SvgProps } from 'react-native-svg'

export const HomeIcon = ({ fill = '#000000', ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.707 1.293a1 1 0 0 0-1.414 0l-8 8-2 2a1 1 0 1 0 1.414 1.414L3 12.414V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.586l.293.293a1 1 0 0 0 1.414-1.414l-10-10Z"
      fill={fill}
    />
  </Svg>
)
