import { Section } from '@components/sections/components/Section'
import { TextStrong } from '@components'
import { Colors, Metrics } from '@constants'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'

export const Skills = ({ data }) => {
  return (
    <Section title={data?.title}>
      <ContentWrapper>
        {data?.groups.map(group => (
          <SkillGroup key={group.label}>
            <TextStrong>{group.label}: </TextStrong>
            <PillsInline>
              {group.items.map(skill => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </PillsInline>
          </SkillGroup>
        ))}
      </ContentWrapper>
    </Section>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${goldenRatioSpacing(0)}px;
`

const SkillGroup = styled.div`
  display: inline;
  line-height: 2;
`

const PillsInline = styled.span`
  display: inline;
`

const Pill = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: ${Metrics.fontWeightBold};
  color: ${Colors.textColorLight};
  background: ${Colors.pillBg};
  border: 1px solid ${Colors.pillBorder};
  border-radius: 4px;
  padding: 1px 7px;
  margin: 1px 2px;
`
