import React from 'react'
import styled from 'styled-components'
import FlexView from 'react-flexview'
import { goldenRatio } from '@utils'

const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${goldenRatio(1)}em;
`
const Wrapper = styled(FlexView)`
  margin-top: ${goldenRatio(2)}em;
`

export const Section = ({ title, children }) => {
  return (
    <Wrapper column>
      <Title>{title}</Title>
      <FlexView column>{children}</FlexView>
    </Wrapper>
  )
}
