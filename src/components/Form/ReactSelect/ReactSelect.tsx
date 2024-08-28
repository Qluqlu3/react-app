import React, { useCallback } from 'react'

import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form'
import Select, { MultiValue, StylesConfig } from 'react-select'

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

  const customStyles: StylesConfig<Option, true> = {
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#86efac',
    }),
    option: (provided) => ({
      ...provided,
      ':hover': {
        backgroundColor: '#dcfce7',
      },
    }),
  }

  const handleOnChange = useCallback(
    (newValue: MultiValue<Option>, field: ControllerRenderProps<FieldValues, string>) => {
      field.onChange(newValue.map((x) => x.value))
    },
    [],
  )

  return (
    <div>
      <div className='py-2 text-xl'>
        {label}
        {isRequired && <span className='text-2xl text-red-500'>*</span>}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            isMulti
            className='text-2xl text-black'
            closeMenuOnSelect={false}
            id={name}
            options={options}
            placeholder={placeholder}
            styles={customStyles}
            value={options.filter((x) => field.value?.includes(x.value))}
            onChange={(newValue) => handleOnChange(newValue, field)}
          />
        )}
        rules={{ required: true }}
      />
    </div>
  )
}
