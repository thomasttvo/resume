import React from 'react'
import styled from 'styled-components'
import FlexView from 'react-flexview'
import { goldenRatioSpacing } from '@utils'

const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${goldenRatioSpacing(2)}px;
  margin-top: 0;
  margin-bottom: ${goldenRatioSpacing(1)}px;
`
const Wrapper = styled(FlexView)`
  margin-top: ${goldenRatioSpacing(2)}px;
`

export const Section = ({ title, children }) => {
  return (
    <Wrapper column>
      <Title>{title}</Title>
      <FlexView column>{children}</FlexView>
    </Wrapper>
  )
}
