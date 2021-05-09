import React from 'react'
import { AppContainer, PageTitle, PageSubTitle, TextP } from './components'
import './styles.scss'
import { Summary } from '@components/sections/Summary'
import { Education } from '@components/sections/Education'
import { Experience } from '@components/sections/Experience'
import { Contact } from '@components/sections/Contact'
import { Skills } from '@components/sections/Skills'
import { data } from './data'
import Helmet from 'react-helmet'
import { Link } from '@components'

export default function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <TextP>
        {'This page is made entirely with React.'}
        <br />
        {'Check out original code at '}
        <Link emphasized href={'https://github.com/thomasttvo/resume'} />
      </TextP>
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
