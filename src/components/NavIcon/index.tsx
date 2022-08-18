import { ReactElement } from 'react'
import { SvgProps } from 'react-native-svg'

interface Props {
  focused: boolean
  color: string
  size: number
}

export const NavIcon =
  (Icon: (props: SvgProps) => ReactElement) =>
  ({ color }: Props) => {
    return <Icon fill={color} />
  }
