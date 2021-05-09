import { Icon, Link, TextP } from '@components/text'
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'
import { Colors } from '@constants'

export const RepoIntro = () => {
  const repoId = 'thomasttvo/resume'
  return (
    <Wrapper>
      This page is made entirely with React <Icon name={faReact} />.
      <br />
      {'Check out original code at '}
      <RepoLink href={`https://github.com/${repoId}`}>
        <Icon name={faGithub} /> {repoId}
      </RepoLink>
    </Wrapper>
  )
}

const Wrapper = styled(TextP)`
  color: ${Colors.textColorSideNote};
  margin-bottom: ${goldenRatioSpacing(2)}px;
`
const RepoLink = styled(Link)`
  white-space: nowrap;
`
RepoLink.defaultProps = { emphasized: true, newTab: true }
