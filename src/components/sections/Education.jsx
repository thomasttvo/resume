import { Section } from '@components/sections/components/Section'
import { SubSectionTitle } from '@components/sections/components/SubSection'
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
            <MetaRow>
              {!!item.major && <span>{item.major}</span>}
              <span>{item.start} — {item.end}</span>
              <span>{item.location}</span>
            </MetaRow>
          </Item>
        )
      })}
    </Section>
  )
}

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${goldenRatioSpacing(-2)}px;
  padding: ${goldenRatioSpacing(0)}px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  color: ${Colors.textColorLight};
  font-weight: ${Metrics.fontWeightBold};
  font-size: 13px;
  & > span + span::before {
    content: '·';
    display: inline-block;
    vertical-align: middle;
    padding: 0 6px;
    color: ${Colors.textColorSideNote};
  }
`
