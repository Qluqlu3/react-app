import { Link } from '@tanstack/react-router';

export const Navigation = () => {
  return (
    <div className="flex flex-row p-2 text-3xl [&>div]:py-2 [&>div]:px-3  [&>div]:text-3xl hover:[&>div]:text-green-200">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/notfound">notfound</Link>
      </div>
    </div>
  );
};
