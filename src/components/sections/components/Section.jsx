import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils'
import { Colors } from '@constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${goldenRatioSpacing(2)}px;
  padding-top: ${goldenRatioSpacing(2)}px;
  border-top: 1px solid ${Colors.pillBorder};
`

export const Section = ({ children }) => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </Wrapper>
  )
}
