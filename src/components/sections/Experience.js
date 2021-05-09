import { Section } from '@components/sections/components/Section'
import React from 'react'
import FlexView from 'react-flexview'
import styled from 'styled-components'
import { goldenRatio } from '@utils'
import { Colors, Metrics } from '@constants'
import { RichText } from '@components'
export const Experience = ({ data }) => {
  return (
    <Section title={data?.title}>
      {data.content?.map(item => {
        return <Item key={`${item.title}-${item.company}`} data={item} />
      })}
    </Section>
  )
}

const Item = ({ data }) => {
  return (
    <ItemWrapper column>
      <Title>{data.title}</Title>
      <Company>{data.company}</Company>
      <Dates>
        {data.start} - {data.end ? data.end : 'Present'}
      </Dates>
      <Location>{data.location}</Location>
      <RichText content={data.description} />
    </ItemWrapper>
  )
}

const ItemWrapper = styled(FlexView)`
  margin-top: ${goldenRatio(3)}em;
  &:first-of-type {
    margin-top: 0;
  }
`
const Title = styled.h3`
  font-size: ${goldenRatio(1)}em;
  margin: 0 0 ${goldenRatio(-2)}em 0;
`
const Company = styled.strong`
  margin-bottom: ${goldenRatio(0)}em;
`
const Dates = styled.div`
  margin-bottom: ${goldenRatio(-2)}em;
  font-weight: ${Metrics.fontWeightBold};
  color: ${Colors.textColorLight};
`
const Location = styled.div`
  margin-bottom: ${goldenRatio(1)}em;
  color: ${Colors.textColorLight};
`
