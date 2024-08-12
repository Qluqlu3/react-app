import React from 'react'

import { useFormContext } from 'react-hook-form'

interface Props {
  label: string
  name: string
  isRequired?: boolean
}

export const Textarea: React.FC<Props> = ({ label, name, isRequired = false }: Props) => {
  const {
    register,
    // formState: { errors },
  } = useFormContext()
  return (
    <div>
      <div className='py-2 text-xl'>
        {label}
        {isRequired && <span className='text-2xl text-red-500'>*</span>}
      </div>
      <textarea {...register(name)} rows={10} className='w-full p-3 text-2xl text-white' placeholder='textarea...' />
    </div>
  )
}
