import React from 'react'

import { useFormContext } from 'react-hook-form'

import { Button, Tag } from '../form'

interface Props {
  onClickBack: () => void
}

export const Preview: React.FC<Props> = ({ onClickBack }: Props) => {
  const { getValues } = useFormContext()
  const text: string = getValues('text')
  const num: number = getValues('num')
  const notification: string = getValues('notification')
  const note = getValues('note')
  const multi: string[] = getValues('multi')

  return (
    <div className='mt-3 w-full'>
      <div className='grid w-full grid-cols-2 gap-8'>
        <div>
          <div className='text-xl'>テキスト</div>
          <div className='w-full p-2 text-3xl'>{text}</div>
        </div>
        <div>
          <div className='text-xl'>数値</div>
          <div className='w-full p-2 text-3xl'>{num}</div>
        </div>
        <div>
          <div className='text-xl'>通知</div>
          <div className='w-full p-2 text-xl'>{notification}</div>
        </div>
        <div>
          <div className='text-xl'>multi</div>
          <div className='w-full text-3xl'>
            <div className='flex flex-wrap gap-3 p-2'>
              {multi.map((value) => (
                <Tag key={value} label={value} />
              ))}
            </div>
          </div>
        </div>
        <div className='w-ful col-span-2'>
          <div className='text-xl'>note</div>
          <div className='w-full text-wrap text-xl'>{note}</div>
        </div>
      </div>
      <div className='mt-5 flex w-full flex-1 justify-end gap-x-5'>
        <Button label='戻る' variant='secondary' onClick={onClickBack} />
        <Button label='送信' type='submit' variant='primary' />
      </div>
    </div>
  )
}
