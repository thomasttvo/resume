import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${goldenRatioSpacing(2)}px;
  &:first-of-type {
    margin-top: 0;
  }
`
export const SubSectionTitle = styled.h3`
  font-size: 17px;
  margin: 0;
`
