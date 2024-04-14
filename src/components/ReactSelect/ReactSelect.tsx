import React, { useCallback } from 'react';
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form';
import Select, { OptionType } from 'react-select';

type Props = {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  value: string;
  placeholder?: string;
};

export const ReactSelect: React.FC<Props> = ({ label, name, options, value }: Props): JSX.Element => {
  const { register, setValue, getValues, control, watch } = useFormContext();

  const handleOnChange = useCallback((newValue: unknown[], field: ControllerRenderProps<FieldValues, string>) => {
    field.onChange(newValue?.map((x) => x?.value));
  }, []);

  const handleOnBlur = useCallback(() => {
    console.log('BLUR');
  }, []);

  console.log(value);

  return (
    <div>
      <div>{label}</div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            id="multi"
            options={options}
            isMulti
            value={options.filter((x) => field.value?.includes(x.value))}
            onChange={(newValue) => handleOnChange(newValue, field)}
            closeMenuOnSelect={false}
            className="text-black"
          />
        )}
      />
    </div>
  );
};
