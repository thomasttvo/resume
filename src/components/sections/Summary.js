import React from 'react'
import { Section } from './components/Section'
import { TextPre } from '@components'

export const Summary = ({ data }) => {
  return (
    <Section title={data?.title}>
      <TextPre>{data.content}</TextPre>
    </Section>
  )
}
