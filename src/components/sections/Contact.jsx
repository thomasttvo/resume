import { Icon, Link } from '@components'
import styled from 'styled-components'
import { goldenRatioSpacing } from '@utils/index'
import { Colors, Metrics } from '@constants'

export const Contact = ({ data }) => {
  const queryParam = Object.fromEntries(new URLSearchParams(window.location.search))
  const content = data.content
    .map(item => {
      const content = item.content(queryParam)
      const { href, icon } = item
      const display = item.display ? item.display(content) : content
      const Wrapper = href ? ItemLink : ItemText
      return (
        !!content && (
          <Wrapper key={item.code} {...(href ? { href: href(content) } : {})}>
            <span>
              <Icon name={icon} />
            </span>
            <span>{display}</span>
          </Wrapper>
        )
      )
    })
    .filter(Boolean)

  return !!content.length && <ContactBar>{content}</ContactBar>
}

const ContactBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${goldenRatioSpacing(0)}px;
  margin-top: ${goldenRatioSpacing(1)}px;
`

const ItemLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: ${Metrics.fontWeightBold};
  font-size: 14px;
  color: ${Colors.textColor};
  &:visited {
    color: ${Colors.textColor};
  }
`
ItemLink.defaultProps = { newTab: true }

const ItemText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: ${Metrics.fontWeightBold};
  font-size: 14px;
  color: ${Colors.textColor};
`
