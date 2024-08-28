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
  AlertDialogHeader,
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
          <Tooltip hasArrow label='削除'>
            <>
              <IconButton
                aria-label='delete-button'
                colorScheme='red'
                icon={<DeleteIcon />}
                size='md'
                onClick={onOpen}
              />
              <AlertDialog
                closeOnOverlayClick
                isCentered
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                motionPreset='slideInBottom'
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader></AlertDialogHeader>
                    <AlertDialogBody alignItems='center' display='flex' justifyContent='center' padding='3'>
                      削除しますか？
                    </AlertDialogBody>
                    <AlertDialogFooter columnGap='5' display='flex'>
                      <Button ref={cancelRef} onClick={onClose}>
                        キャンセル
                      </Button>
                      <Button colorScheme='red' size='md' onClick={deleteCard}>
                        削除
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
          </Tooltip>
        </HStack>
      </CardHeader>
      <CardBody>
        <Stack>
          <Tag colorScheme='green' size='md' width='fit-content'>
            メールアドレス
          </Tag>
          <Text fontSize='md'>{email}</Text>
          <Tag colorScheme='green' size='lg' width='fit-content'>
            内容
          </Tag>
          <Text fontSize='md'>{content}</Text>
          <Tag colorScheme='green' size='lg' width='fit-content'>
            通知
          </Tag>
          <Switch isReadOnly colorScheme='green' isChecked={notification} pointerEvents='none' size='lg' />
        </Stack>
      </CardBody>
    </Card>
  )
}
