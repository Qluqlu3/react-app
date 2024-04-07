import { Router, RootRoute, Route, Outlet, NotFoundRoute } from '@tanstack/react-router';

import { App } from '../App';
import { About, NotFound, Home } from '../pages';

const rootRoute = new RootRoute({
  component: () => (
    <>
      <App />
      <Outlet />
    </>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => <About />,
});

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <NotFound />,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = new Router({ routeTree, notFoundRoute });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
