import React from 'react';
import clsx from 'clsx';

type Props = {
  label: string;
  isValid?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ label, isValid = true, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={!isValid}
      className={clsx('text-2xl px-4 py-2 rounded-xl ', isValid ? 'hover:bg-green-500 bg-green-600' : 'bg-gray-400')}
    >
      {label}
    </button>
  );
};
