import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Colors, Metrics } from '@constants'
import { goldenRatioSpacing } from '@utils'
import PropTypes from 'prop-types'

export { RichText } from '@components/RichText'
export { List } from '@components/List'

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

export const Text = styled.span``
export const TextPre = styled.span`
  white-space: pre-wrap;
`
export const TextP = styled.p`
  margin-block-start: 0;
`
export const TextStrong = styled.strong`
  font-weight: ${Metrics.fontWeightBold};
`

export const Icon = ({ name }) => <FontAwesomeIcon icon={name} />
export const IconBrand = ({ name }) => <FontAwesomeIcon icon={['fab', name]} />
export const Link = styled(({ newTab, href, children, ...props }) => (
  <a {...props} href={href} {...(newTab && { target: '_blank' })}>
    {children || href}
  </a>
))`
  color: inherit;
  text-decoration: ${props => (props.emphasized ? 'underline' : 'none')};
  &:visited {
    color: inherit;
  }
`
Link.propTypes = {
  newTab: PropTypes.bool,
  href: PropTypes.string,
  emphasized: PropTypes.bool,
}
