import React from 'react'

import { useFormContext } from 'react-hook-form'

type Props = {
  label: string
  name: string
  options: { id: string; name: string }[]
  placeholder?: string
  isRequired?: boolean
}

export const Select: React.FC<Props> = ({ label, name, options, isRequired = false }: Props): JSX.Element => {
  const { register } = useFormContext()
  return (
    <div className='w-full'>
      <div className='py-2 text-xl'>
        {label}
        {isRequired && <span className='text-2xl text-red-500'>*</span>}
      </div>
      <select {...register(name)} className='min-w-fit text-2xl'>
        <option disabled selected className='none'>
          選択してください
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
