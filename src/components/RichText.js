import React, { useMemo } from 'react'
import { TextP } from '@components'
import { List, ListItem } from '@components/List'
import FlexView from 'react-flexview'
import { goldenRatioSpacing } from '@utils/index'
import styled from 'styled-components'

export const RichText = ({ content }) => {
  const toRender = useMemo(() => {
    const configItems = parseText(content)
    return mapConfigToComponents(configItems)
  }, [content])

  return <Wrapper>{toRender}</Wrapper>
}

const parseText = text => {
  const componentConfigItems = []
  const defItems = text.split('\n')
  let currComponent = null
  for (let i = 0; i < defItems.length; i++) {
    const item = defItems[i]
    if (item === '') continue
    if (item.match(/^- /)) {
      if (currComponent?.componentId !== 'list') {
        componentConfigItems.push(
          (currComponent = { componentId: 'list', props: { ordered: false, items: [] } })
        )
      }
      currComponent.props.items.push(item.replace(/^- /, ''))
      continue
    }
    componentConfigItems.push((currComponent = { componentId: 'p', content: item }))
  }

  return componentConfigItems
}

const mapConfigToComponents = configItems => {
  const map = {
    list: ({ props, key }) => <List {...props} key={key} />,
    'list-item': ({ content, key }) => <ListItem key={key}>{content}</ListItem>,
    p: ({ content, key }) => <TextP key={key}>{content}</TextP>,
  }
  const mapItem = config => map[config.componentId](config)
  const mapItems = items => items.map((config, index) => mapItem({ ...config, key: index }))
  return mapItems(configItems)
}

const Wrapper = styled(FlexView)`
  & > * {
    margin: ${goldenRatioSpacing(0)}px 0 0 0;
    margin-block-start: ${goldenRatioSpacing(0)}px;
  }
  & > *:first-child {
    margin: 0;
    margin-block-start: 0;
  }
`
Wrapper.defaultProps = { column: true }
