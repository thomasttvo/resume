import styled from 'styled-components'
import { Metrics } from '@constants/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

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
