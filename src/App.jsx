import { AppContainer, PageSubTitle, PageTitle, RichText, TextStrong } from '@components'
import './styles.scss'
import { Contact, Experience, Education } from '@components/sections'
import { data } from './data'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'
import { Colors, Metrics } from '@constants'

export default function App() {
  const summaryContent = data.sections.summary.content
  const summaryText = typeof summaryContent === 'function' ? summaryContent() : summaryContent

  return (
    <AppContainer>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <Header>
        <PhotoWrap>
          <PhotoImg src={data.profilePhoto} alt={data.title} />
        </PhotoWrap>
        <HeaderInfo>
          <PageTitle>{data.title}</PageTitle>
          <PageSubTitle>{data.subtitle}</PageSubTitle>
        </HeaderInfo>
      </Header>
      <Contact data={data.sections.contact} />
      <SummaryText>
        <RichText content={summaryText} />
      </SummaryText>
      <SkillsBlock>
        {data.sections.skills.groups.map(group => (
          <SkillGroup key={group.label}>
            <TextStrong>{group.label} </TextStrong>
            <PillsInline>
              {group.items.map(skill => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </PillsInline>
          </SkillGroup>
        ))}
      </SkillsBlock>
      <Experience data={data.sections.experience} />
      <Education data={data.sections.education} />
    </AppContainer>
  )
}

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${goldenRatioSpacing(1)}px;
`

const PhotoWrap = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
`

const PhotoImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const SummaryText = styled.div`
  margin-top: ${goldenRatioSpacing(1)}px;
`

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${goldenRatioSpacing(0)}px;
  margin-top: ${goldenRatioSpacing(1)}px;
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
