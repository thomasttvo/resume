import styled, { css } from 'styled-components'
import { goldenRatioSpacing } from '@utils'
import React from 'react'

export const List = ({ ordered, horizontal, items = [], separator, renderItem, getKey, className }) => {
  const ListWrapper = ordered ? OrderedList : UnorderedList

  return (
    <ListWrapper className={className} horizontal={horizontal}>
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
  padding-inline-start: ${props => (props.horizontal ? 0 : `${goldenRatioSpacing(1)}px`)};
`
const UnorderedList = styled.ul`
  ${baseListStyles}
`
const OrderedList = styled.ol`
  ${baseListStyles}
`
export const ListItem = styled.li`
  display: ${props => (props.horizontal ? 'inline-block' : undefined)};
  margin-top: ${props => (props.horizontal ? 0 : `${goldenRatioSpacing(-1)}px`)};
  margin-right: ${props => (props.horizontal ? `${goldenRatioSpacing(-1)}px` : undefined)};
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`
