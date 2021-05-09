import { Icon, Link, TextP } from '@components'
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export const RepoIntro = () => {
  const repoId = 'thomasttvo/resume'
  return (
    <TextP>
      This page is made entirely with React <Icon name={faReact} />.
      <br />
      {'Check out original code at '}
      <Link emphasized href={`https://github.com/${repoId}`}>
        <Icon name={faGithub} /> ${repoId}
      </Link>
    </TextP>
  )
}
