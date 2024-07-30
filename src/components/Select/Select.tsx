import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  label: string
  name: string
  options: { id: string; name: string }[]
  placeholder?: string
}

export const Select: React.FC<Props> = ({ label, name, options }: Props): JSX.Element => {
  const { register } = useFormContext()
  return (
    <div className="w-full">
      <div>{label}</div>
      <select {...register(name)} className="w-1/2">
        <option disabled selected className="none">
          選択してください
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id} className="bg-green-200 text-xl">
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
