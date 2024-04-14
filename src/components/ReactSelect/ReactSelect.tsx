import React, { useCallback } from 'react';
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
};

export const ReactSelect: React.FC<Props> = ({ label, name, options, placeholder }: Props): JSX.Element => {
  const { control } = useFormContext();

  const handleOnChange = useCallback(
    (newValue: MultiValue<Option>, field: ControllerRenderProps<FieldValues, string>) => {
      field.onChange(newValue.map((x) => x.value));
    },
    [],
  );

  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            isMulti
            id="multi"
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
  );
};
