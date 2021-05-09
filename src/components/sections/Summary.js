import React from 'react'
import { Section } from './components/Section'
import { List, RichText, TextStrong } from '@components'
import FlexView from 'react-flexview'
import { Text } from '@components'
import { goldenRatioSpacing } from '@utils/index'
import styled from 'styled-components'

export const Summary = ({ data }) => {
  return (
    <Section title={data?.title}>
      <FlexView column>
        <RichText content={data?.content} />
        <Items
          ordered={false}
          items={data?.items}
          renderItem={item => (
            <Text>
              <TextStrong>{item.title}: </TextStrong>
              <Text>{item.content}</Text>
            </Text>
          )}
        />
      </FlexView>
    </Section>
  )
}

const Items = styled(List)`
  margin-block-start: ${goldenRatioSpacing(0)}px;
`
