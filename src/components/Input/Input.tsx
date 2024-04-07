import { useFormContext } from 'react-hook-form';
import { z, ZodSchema } from 'zod';

interface ValidationSchema extends Record<string, ZodSchema<any>> {
  value: ZodSchema<string>;
}

type Props = {
  name: string;
  label: string;
};

export const Input: React.FC<Props> = ({ name, label, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div>
      <div>{label}</div>
      <input type="text" {...register(name, rest)} />
      {errors[name] && <div>{errors[name].message?.toString()}</div>}
    </div>
  );
};
