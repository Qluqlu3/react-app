import React from 'react'

import { useFormContext } from 'react-hook-form'

import { FormInput } from '../../pages'
import { Button } from '../form/Button'
import { Input } from '../form/Input'
import { Radio } from '../form/Radio'
import { ReactSelect } from '../form/ReactSelect'
import { Select } from '../form/Select'
import { Textarea } from '../form/Textarea'

interface Props {
  onClick: () => void
}

export const AboutForm: React.FC<Props> = ({ onClick }: Props) => {
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
    formState: { isValid },
  } = useFormContext<FormInput>()

  return (
    <>
      <div className='grid grid-cols-2 gap-x-8'>
        <div className='w-full'>
          <Input isRequired label='テキスト' name='text' />
        </div>
        <div className='w-full'>
          <Input isRequired label='数値' name='num' type='number' />
        </div>
        <div className='flex w-full flex-col gap-x-5'>
          <div className='py-2 text-xl'>
            通知<span className='text-2xl text-red-500'>*</span>
          </div>
          <div className='flex gap-x-5'>
            <Radio label='通知オン' name='notification' value='on' />
            <Radio label='通知オフ' name='notification' value='off' />
          </div>
        </div>
        <div className='flex w-full gap-x-5'>
          <Select isRequired label='セレクトボックス' name='selectBox' options={countryOptions} />
        </div>
      </div>
      <div className='my-5'>
        <ReactSelect isRequired label='タグ選択' name='multi' options={programmingLanguages} />
      </div>
      <div>
        <Textarea label='テキストエリア' name='note' />
      </div>
      <div className='mt-3 flex justify-end'>
        <Button isDisabled={!isValid} label='Preview' onClick={onClick} />
      </div>
    </>
  )
}
