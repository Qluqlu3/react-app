import React from 'react'

import { Link } from '@tanstack/react-router'

export const Navigation: React.FC = () => {
  const URL = {
    root: '/',
    about: '/about',
    slate: '/slate',
    chakra: '/chakra',
    csv: '/csv',
  } as const

  const activeProps = {
    style: {
      color: '#22c55e',
    },
  }

  return (
    <div className='mb-5 mt-3 flex flex-row rounded-md bg-gray-700 p-2 text-3xl [&>div]:px-3 [&>div]:py-2  [&>div]:text-3xl hover:[&>div]:text-green-200'>
      <div>
        <Link to={URL.root} activeOptions={{ exact: true }} activeProps={activeProps}>
          Home
        </Link>
      </div>
      <div>
        <Link to={URL.about} activeProps={activeProps}>
          About
        </Link>
      </div>
      <div>
        <Link to={URL.slate} activeProps={activeProps}>
          Slate
        </Link>
      </div>
      <div>
        <Link to={URL.chakra} activeProps={activeProps}>
          Chakra
        </Link>
      </div>
      <div>
        <Link to={URL.csv} activeProps={activeProps}>
          CSV
        </Link>
      </div>
    </div>
  )
}
