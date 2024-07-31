import { Link } from '@tanstack/react-router'
import { createBrowserHistory } from '@tanstack/history'
import clsx from 'clsx'

export const Navigation = () => {
  const { location } = createBrowserHistory()
  const currentPath = location.pathname

  const URL = {
    root: '/',
    about: '/about',
    slate: '/slate',
  } as const

  return (
    <div className='flex flex-row p-2 text-3xl bg-gray-700 rounded-md mb-3 [&>div]:py-2 [&>div]:px-3  [&>div]:text-3xl hover:[&>div]:text-green-200'>
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
      {/* <div>
        <Link to="/NotFound" className="text-red-500">
          NotFound
        </Link>
      </div> */}
      <div>
        <Link to={URL.slate} className={clsx(currentPath === URL.slate && 'text-green-500')}>
          Slate
        </Link>
      </div>
    </div>
  )
}
