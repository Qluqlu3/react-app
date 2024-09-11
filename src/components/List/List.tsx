import React, { useState } from 'react'

import { Box, Grid, GridItem } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { HeaderText } from '../HeaderText'
import { ListItem } from '../ListItem'

export interface DraggedItemType {
  id: string
  name: string
}

export const List: React.FC = () => {
  const initItems: DraggedItemType[] = [
    {
      id: '1',
      name: 'Item 1',
    },
    {
      id: '2',
      name: 'Item 2',
    },
    {
      id: '3',
      name: 'Item 3',
    },
    {
      id: '4',
      name: 'Item 4',
    },
    {
      id: '5',
      name: 'Item 5',
    },
    {
      id: '6',
      name: 'Item 6',
    },
    {
      id: '7',
      name: 'Item 7',
    },
    {
      id: '8',
      name: 'Item 8',
    },
    {
      id: '9',
      name: 'Item 9',
    },
    {
      id: '10',
      name: 'Item 10',
    },
  ]
  const [items, setItems] = useState(initItems)
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const newItems = [...items]
    const [movedItem] = newItems.splice(dragIndex, 1)
    newItems.splice(hoverIndex, 0, movedItem)
    setItems(newItems)
  }

  return (
    <Box>
      <HeaderText>List</HeaderText>
      <DndProvider backend={HTML5Backend}>
        <Grid borderRadius='lg' boxShadow='md' fontSize='x-large' gridGap='3' templateColumns='repeat(3, 1fr)'>
          {items.map((item, index) => (
            <GridItem key={item.id}>
              <ListItem index={index} item={item} moveItem={moveItem} />
            </GridItem>
          ))}
        </Grid>
      </DndProvider>
    </Box>
  )
}
