import Svg, { Path, SvgProps } from 'react-native-svg'

export const FavoritesIcon = ({ fill = '#000000', ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3H8Z"
      fill={fill}
    />
  </Svg>
)
