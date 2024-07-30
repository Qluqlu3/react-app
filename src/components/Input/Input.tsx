import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  type?: 'text' | 'number'
  name: string
  label: string
  isRequired?: boolean
}

export const Input: React.FC<Props> = ({ type = 'text', name, label, isRequired = false }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      <div className='text-2xl py-2'>
        {label}
        {isRequired && <span className='text-red-500 text-2xl'>*</span>}
      </div>
      <input
        type={type}
        {...register(name)}
        className='rounded-lg px-2 text-xl bg-gray-200 text-black focus:outline-green-600'
      />
      <div className='text-red-500 py-2 min-h-10'>{errors[name] && errors[name].message?.toString()}</div>
    </div>
  )
}
