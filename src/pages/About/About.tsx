import React from 'react';
import { z } from 'zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from 'react-select';

import { Button, Input, Radio, Select as SelectBox, ReactSelect } from '../../components';

// type DefaultValue = {
//   name: string;
//   num: string | number;
//   notification: 'on' | 'off';
//   selectBox: string;
// };

interface OptionType {
  value: string;
  label: string;
}

const optionsVer1 = [
  {
    id: '11',
    name: 'Select1',
  },
  {
    id: '22',
    name: 'Select2',
  },
  {
    id: '33',
    name: 'Select3',
  },
];

const optionsVer2 = [
  { label: 'A', value: 'A' },
  { label: 'BBBBBB', value: 'BBBBB' },
  { label: 'CCC', value: 'CCC' },
  { label: 'Z', value: 'Z' },
  { label: 'X', value: 'X' },
  { label: 'S', value: 'S' },
  { label: 'Q', value: 'Q' },
  { label: 'W', value: 'W' },
  { label: 'E', value: 'E' },
];

export const About: React.FC = () => {
  const schema = z.object({
    name: z.string().min(1, { message: '入力してください' }),
    num: z.string().min(1, { message: '入力してください' }),
    notification: z.enum(['on', 'off']),
    selectBox: z.string().min(1, { message: '入力してください' }),
    multi: z.array(z.string()).min(1, { message: '入力してください' }),
  });

  // const defaultValue = {
  //   name: '',
  //   num: '',
  //   notification: 'off',
  //   selectBox: '',
  // } satisfies DefaultValue;

  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { isValid },
  } = methods;

  const onSubmit = (value: unknown) => {
    console.log('SUBMIT', value);
  };

  console.log('isValid', isValid);
  console.log('watch', watch('multi'));

  // const handleChange = (selectedOptions: OptionsType<OptionType>) => {
  //   const selectedValues = selectedOptions.map((option) => option.value);
  //   setValue('fruits', selectedValues);
  // };

  return (
    <div>
      <h1 className="text-5xl">Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} defaultValue={''}>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="w-[100%]">
              <Input name="name" label="name" isRequired />
            </div>
            <div className="w-[100%]">
              <Input type="number" name="num" label="数値" isRequired />
            </div>
            <div className="flex w-[100%] gap-x-5">
              <Radio name="notification" value="on" label="通知オン" />
              <Radio name="notification" value="off" label="通知オフ" />
            </div>
            <div className="flex w-[100%] gap-x-5">
              <SelectBox label="セレクトボックス" name="selectBox" options={optionsVer1} />
            </div>
          </div>
          <div className="my-5">
            <ReactSelect label={'LABEL'} name="multi" options={optionsVer2} value={''} />
          </div>
          <div className="flex justify-end">
            <Button label="SUBMIT" isValid={isValid} />
          </div>
        </form>
      </FormProvider>
      <hr />

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Select
              id="fruits"
              options={optionsVer2}
              isMulti
              value={optionsVer2.find((x) => x.value === field.value)}
              onChange={(newValue) => {
                field.onChange(newValue?.value);
              }}
            />
          )}
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};
