import React, { useCallback, useState } from 'react'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, Preview } from '../../components'

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

  const methods = useForm({
    resolver: zodResolver(schema),
  })

  const handleOnClickPreview = useCallback(() => {
    setIsPreview(true)
  }, [])

  const handleOnClickBack = useCallback(() => {
    setIsPreview(false)
  }, [])

  return (
    <div>
      <h1 className='border-b border-blue-200 text-5xl'>Form</h1>
      <FormProvider {...methods}>
        {isPreview ? <Preview onClickBack={handleOnClickBack} /> : <Form onClick={handleOnClickPreview} />}
      </FormProvider>
    </div>
  )
}
