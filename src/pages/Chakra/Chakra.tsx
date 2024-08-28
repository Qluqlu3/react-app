import React, { useCallback, useState } from 'react'

import {
  Button,
  Checkbox,
  Heading,
  Grid,
  GridItem,
  Badge,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Switch,
  Stack,
  Box,
  Textarea,
  useToast,
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepDescription,
  StepIcon,
  StepNumber,
  StepSeparator,
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'

import { ChakraCard } from '../../components'

interface CardItem {
  id: string
  title: string
  content: string
  email: string
  notification: boolean
}

export const Chakra: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<CardItem>()
  const [cardList, setCardList] = useState<CardItem[]>([])
  const toast = useToast()

  const steps = [
    { title: '1', description: '始めに' },
    { title: '2', description: '記入' },
    { title: '3', description: '完了' },
  ]

  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const createCard = useCallback(
    ({ ...value }: Omit<CardItem, 'id'>) => {
      setCardList([
        ...cardList,
        {
          ...value,
          id: nanoid(),
        },
      ])
      reset()
    },
    [cardList, reset],
  )

  const deleteCard = useCallback(
    (id: CardItem['id']) => {
      setCardList(cardList.filter((card) => card.id !== id))
    },
    [cardList],
  )

  return (
    <Box>
      <Heading paddingY='3' size='3xl'>
        Chakra UI
      </Heading>
      <Grid gap='5' marginBottom='5' templateColumns='repeat(2, 1fr)'>
        <GridItem>
          <Button colorScheme='green' size='lg'>
            Button
          </Button>
        </GridItem>
        <GridItem>
          <Checkbox colorScheme='green' size='lg'>
            Checkbox
          </Checkbox>
        </GridItem>
        <GridItem>
          <Badge borderRadius='md' colorScheme='green' fontSize='20px' variant='solid'>
            Badge
          </Badge>
        </GridItem>
      </Grid>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus active={<StepNumber />} complete={<StepIcon />} incomplete={<StepNumber />} />
            </StepIndicator>
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(createCard)}>
        <Stack rowGap='5'>
          <FormControl isRequired>
            <FormLabel fontSize='lg'>タイトル</FormLabel>
            <Input type='text' {...register('title', { required: true })} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize='lg'>メールアドレス</FormLabel>
            <Input type='email' {...register('email', { required: true })} />
            <FormHelperText>入力間違いに注意</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel fontSize='lg' htmlFor='notification' mb='0'>
              メール通知
            </FormLabel>
            <Switch colorScheme='green' id='notification' size='lg' {...register('notification')} />
          </FormControl>
          <FormControl isRequired>
            <Textarea placeholder='ここに入力…' {...register('content', { required: true })} />
          </FormControl>
          <Button
            colorScheme='green'
            isDisabled={!isValid || isSubmitting}
            marginTop='5'
            size='lg'
            type='submit'
            onClick={() =>
              toast({
                position: 'top-right',
                isClosable: true,
                render: () => (
                  <Box bg='green.700' color='white' p='3' rounded='lg'>
                    作成完了
                  </Box>
                ),
              })
            }
          >
            Create
          </Button>
        </Stack>
      </form>
      <Grid gap='3' marginTop='5' templateColumns='repeat(2, 1fr)'>
        {cardList.map((card) => (
          <ChakraCard key={card.id} {...card} onDelete={deleteCard} />
        ))}
      </Grid>
    </Box>
  )
}
