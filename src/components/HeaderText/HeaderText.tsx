import React from 'react'

import { ReactNode } from '@tanstack/react-router'

interface Props {
  children: ReactNode
}

export const HeaderText: React.FC<Props> = ({ children }: Props) => {
  return <h1 className='mb-5 border-b-2 border-green-700 text-6xl font-bold'>{children}</h1>
}
