import React from 'react'

import { Link } from '@tanstack/react-router'
import { FaCommentDots, FaFileCsv, FaFilePen, FaHouse, FaList, FaPaintbrush, FaVideo } from 'react-icons/fa6'

const ICON_SIZE = '38'

export const Navigation: React.FC = () => {
  const sidebarLinks = [
    { path: '/', Icon: FaHouse, exact: true },
    { path: '/about', Icon: FaFilePen },
    { path: '/slate', Icon: FaCommentDots },
    { path: '/chakra', Icon: FaPaintbrush },
    { path: '/csv', Icon: FaFileCsv },
    { path: '/video', Icon: FaVideo },
    { path: '/list', Icon: FaList },
    // <FaRegNewspaper />,
  ]

  const activeProps = {
    style: {
      color: '#22c55e',
    },
  }

  return (
    <div className='flex w-[80px] flex-col items-center gap-y-3 bg-gray-700 p-2 [&>div]:px-3 [&>div]:py-2 hover:[&>div]:text-green-200'>
      {sidebarLinks.map(({ path, Icon, exact = false }) => (
        <div key={path}>
          <Link activeOptions={{ exact }} activeProps={activeProps} to={path}>
            <Icon size={ICON_SIZE} />
          </Link>
        </div>
      ))}
    </div>
  )
}
