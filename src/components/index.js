import React from 'react'
import styled from 'styled-components'
import { Colors, Metrics } from '@constants'
import { goldenRatioSpacing } from '@utils'
export { RepoIntro } from '@components/RepoIntro'
export { RichText } from '@components/RichText'
export { List } from '@components/List'
export * from '@components/text'

export const AppContainer = styled.div`
  padding: ${goldenRatioSpacing(3)}px ${goldenRatioSpacing(1)}px;
  max-width: 700px;
  font-family: 'Work Sans', sans-serif;
  font-size: ${Metrics.fontSizeDefault}px;
  color: ${Colors.textColor};
`

export const PageTitle = styled.h1`
  font-size: ${goldenRatioSpacing(3)}px;
  margin: 0;
  @media all and (min-width: 768px) {
    font-size: ${goldenRatioSpacing(4)}px;
    letter-spacing: 0.04em;
  }
`

export const PageSubTitle = styled.strong`
  font-size: ${goldenRatioSpacing(1)}px;
  margin: 0;
`
