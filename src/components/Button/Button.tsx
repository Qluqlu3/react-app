type Props = {
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ label, onClick }: Props) => {
  return (
    <button onClick={onClick} className="text-2xl px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500">
      {label}
    </button>
  );
};
