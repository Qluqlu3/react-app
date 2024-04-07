import { z } from 'zod';
import { Input } from '../../components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '../../components/Button';

export const About = () => {
  const methods = useForm();
  const schema = z.string().min(1, { message: '入力してください' });

  const onSubmit = (value: unknown) => {
    console.log(value);
  };

  return (
    <>
      <h1>Form</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="name" label="name" {...{ required: '必須', pattern: schema }} />
          <Button onClick={() => null} label="SUBMIT" />
        </form>
      </FormProvider>
    </>
  );
};
