import { Section } from './components/Section'
import { List, RichText, TextStrong } from '@components'
import { Text } from '@components'
import { goldenRatioSpacing } from '@utils/index'
import { Colors, Metrics } from '@constants'
import styled from 'styled-components'

export const Summary = ({ data }) => {
  return (
    <Section title={data?.title}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <RichText content={typeof data?.content === 'function' ? data.content() : data?.content} />
        <Items
          ordered={false}
          items={data?.items}
          renderItem={item => (
            item.pills ? (
              <PillItem>
                <TextStrong>{item.title}: </TextStrong>
                {item.pills.map(pill => (
                  <Pill key={pill}>{pill}</Pill>
                ))}
              </PillItem>
            ) : (
              <Text>
                <TextStrong>{item.title}: </TextStrong>
                <Text>{item.content}</Text>
              </Text>
            )
          )}
        />
      </div>
    </Section>
  )
}

const PillItem = styled.span`
  display: inline;
  line-height: 2;
`

const Pill = styled.span`
  display: inline-block;
  margin: 1px 2px;
  font-size: 11px;
  font-weight: ${Metrics.fontWeightBold};
  color: ${Colors.textColorLight};
  background: ${Colors.pillBg};
  border: 1px solid ${Colors.pillBorder};
  border-radius: 4px;
  padding: 1px 7px;
`

const Items = styled(List)`
  margin-block-start: ${goldenRatioSpacing(0)}px;
`
