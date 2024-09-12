import React, { useRef } from 'react'

import { Box } from '@chakra-ui/react'
import { useDrag, useDrop } from 'react-dnd'
import { FaGripVertical } from 'react-icons/fa6'

import { DraggedItemType } from '..'

interface Props {
  item: DraggedItemType
  index: number
  moveItem: (dragIndex: number, hoverIndex: number) => void
}

const ItemType = 'LIST_ITEM'

export const ListItem: React.FC<Props> = ({ item, index, moveItem }: Props) => {
  const listItemRef = useRef<HTMLDivElement | null>(null)

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }) => {
      if (!listItemRef.current) return
      if (draggedItem.index === index) return

      moveItem(draggedItem.index, index)
      draggedItem.index = index
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(listItemRef))

  return (
    <Box
      ref={listItemRef}
      bg={isDragging ? 'green.700' : 'green.900'}
      cursor='move'
      display='flex'
      h='150px'
      justifyContent='space-between'
      padding='3'
    >
      {item.name}
      <FaGripVertical color='white' size='20' />
    </Box>
  )
}
