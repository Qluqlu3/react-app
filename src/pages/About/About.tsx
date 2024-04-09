import React from 'react';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input, Radio, Select } from '../../components';

const options = [
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

export const About: React.FC = () => {
  const schema = z.object({
    name: z.string().min(1, { message: '入力してください' }),
    num: z.string().min(1, { message: '入力してください' }),
    notification: z.enum(['on', 'off']),
    selectBox: z.string(),
  });

  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (value: unknown) => {
    console.log(value);
  };

  return (
    <div>
      <h1 className="text-5xl">Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <Select label="セレクトボックス" name="selectBox" options={options} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button label="SUBMIT" isValid={isValid} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
