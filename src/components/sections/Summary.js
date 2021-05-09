import React from 'react'
import { Section } from './components/Section'
import {List, RichText, TextStrong} from '@components'
import FlexView from 'react-flexview'
import { Text } from '@components'

export const Summary = ({ data }) => {
  return (
    <Section title={data?.title}>
      <RichText content={data?.content}/>
      <FlexView>
        <List
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
