import { Section } from '@components/sections/components/Section'
import React from 'react'
import queryString from 'query-string'
import { Icon, Link } from '@components'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils/index'
import { Metrics } from '@constants'

export const Contact = ({ data }) => {
  const queryParam = queryString.parse(location.search, { arrayFormat: 'comma' })
  console.log(queryParam)
  const content = data.content
    .map(item => {
      const content = item.content(queryParam)
      const { href, icon } = item
      return (
        !!content && (
          <ItemLink key={item.code} href={href(content)}>
            <span>
              <Icon name={icon} />
            </span>
            <span>{content}</span>
          </ItemLink>
        )
      )
    })
    .filter(Boolean)

  return !!content.length && <Section title={data?.title}>{content}</Section>
}

const ItemLink = styled(Link)`
  font-weight: ${Metrics.fontWeightBold};
  margin-top: ${goldenRatioSpacing(-1)}px;
  &:first-child {
    margin-top: 0;
  }
  & > *:first-child {
    display: inline-block;
    width: ${goldenRatioSpacing(1)}px;
  }
`
ItemLink.defaultProps = { newTab: true }
