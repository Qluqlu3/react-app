import React from 'react'

interface Props {
  label: string
}

export const Tag: React.FC<Props> = ({ label }: Props) => {
  return <div className='py-2 px-4 bg-orange-500 text-2xl rounded-xl'>{label}</div>
}
