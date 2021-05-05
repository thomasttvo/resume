import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colors, Metrics } from '@constants'
import { goldenRatio } from '../utils'

export const AppContainer = styled.div`
  padding: 2em;
  max-width: 700px;
  font-family: 'Work Sans', sans-serif;
  font-size: ${Metrics.fontSizeDefault}px;
  color: ${Colors.textColor};
`

export const PageTitle = styled.h1`
  font-size: ${goldenRatio(3)}em;
  margin: 0;
  @media all and (min-width: 768px) {
    font-size: ${goldenRatio(4)}em;
    letter-spacing: 0.04em;
  }
`

export const PageSubTitle = styled.strong`
  font-size: ${goldenRatio(1)}em;
  margin: 0;
`

export const Text = styled.span``
export const TextP = styled.p``

export const Icon = ({ name }) => <FontAwesomeIcon icon={['fas', name]} />
export const IconBrand = ({ name }) => <FontAwesomeIcon icon={['fab', name]} />
