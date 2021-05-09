import { Section } from './components/Section'
import { SubSection, SubSectionTitle } from './components/SubSection'
import React from 'react'
import FlexView from 'react-flexview'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'
import { Colors, Metrics } from '@constants'
import { RichText } from '@components'
import { Icon } from '@components'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@components'

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
    <SubSection>
      <Block>
        <SubSectionTitle>{data.title}</SubSectionTitle>
        <Company>
          <Link newTab href={data.link}>{data.company} <Icon name={faLink}/></Link>
        </Company>
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
    </SubSection>
  )
}

export const Block = styled(FlexView)`
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

const Company = styled.strong``
const Dates = styled.div`
  font-weight: ${Metrics.fontWeightBold};
  color: ${Colors.textColorLight};
`
const Location = styled.div`
  color: ${Colors.textColorLight};
`
