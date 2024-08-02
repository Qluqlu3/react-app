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
      <div className='py-2 text-xl'>
        {label}
        {isRequired && <span className='text-2xl text-red-500'>*</span>}
      </div>
      <input
        type={type}
        {...register(name)}
        className='rounded-lg bg-gray-200 px-2 text-2xl text-black focus:outline-green-600'
      />
      <div className='min-h-10 py-2 text-red-500'>{errors[name] && errors[name].message?.toString()}</div>
    </div>
  )
}
