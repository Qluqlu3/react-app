import React from 'react'

import { Link } from '@tanstack/react-router'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

const ICON_SIZE = 80

export const App: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='m-1 flex w-full items-center justify-center'>
        <Link href='https://react.dev' target='_blank'>
          <img alt='React logo' src={reactLogo} width={ICON_SIZE} />
        </Link>
        <h1 className='px-2 pb-5 pt-2 text-8xl font-bold'>React</h1>
        <h1 className='text-6xl'> + </h1>
        <Link href='https://vitejs.dev' target='_blank'>
          <img alt='Vite logo' src={viteLogo} width={ICON_SIZE} />
        </Link>
        <h1 className='px-2 pb-5 pt-2 text-8xl font-bold'>Vite</h1>
      </div>
    </div>
  )
}
