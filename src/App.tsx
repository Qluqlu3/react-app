import reactLogo from './assets/react.svg'
import { Navigation } from './layout/Navigation'
import viteLogo from '/vite.svg'
import { Link } from '@tanstack/react-router'

const ICON_SIZE = 80

export const App = () => {
  return (
    <div>
      <div className='m-1 flex w-full items-center justify-center'>
        <Link href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} width={ICON_SIZE} alt='Vite logo' />
        </Link>
        <Link href='https://react.dev' target='_blank'>
          <img src={reactLogo} width={ICON_SIZE} alt='React logo' />
        </Link>
        <h1 className='mx-2 text-7xl'>Vite + React</h1>
      </div>
      <Navigation />
    </div>
  )
}
