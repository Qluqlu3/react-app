import React from 'react'

import { createBrowserHistory } from '@tanstack/history'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'

export const Navigation: React.FC = () => {
  const { location } = createBrowserHistory()
  const currentPath = location.pathname

  const URL = {
    root: '/',
    about: '/about',
    slate: '/slate',
    chakra: '/chakra',
    csv: '/csv',
  } as const

  return (
    <div className='mb-5 mt-3 flex flex-row rounded-md bg-gray-700 p-2 text-3xl [&>div]:px-3 [&>div]:py-2  [&>div]:text-3xl hover:[&>div]:text-green-200'>
      <div>
        <Link to={URL.root} className={clsx(currentPath === URL.root && 'text-green-500')}>
          Home
        </Link>
      </div>
      <div>
        <Link to={URL.about} className={clsx(currentPath === URL.about && 'text-green-500')}>
          About
        </Link>
      </div>
      <div>
        <Link to={URL.slate} className={clsx(currentPath === URL.slate && 'text-green-500')}>
          Slate
        </Link>
      </div>
      <div>
        <Link to={URL.chakra} className={clsx(currentPath === URL.chakra && 'text-green-500')}>
          Chakra
        </Link>
      </div>
      <div>
        <Link to={URL.csv} className={clsx(currentPath === URL.csv && 'text-green-500')}>
          CSV
        </Link>
      </div>
    </div>
  )
}
