import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from '@tanstack/react-router';

export const App = () => {
  return (
    <div>
      <div className='flex'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} width={200} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} width={200} alt='React logo' />
        </a>
      </div>
      <h1 className='text-8xl'>Vite + React</h1>
      <div className='p-4 text-3xl [&>li]:p-1 [&>li]:text-3xl'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/notfound'>notfound</Link>
        </li>
      </div>
    </div>
  );
};
