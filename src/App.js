import React from 'react'
import { AppContainer, PageTitle, PageSubTitle } from './components'
import './styles.scss'
import { Summary } from '@components/sections/Summary'
import { Education } from '@components/sections/Education'
import { Experience } from '@components/sections/Experience'
import { Contact } from '@components/sections/Contact'
import { Skills } from '@components/sections/Skills'
import { data } from './data'
import Helmet from 'react-helmet'

export default function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
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
