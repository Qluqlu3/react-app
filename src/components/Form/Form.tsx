import React from 'react'

import { useFormContext } from 'react-hook-form'

import { Button } from '../Button'
import { Input } from '../Input'
import { Radio } from '../Radio'
import { ReactSelect } from '../ReactSelect'
import { Select } from '../Select'
import { Textarea } from '../Textarea'

interface Props {
  onClick: () => void
}

export const Form: React.FC<Props> = ({ onClick }: Props) => {
  const countryOptions = [
    { id: '1', name: 'アメリカ' },
    { id: '2', name: 'カナダ' },
    { id: '3', name: 'イギリス' },
    { id: '4', name: 'オーストラリア' },
    { id: '5', name: 'ドイツ' },
    { id: '6', name: 'フランス' },
    { id: '7', name: '日本' },
  ]

  const programmingLanguages = [
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'Python', value: 'Python' },
    { label: 'Java', value: 'Java' },
    { label: 'C++', value: 'C++' },
    { label: 'C#', value: 'C#' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Ruby', value: 'Ruby' },
    { label: 'Go', value: 'Go' },
    { label: 'Swift', value: 'Swift' },
    { label: 'Kotlin', value: 'Kotlin' },
  ]

  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext()

  const onSubmit = (value: unknown) => {
    // eslint-disable-next-line no-console
    console.log('SUBMIT', value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} defaultValue={''} id='about-form-id'>
      <div className='grid grid-cols-2 gap-x-8'>
        <div className='w-full'>
          <Input name='text' label='テキスト' isRequired />
        </div>
        <div className='w-full'>
          <Input type='number' name='num' label='数値' isRequired />
        </div>
        <div className='flex w-full flex-col gap-x-5'>
          <div className='py-2 text-xl'>
            通知<span className='text-2xl text-red-500'>*</span>
          </div>
          <div className='flex gap-x-5'>
            <Radio name='notification' value='on' label='通知オン' />
            <Radio name='notification' value='off' label='通知オフ' />
          </div>
        </div>
        <div className='flex w-full gap-x-5'>
          <Select label='セレクトボックス' name='selectBox' options={countryOptions} isRequired />
        </div>
      </div>
      <div className='my-5'>
        <ReactSelect label='タグ選択' name='multi' options={programmingLanguages} isRequired />
      </div>
      <div>
        <Textarea label='テキストエリア' name='note' />
      </div>
      <div className='mt-3 flex justify-end'>
        <Button label='Preview' isDisabled={!isValid} onClick={onClick} />
      </div>
    </form>
  )
}
