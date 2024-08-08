import React, { useCallback, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, Preview } from '../../components'

export interface FormInput {
  text: string
  notification: 'on' | 'off'
  selectBox: string
  multi: string[]
  note?: string
}

export const About: React.FC = () => {
  const schema = z.object({
    text: z.string().min(1, { message: '入力してください' }),
    num: z.string().min(1, { message: '入力してください' }),
    notification: z.enum(['on', 'off']),
    selectBox: z.string().min(1, { message: '入力してください' }),
    multi: z.array(z.string()).min(1, { message: '入力してください' }),
    note: z.string().optional(),
  })
  const [isPreview, setIsPreview] = useState(false)
  const [formValue, setFormValue] = useState<FormInput | undefined>(undefined)

  const methods = useForm<FormInput>({
    resolver: zodResolver(schema),
  })

  const handleOnClickPreview = useCallback(() => {
    setIsPreview(true)
  }, [])

  const handleOnClickBack = useCallback(() => {
    setIsPreview(false)
  }, [])

  const submit = useCallback((value: FormInput) => {
    // console.log(value)
    setFormValue(value)
    setIsPreview(false)
  }, [])

  return (
    <div>
      <h1 className='mb-3 border-b-2 border-green-700 text-6xl'>Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submit)} defaultValue={''} id='about-form-id'>
          {isPreview ? <Preview onClickBack={handleOnClickBack} /> : <Form onClick={handleOnClickPreview} />}
        </form>
      </FormProvider>
      <div>
        <div>{formValue?.text}</div>
      </div>
    </div>
  )
}
