import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
};

export const Input = ({ name, label }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div>
      <div>{label}</div>
      <input type="text" {...register(name)} />
      {/* {errors[name] && <div>{errors.root}</div>} */}
    </div>
  );
};
