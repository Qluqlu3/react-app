import { useFormContext } from 'react-hook-form';

type Props = {
  type?: 'text' | 'number';
  name: string;
  label: string;
};

export const Input: React.FC<Props> = ({ type = 'text', name, label, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <div>
      <div className="text-2xl py-2">{label}</div>
      <input
        type={type}
        {...register(name, rest)}
        className="rounded-lg text-xl bg-gray-200 text-black focus:outline-green-600"
      />
      <div className="text-red-500 py-2 min-h-10">{errors[name] && errors[name].message?.toString()}</div>
    </div>
  );
};
