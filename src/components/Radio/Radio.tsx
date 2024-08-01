import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
  value: string
  label: string
  checked?: boolean
}

export const Radio: React.FC<Props> = ({ name, value, label /* checked = false */ }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='flex items-center gap-x-1'>
      <input
        type='radio'
        value={value}
        id={value}
        {...register(name)}
        className='h-5 w-5 border-green-300 bg-white text-green-600 ring-offset-green-800 dark:border-green-600 dark:bg-green-700 dark:ring-offset-green-800'
      />
      <label htmlFor={value} className='text-xl'>
        {label}
      </label>
      <div className='min-h-10 py-2 text-red-500'>{errors[name] && errors[name].message?.toString()}</div>
    </div>
  )
}
