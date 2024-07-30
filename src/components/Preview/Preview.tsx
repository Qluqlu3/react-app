import { useFormContext } from 'react-hook-form'
import { Button } from '../Button'

interface Props {
  onClickBack: () => void
}

export const Preview: React.FC<Props> = ({ onClickBack }: Props) => {
  const { getValues } = useFormContext()
  const name = getValues('name')

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-8 w-full'>
        <div>
          <div className='text-2xl'>Name</div>
          <div className='w-full text-3xl'>{name}</div>
        </div>
        <div></div>
      </div>
      <div className='flex flex-1 mt-5 justify-end w-full'>
        <Button label={'戻る'} onClick={onClickBack} />
      </div>
    </div>
  )
}
