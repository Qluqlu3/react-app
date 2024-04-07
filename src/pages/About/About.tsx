import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input } from '../../components';

export const About: React.FC = () => {
  const schema = z.object({ name: z.string().min(1, { message: '入力してください' }) });

  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (value: unknown) => {
    console.log(value);
  };

  return (
    <>
      <h1>Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="name" label="name" />
          <Button label="SUBMIT" />
        </form>
      </FormProvider>
    </>
  );
};
