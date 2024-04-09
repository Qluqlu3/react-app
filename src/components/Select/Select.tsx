import React from 'react';

type Props = {
  label: string;
  name: string;
  options: { id: string; name: string }[];
  placeholder?: string;
};

export const Select: React.FC<Props> = ({ label, name, options }: Props): JSX.Element => {
  return (
    <div className="w-full">
      <div>{label}</div>
      <select name={name} className="w-1/2">
        <option value="" disabled selected className="none">
          選択してください
        </option>
        {options.map((option) => (
          <option key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};
