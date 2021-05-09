import { Section } from '@components/sections/components/Section'
import React from 'react'
import FlexView from 'react-flexview'
import { Colors, Metrics } from '@constants'
import styled from 'styled-components'
import { List } from '@components'

export const Skills = ({ data }) => {
  return (
    <Section title={data?.title}>
      <ContentWrapper>
        {data?.content.map((skills, index) => {
          return <List horizontal items={skills} separator={', '} />
        })}
      </ContentWrapper>
    </Section>
  )
}

const ContentWrapper = styled(FlexView)`
  color: ${Colors.textColorLight};
  font-weight: ${Metrics.fontWeightBold};
`
ContentWrapper.defaultProps = { column: true }
