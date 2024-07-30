import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../Input'
import { Radio } from '../Radio'
import { ReactSelect } from '../ReactSelect'
import { Textarea } from '../Textarea'
import { Select } from '../Select'
import { Button } from '../Button'

interface Props {
  onClick: () => void
}

export const Form: React.FC<Props> = ({ onClick }: Props) => {
  const optionsVer1 = [
    {
      id: '11',
      name: 'Select1',
    },
    {
      id: '22',
      name: 'Select2',
    },
    {
      id: '33',
      name: 'Select3',
    },
  ]

  const optionsVer2 = [
    { label: 'A', value: 'A' },
    { label: 'BBBBBB', value: 'BBBBB' },
    { label: 'CCC', value: 'CCC' },
    { label: 'Z', value: 'Z' },
    { label: 'X', value: 'X' },
    { label: 'S', value: 'S' },
    { label: 'Q', value: 'Q' },
    { label: 'W', value: 'W' },
    { label: 'E', value: 'E' },
  ]

  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext()

  const onSubmit = (value: unknown) => {
    console.log('SUBMIT', value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} defaultValue={''} id="about-form-id">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="w-[100%]">
          <Input name="name" label="name" isRequired />
        </div>
        <div className="w-[100%]">
          <Input type="number" name="num" label="数値" isRequired />
        </div>
        <div className="flex w-[100%] gap-x-5">
          <Radio name="notification" value="on" label="通知オン" />
          <Radio name="notification" value="off" label="通知オフ" />
        </div>
        <div className="flex w-[100%] gap-x-5">
          <Select label="セレクトボックス" name="selectBox" options={optionsVer1} />
        </div>
      </div>
      <div className="my-5">
        <ReactSelect label={'LABEL'} name="multi" options={optionsVer2} />
      </div>
      <div>
        <Textarea />
      </div>
      <div className="flex justify-end">
        <Button label="Preview" isValid={isValid} onClick={onClick} />
      </div>
    </form>
  )
}
