import React from 'react';
import clsx from 'clsx';

type Props = {
  label: string;
  isValid?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ label, isValid, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={!isValid}
      className={clsx('text-2xl px-4 py-2 rounded-xl bg-green-600', !isValid ? 'bg-gray-400' : 'hover:bg-green-500')}
    >
      {label}
    </button>
  );
};
