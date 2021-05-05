import { Section } from '@components/sections/components/Section'
import React from 'react'
import FlexView from 'react-flexview'
import styled from 'styled-components'
import { TextPre } from '@components'
import { goldenRatio } from '@utils'
import { Colors, Metrics } from '@constants'
export const Experience = ({ data }) => {
  return (
    <Section title={data?.title}>
      {data.content?.map((item, index) => {
        return <Item data={item} isFirst={index === 0} />
      })}
    </Section>
  )
}

const Item = ({ data, isFirst }) => {
  return (
    <ItemWrapper column isFirst={isFirst}>
      <Title>{data.title}</Title>
      <Company>{data.company}</Company>
      <Dates>
        {data.start} - {data.end ? data.end : 'Present'}
      </Dates>
      <Location>{data.location}</Location>
      <TextPre>{data.description}</TextPre>
    </ItemWrapper>
  )
}

const ItemWrapper = styled(FlexView)`
  margin-top: ${props => (props.isFirst ? 0 : goldenRatio(3))}em;
`
const Title = styled.h3`
  font-size: ${goldenRatio(1)}em;
  margin: 0 0 ${goldenRatio(-2)}em 0;
`
const Company = styled.strong`
  margin-bottom: ${goldenRatio(1)}em;
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
