import { Section } from '@components/sections/components/Section'
import React from 'react'
import { SubSection, SubSectionTitle } from '@components/sections/components/SubSection'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils/index'
import { Colors, Metrics } from '@constants'

export const Education = ({ data }) => {
  return (
    <Section title={data?.title}>
      {data.content.map((item, index) => {
        return (
          <Item key={index}>
            <SubSectionTitle>{item.title}</SubSectionTitle>
            <Info>
              {!!item.major && <Info>{item.major}, </Info>}
              {item.start} - {item.end}
            </Info>
            <Info>{item.location}</Info>
          </Item>
        )
      })}
    </Section>
  )
}

const Item = styled(SubSection)`
  & > * {
    margin-top: ${goldenRatioSpacing(-1)}px;
  }
  & > *:first-child {
    margin-top: 0;
  }
`

const Info = styled.strong`
  color: ${Colors.textColorLight};
  font-weight: ${Metrics.fontWeightBold};
`
