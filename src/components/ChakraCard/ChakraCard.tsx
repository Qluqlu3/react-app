import React, { useCallback } from 'react'

import { DeleteIcon } from '@chakra-ui/icons'
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  IconButton,
  Stack,
  Tag,
  Tooltip,
  Text,
  Switch,
} from '@chakra-ui/react'

interface CardItem {
  id: string
  title: string
  content: string
  email: string
  notification: boolean
}

interface Props extends CardItem {
  onDelete: (id: string) => void
}

export const ChakraCard: React.FC<Props> = ({ id, title, content, email, notification, onDelete }: Props) => {
  const deleteCard = useCallback(() => {
    onDelete(id)
  }, [id, onDelete])

  return (
    <Card key={id} backgroundColor='whitesmoke' textColor='black'>
      <CardHeader>
        <HStack justifyContent='space-between'>
          <Heading size='md'>{title}</Heading>
          <Tooltip label='削除' hasArrow>
            <IconButton colorScheme='green' size='md' icon={<DeleteIcon />} aria-label='delete' onClick={deleteCard} />
          </Tooltip>
        </HStack>
      </CardHeader>
      <CardBody>
        <Stack>
          <Tag size='md' colorScheme='green' width='fit-content'>
            メールアドレス
          </Tag>
          <Text fontSize='md'>{email}</Text>
          <Tag size='lg' colorScheme='green' width='fit-content'>
            内容
          </Tag>
          <Text fontSize='md'>{content}</Text>
          <Tag size='lg' colorScheme='green' width='fit-content'>
            通知
          </Tag>
          <Switch isReadOnly isChecked={notification} colorScheme='green' size='lg' pointerEvents='none' />
        </Stack>
      </CardBody>
    </Card>
  )
}
