import React, { useCallback, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { AboutForm, HeaderText, Preview } from '../../components'

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
    setFormValue(value)
    setIsPreview(false)
  }, [])

  return (
    <div>
      <HeaderText>Form</HeaderText>
      <FormProvider {...methods}>
        <form defaultValue={''} id='about-form-id' onSubmit={methods.handleSubmit(submit)}>
          {isPreview ? <Preview onClickBack={handleOnClickBack} /> : <AboutForm onClick={handleOnClickPreview} />}
        </form>
      </FormProvider>
      <div>
        <div>{formValue?.text}</div>
      </div>
    </div>
  )
}
