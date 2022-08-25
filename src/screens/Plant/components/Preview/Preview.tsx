import { Image } from './styles'

interface Props {
  image: string
}

export const Preview = ({ image }: Props) => (
  <Image source={{ uri: image }} resizeMode="cover" />
)
