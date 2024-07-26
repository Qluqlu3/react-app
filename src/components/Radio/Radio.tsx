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
    <div className="flex gap-x-1 items-center">
      <input
        type="radio"
        value={value}
        id={value}
        {...register(name)}
        className="w-5 h-5 text-green-600 bg-white border-green-300 dark:ring-offset-green-800 dark:bg-green-700 dark:border-green-600 ring-offset-green-800"
      />
      <label htmlFor={value} className="text-xl">
        {label}
      </label>
      <div className="text-red-500 py-2 min-h-10">{errors[name] && errors[name].message?.toString()}</div>
    </div>
  )
}
