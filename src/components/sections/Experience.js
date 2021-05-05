import { Section } from '@components/sections/components/Section'
import React from 'react'
import FlexView from 'react-flexview'
import styled from 'styled-components'
import {TextPre} from '@components/index'
export const Experience = ({ data }) => {
  return (
    <Section title={data?.title}>
      {data.content?.map(item => {
        return <Item data={item} />
      })}
    </Section>
  )
}

const ItemWrapper = styled(FlexView)`
  margin-top: 1em;
`

const Item = ({ data }) => {
  return (
    <ItemWrapper column>
      <h3>{data.title}</h3>
      <strong>{data.company}</strong>
      <div>
        {data.start} - {data.end ? data.end : 'Present'}
      </div>
      <div>{data.location}</div>
      <TextPre>{data.description}</TextPre>
    </ItemWrapper>
  )
}
