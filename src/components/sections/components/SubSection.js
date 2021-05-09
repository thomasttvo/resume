import styled from 'styled-components'
import FlexView from 'react-flexview'
import { goldenRatioSpacing } from '@utils'

export const SubSection = styled(FlexView)`
  margin-top: ${goldenRatioSpacing(2)}px;
  &:first-of-type {
    margin-top: 0;
  }
`
SubSection.defaultProps = { column: true }
export const SubSectionTitle = styled.h3`
  font-size: ${goldenRatioSpacing(1)}px;
  margin: 0;
`
