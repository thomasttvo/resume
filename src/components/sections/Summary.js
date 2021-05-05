import React from 'react'
import { Section } from './components/Section'
import { TextP } from '@components'
import FlexView from 'react-flexview'

export const Summary = ({ data }) => {
  return (
    <Section title={data?.title}>
      <FlexView column>
        {data?.content?.split('\n\n').map(paragraph => (
          <TextP>{paragraph}</TextP>
        ))}
      </FlexView>
    </Section>
  )
}
