import reactLogo from './assets/react.svg';
import { Navigation } from './layout/Navigation';
import viteLogo from '/vite.svg';
import { Link } from '@tanstack/react-router';

const ICON_SIZE = 80;

export const App = () => {
  return (
    <div>
      <div className="flex w-[100%] justify-center items-center m-1">
        <Link href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} width={ICON_SIZE} alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank">
          <img src={reactLogo} width={ICON_SIZE} alt="React logo" />
        </Link>
        <h1 className="text-7xl mx-2">Vite + React</h1>
      </div>
      <Navigation />
    </div>
  );
};
