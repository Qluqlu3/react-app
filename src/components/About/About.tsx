import { Input } from '../Input';
import { FormProvider, useForm } from 'react-hook-form';

export const About = () => {
  const methods = useForm();
  return (
    <>
      <h1>About</h1>
      <FormProvider {...methods}>
        <Input name={'s'} label={'s'} />
      </FormProvider>
    </>
  );
};
