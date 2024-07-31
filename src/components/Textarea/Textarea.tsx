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
      <div className='text-2xl py-2'>
        {label}
        {isRequired && <span className='text-red-500 text-2xl'>*</span>}
      </div>
      <textarea {...register(name)} rows={10} className='w-full text-xl text-white' placeholder='textarea...' />
    </div>
  )
}
