import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '@constants'
import { goldenRatioSpacing } from '@utils'
export { RepoIntro } from '@components/RepoIntro'
export { RichText } from '@components/RichText'
export { List } from '@components/List'
export * from '@components/text'

export const AppContainer = styled.div`
  padding: ${goldenRatioSpacing(2)}px ${goldenRatioSpacing(1)}px;
  max-width: 740px;
  width: 100%;
  font-family: 'Work Sans', sans-serif;
  font-size: ${Metrics.fontSizeDefault}px;
  color: ${Colors.textColor};
`

export const PageTitle = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-size: ${goldenRatioSpacing(4)}px;
  line-height: 0.85;
  margin: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
`

export const PageSubTitle = styled.strong`
  font-size: ${Metrics.fontSizeDefault}px;
  font-weight: ${Metrics.fontWeightNormal};
  color: ${Colors.textColorLight};
  margin: 0;
`
