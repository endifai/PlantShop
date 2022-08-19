import { ImageSourcePropType } from 'react-native'

export interface Banner {
  title: string
  description: string
  image: ImageSourcePropType
  color: string
  button?: string
}
