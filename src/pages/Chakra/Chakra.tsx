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
    { title: '①', description: '始めに' },
    { title: '②', description: '次に' },
  ]

  const { activeStep } = useSteps({
    index: 1,
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
      <Heading size='3xl' paddingY='3'>
        Chakra UI
      </Heading>
      <Grid templateColumns='repeat(2, 1fr)' gap='5' marginBottom='5'>
        <GridItem>
          <Button size='lg' colorScheme='green'>
            Button
          </Button>
        </GridItem>
        <GridItem>
          <Checkbox colorScheme='green' size='lg'>
            Checkbox
          </Checkbox>
        </GridItem>
        <GridItem>
          <Badge colorScheme='green' variant='solid' fontSize='20px' borderRadius='md'>
            Badge
          </Badge>
        </GridItem>
      </Grid>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
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
            <FormLabel htmlFor='notification' mb='0' fontSize='lg'>
              メール通知
            </FormLabel>
            <Switch size='lg' id='notification' colorScheme='green' {...register('notification')} />
          </FormControl>
          <FormControl isRequired>
            <Textarea placeholder='ここに入力…' {...register('content', { required: true })} />
          </FormControl>
          <Button
            type='submit'
            size='lg'
            colorScheme='green'
            marginTop='5'
            isDisabled={!isValid || isSubmitting}
            onClick={() =>
              toast({
                position: 'top-right',
                render: () => (
                  <Box color='white' p='3' bg='green.700' rounded='lg'>
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
      <Grid templateColumns='repeat(2, 1fr)' gap='3' marginTop='5'>
        {cardList.map((card) => (
          <ChakraCard key={card.id} {...card} onDelete={deleteCard} />
        ))}
      </Grid>
    </Box>
  )
}
