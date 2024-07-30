import React, { useCallback } from 'react'
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form'
import Select, { MultiValue } from 'react-select'

type Option = {
  label: string
  value: string
}

type Props = {
  label: string
  name: string
  options: Option[]
  placeholder?: string
  isRequired?: boolean
}

export const ReactSelect: React.FC<Props> = ({ label, name, options, placeholder, isRequired }: Props): JSX.Element => {
  const { control } = useFormContext()

  const handleOnChange = useCallback(
    (newValue: MultiValue<Option>, field: ControllerRenderProps<FieldValues, string>) => {
      field.onChange(newValue.map((x) => x.value))
    },
    [],
  )

  return (
    <div>
      <div>
        {label}
        {isRequired && <span className="text-red-500 text-2xl">*</span>}
      </div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            isMulti
            id={name}
            options={options}
            value={options.filter((x) => field.value?.includes(x.value))}
            onChange={(newValue) => handleOnChange(newValue, field)}
            closeMenuOnSelect={false}
            placeholder={placeholder}
            className="text-black"
          />
        )}
      />
    </div>
  )
}
