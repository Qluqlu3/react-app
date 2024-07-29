import { useFormContext } from 'react-hook-form'

interface Props {}

export const Preview: React.FC<Props> = ({}: Props) => {
  const { getValues } = useFormContext()
  const value = getValues('name')

  return (
    <div>
      <div>{value}</div>
    </div>
  )
}
