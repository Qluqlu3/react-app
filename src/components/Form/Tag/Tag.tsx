import React from 'react'

interface Props {
  label: string
}

export const Tag: React.FC<Props> = ({ label }: Props) => {
  return <div className='rounded-xl bg-orange-500 px-4 py-2 text-2xl'>{label}</div>
}
