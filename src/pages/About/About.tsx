import React from 'react';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '../../components';

export const About: React.FC = () => {
  const schema = z.object({
    name: z.string().min(1, { message: '入力してください' }),
    num: z.string().min(1, { message: '入力してください' }),
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
          <div className="flex flex-row gap-x-8">
            <Input name="name" label="name" isRequired />
            <Input type="number" name="num" label="数値" isRequired />
          </div>
          <div className="flex justify-end">
            <Button label="SUBMIT" isValid={isValid} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
