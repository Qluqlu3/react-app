import React from 'react';
import { Link } from '@tanstack/react-router';
import { createBrowserHistory } from '@tanstack/history';
import clsx from 'clsx';

export const Navigation = () => {
  const { location } = createBrowserHistory();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-row p-2 text-3xl [&>div]:py-2 [&>div]:px-3  [&>div]:text-3xl hover:[&>div]:text-green-200">
      <div>
        <Link to="/" className={clsx(currentPath === '/' && 'text-green-500')}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" className={clsx(currentPath === '/about' && 'text-green-500')}>
          About
        </Link>
      </div>
      <div>
        <Link to="/NotFound" className="text-red-500">
          NotFound
        </Link>
      </div>
    </div>
  );
};
