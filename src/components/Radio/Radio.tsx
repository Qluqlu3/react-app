import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  value: string;
  label: string;
};

export const Radio: React.FC<Props> = ({ name, value, label }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex gap-x-1 items-center">
      <input
        type="radio"
        value={value}
        id={value}
        {...register(name)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={value} className="text-xl">
        {label}
      </label>
      <div className="text-red-500 py-2 min-h-10">{errors[name] && errors[name].message?.toString()}</div>
    </div>
  );
};
