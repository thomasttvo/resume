import { Section } from './components/Section'
import { SubSectionTitle } from './components/SubSection'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'
import { Colors, Metrics } from '@constants'
import { RichText } from '@components'
import { Icon } from '@components'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from '@components'
import { useMemo } from 'react'

const groupByCompany = (items) => {
  const groups = []
  for (const item of items) {
    const last = groups[groups.length - 1]
    if (last && last.company === item.company) {
      last.roles.push(item)
    } else {
      groups.push({ company: item.company, logo: item.logo, link: item.link, roles: [item] })
    }
  }
  return groups
}

export const Experience = ({ data }) => {
  const groups = useMemo(() => groupByCompany(data.content || []), [data.content])
  return (
    <Section title={data?.title}>
      {groups.map(group => (
        <CompanyGroup key={group.company} group={group} />
      ))}
    </Section>
  )
}

const CompanyGroup = ({ group }) => {
  const multiRole = group.roles.length > 1
  return (
    <GroupWrapper>
      <CompanyHeader>
        {group.logo && <CompanyLogo src={group.logo} alt={group.company} />}
        <Company>{group.company}</Company>
        {!!group.link && <CompanyLink newTab href={group.link}><LinkIconWrap><Icon name={faLink}/></LinkIconWrap></CompanyLink>}
      </CompanyHeader>
      <RolesContainer $connected={multiRole}>
        {group.roles.map(role => (
          <Role key={`${role.title}-${role.start}`} data={role} />
        ))}
      </RolesContainer>
    </GroupWrapper>
  )
}

const Role = ({ data }) => {
  return (
    <RoleWrapper>
      <SubSectionTitle>{data.title}</SubSectionTitle>
      <MetaRow>
        <span>{data.start} — {data.end ? data.end : 'Present'}</span>
        <span>{data.location}</span>
      </MetaRow>
      {data.skills?.map((skillGroup, i) => (
        <SkillPills key={i}>
          {skillGroup.map((skill, j) => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </SkillPills>
      ))}
      <DescriptionBlock>
        <RichText content={data.description} />
      </DescriptionBlock>
    </RoleWrapper>
  )
}

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${goldenRatioSpacing(2)}px 0 0 0;
  &:first-child {
    padding-top: 0;
  }
`

const CompanyHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${goldenRatioSpacing(0)}px;
`

const CompanyLogo = styled.img`
  width: ${goldenRatioSpacing(3)}px;
  height: ${goldenRatioSpacing(3)}px;
  object-fit: contain;
  border-radius: 6px;

`

const Company = styled.strong`
  font-size: ${goldenRatioSpacing(1)}px;
  line-height: 1.2;
`

const CompanyLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`

const LinkIconWrap = styled.span`
  font-size: 12px;
  color: ${Colors.textColorSideNote};
  display: inline-block;
  vertical-align: middle;
`

const RolesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${goldenRatioSpacing(0)}px;
  ${props => props.$connected && `
    padding-left: ${goldenRatioSpacing(1)}px;
    border-left: 1px solid ${Colors.pillBorder};
    margin-left: ${Math.round(goldenRatioSpacing(3) / 2)}px;
  `}
`

const RoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${goldenRatioSpacing(0)}px 0;
  &:first-child {
    padding-top: 0;
  }
`

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  margin-top: ${goldenRatioSpacing(-2)}px;
  color: ${Colors.textColorLight};
  font-size: 13px;
  font-weight: ${Metrics.fontWeightBold};
  & > span + span::before {
    content: '·';
    display: inline-block;
    vertical-align: middle;
    padding: 0 6px;
    color: ${Colors.textColorSideNote};
  }
`

const SkillPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: ${goldenRatioSpacing(-1)}px;
`

const SkillPill = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: ${Metrics.fontWeightBold};
  color: ${Colors.textColorLight};
  background: ${Colors.pillBg};
  border: 1px solid ${Colors.pillBorder};
  border-radius: 4px;
  padding: 2px 8px;
`

const DescriptionBlock = styled.div`
  margin-top: ${goldenRatioSpacing(0)}px;
`
