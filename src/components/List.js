import styled, { css } from 'styled-components'
import { goldenRatio } from '@utils/index'
import React from 'react'

export const List = ({ ordered, horizontal, items = [], separator, renderItem, getKey }) => {
  const ListWrapper = ordered ? OrderedList : UnorderedList

  return (
    <ListWrapper horizontal={horizontal}>
      {items.map((item, index) => (
        <ListItem horizontal={horizontal} key={getKey ? getKey(item) : index}>
          {renderItem ? renderItem(item) : item}
          {index === items.length - 1 ? null : separator}
        </ListItem>
      ))}
    </ListWrapper>
  )
}

const baseListStyles = css`
  list-style-type: ${props => (props.horizontal ? 'none' : undefined)};
  margin-block-start: 0;
  padding-inline-start: ${props => (props.horizontal ? 0 : `${goldenRatio(1)}em`)} ;
`
const UnorderedList = styled.ul`
  ${baseListStyles}
`
const OrderedList = styled.ol`
  ${baseListStyles}
`
export const ListItem = styled.li`
  margin-top: ${goldenRatio(-1)}em;
  display: ${props => (props.horizontal ? 'inline-block' : undefined)};
  margin-right: ${props => (props.horizontal ? `${goldenRatio(-1)}em` : undefined)};
`
