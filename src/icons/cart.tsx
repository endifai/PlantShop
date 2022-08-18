import Svg, { Path, SvgProps } from 'react-native-svg'

export const CartIcon = ({ fill = '#000000', ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a1 1 0 0 0 0 2h1.087l.19 2.09.55 6.047a3 3 0 0 0 3.2 2.72l10.435-.745a3 3 0 0 0 2.756-2.568l.772-5.403A1 1 0 0 0 21 6H6.186l-.19-2.09A1 1 0 0 0 5 3H3Zm7 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={fill}
    />
  </Svg>
)
