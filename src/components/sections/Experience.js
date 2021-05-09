import { Section } from '@components/sections/components/Section'
import React from 'react'
import FlexView from 'react-flexview'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'
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
    <ItemWrapper>
      <Block>
        <Title>{data.title}</Title>
        <Company>{data.company}</Company>
      </Block>
      <Block>
        <Dates>
          {data.start} - {data.end ? data.end : 'Present'}
        </Dates>
        <Location>{data.location}</Location>
      </Block>
      <Block>
        <RichText content={data.description} />
      </Block>
    </ItemWrapper>
  )
}

const ItemWrapper = styled(FlexView)`
  margin-top: ${goldenRatioSpacing(2)}px;
  &:first-of-type {
    margin-top: 0;
  }
`
ItemWrapper.defaultProps = { column: true }

const Block = styled(FlexView)`
  margin-top: ${goldenRatioSpacing(0)}px;
  &:first-of-type {
    margin-top: 0;
  }
  & > * {
    margin: ${goldenRatioSpacing(-2)}px 0 0 0;
  }
  & > *:first-child {
    margin: 0;
  }
`
Block.defaultProps = { column: true }

const Title = styled.h3`
  font-size: ${goldenRatioSpacing(1)}px;
  margin: 0;
`
const Company = styled.strong``
const Dates = styled.div`
  font-weight: ${Metrics.fontWeightBold};
  color: ${Colors.textColorLight};
`
const Location = styled.div`
  color: ${Colors.textColorLight};
`
