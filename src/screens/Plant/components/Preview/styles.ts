import { Image as ImageRN } from 'react-native'
import styled from 'styled-components'

import { IMAGE_HEIGHT } from '../../constants'

export const Image = styled(ImageRN)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
`
