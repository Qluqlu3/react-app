import React, { useCallback, useRef } from 'react'

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
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null)
  const deleteCard = useCallback(() => {
    onDelete(id)
  }, [id, onDelete])

  return (
    <Card key={id} backgroundColor='whitesmoke' textColor='black'>
      <CardHeader>
        <HStack justifyContent='space-between'>
          <Heading size='md'>{title}</Heading>
          <Tooltip label='削除' hasArrow>
            <IconButton colorScheme='red' size='md' icon={<DeleteIcon />} aria-label='delete-button' onClick={onOpen} />
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
              <AlertDialogOverlay>
                <AlertDialogContent>
                  <AlertDialogBody>削除しますか？</AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='red' size='md' onClick={deleteCard} />
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
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
