import React from 'react'
import { AppContainer, PageSubTitle, PageTitle, RepoIntro } from '@components'
import './styles.scss'
import { Summary, Contact, Experience, Education, Skills } from '@components/sections'
import { data } from './data'
import Helmet from 'react-helmet'

export default function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <RepoIntro />
      <PageTitle>{data.title}</PageTitle>
      <PageSubTitle>{data.subtitle}</PageSubTitle>
      <Contact data={data.sections.contact} />
      <Summary data={data.sections.summary} />
      <Experience data={data.sections.experience} />
      <Skills data={data.sections.skills} />
      <Education data={data.sections.education} />
    </AppContainer>
  )
}
